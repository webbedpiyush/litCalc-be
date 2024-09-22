const fs = require("fs");
const express = require("express");
const path = require("path");
const router = express.Router();
const dotenv = require("dotenv");
dotenv.config();

const { getPrompt } = require("../prompt");

const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

function fileToGenerativePath(path, mimeType) {
  return {
    inlineData: {
      data: Buffer.from(fs.readFileSync(path)).toString("base64"),
      mimeType,
    },
  };
}

router.get("/", (req, res) => {
  res.send("this is a testing endpoint");
});

router.post("/", (req, res) => {
  const { image, dict_of_vars } = req.body;

  const prompt = getPrompt(dict_of_vars);

  // Extract base64 string and determine the file type
  const base64Data = image.split(",")[1];
  const buffer = Buffer.from(base64Data, "base64");

  // Define the path to save the image
  const mediaPath = path.join(__dirname, "media"); // Ensure this directory exists

  // Ensure the media directory exists
  if (!fs.existsSync(mediaPath)) {
    fs.mkdirSync(mediaPath);
  }

  const fileName = `image-${Date.now()}.png`; // Unique filename
  const filePath = path.join(mediaPath, fileName);

  // Save the image to the filesystem
  fs.writeFile(filePath, buffer, async (err) => {
    if (err) {
      console.error("Error saving image:", err);
      return res.status(500).json({ message: "Error saving image" });
    }

    const imagePart = fileToGenerativePath(filePath, "image/png");

    try {
      // Call the generative model here with imagePart and dict_of_vars
      const response = await model.generateContent([prompt, imagePart]);
      // Handle the response from the generative AI
      console.log(response.response.text());
      const answers = response;
      console.log(answers);
      res.json({ message: "Image processed", data: response.response.text() });

      // Delete the saved image file
      fs.unlink(filePath, (unlinkErr) => {
        if (unlinkErr) {
          console.error("Error deleting image file:", unlinkErr);
        } else {
          console.log("Image file deleted successfully");
        }
      });
    } catch (aiError) {
      console.error("Error processing image with generative AI:", aiError);
      res
        .status(500)
        .json({ message: "Error processing image with generative AI" });
    }
  });
});

module.exports = router;
