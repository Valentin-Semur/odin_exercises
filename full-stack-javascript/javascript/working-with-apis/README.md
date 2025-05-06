# Working with APIs - Giphy Fetcher

This project demonstrates how to work with APIs by fetching GIFs from the Giphy API based on user input. Users can enter a search term, and the application will display a corresponding GIF.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [License](#license)

## Features

- Fetch GIFs from the Giphy API based on user-defined search terms.
- Responsive design that centers the GIF on the page.
- Error handling for API requests.

## Technologies Used

- HTML
- CSS
- JavaScript
- Giphy API
- Webpack (for module bundling)

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Valentin-Semur/learn.git
   cd learn/full-stack-javascript/javascript/working-with-apis
   ```

2. **Install dependencies**:
   Make sure you have Node.js installed. Then run:
   ```bash
   npm install
   ```

3. **Create a configuration file**:
   Create a `config.js` file in the root directory and add your Giphy API key:
   ```javascript
   export default {
       apiKey: 'YOUR_GIPHY_API_KEY'
   };
   ```

4. **Run the application**:
   Use the following command to start the development server:
   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:8080` to view the application.

## Usage

1. Enter a search term in the input field (e.g., "cats", "dogs", "funny").
2. Click the "Fetch Gif" button.
3. The application will display a GIF related to your search term.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
