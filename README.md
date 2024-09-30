# LitCalc Backend

LitCalc Backend provides the server-side functionality to support the AI-powered web-based calculator [LitCalc](https://github.com/webbedpiyush/litCalc-fe). The backend processes the mathematical, graphical, and pictorial inputs received from the frontend and computes the results using AI before sending them back for rendering on the canvas.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features
- **AI-based Computations**: Processes mathematical, graphical, and pictorial inputs received from the frontend and computes the results.
- **API Services**: Provides endpoints for sending and receiving calculation requests and results.
- **Optimized Performance**: Ensures quick response times for real-time calculations.

## Installation

Clone the repository:

```bash
git clone https://github.com/webbedpiyush/litCalc-be.git
```

Navigate to the project directory:
```bash
cd litCalc-be
```

Install the dependencies:
```bash
npm install
```

Start the development server:
```bash
npm start
```

Open your browser and visit:
```bash
http://localhost:3000/
```

## Usage
- Ensure the backend is running on the default port (or configure your preferred port).

- The backend listens to API requests from the frontend for mathematical, graphical, or pictorial computations.

- Connect the backend with the frontend project [LitCalc Frontend](https://github.com/webbedpiyush/litCalc-fe).


 ## Technologies Used

 - Node.js: Server-side runtime.

 - Express: Web framework for building APIs.
 - TypeScript: For type-safe server-side code.

 - AI Library/Service: [Gemini ai](https://ai.google.dev/aistudio).
   
## Contributing

  Contributions are welcome! To contribute:
  
  - Fork the repo
  - 
  - Create a new feature branch:
    ```bash
    git checkout -b feature/new-feature
     ```
   - Commit your changes:
     ```bash
     git commit -m 'Add new feature'
      ```
  - Push to the branch:
    ```bash
    git push origin feature/new-feature
     ```
 - Open a pull request.
      
## License
This project is licensed under the MIT License - see the LICENSE file for details.
