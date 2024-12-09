# Assignmint Chrome Extension 📝

Assignmint is an online platform for organizing assignments and coursework, directly from Canvas! This extension complents the platform by allowing students to import assignments by scaping assignments directly from canvas.


> 🚨 **Note:** The Assignmint Chrome Extension is currently under review the Chrome Development Team and **not yet approved for public listing on the Chrome Web Store**. To use the extension, you’ll need to install it in developer mode. See the instructions below for more details.

---

## 🌟 Features

- 📚 **Seamless Assignment Tracking:** Automatically fetch and display your assignments from Canvas.
- 🕵️‍♂️ **Secure Web Scraping:** Leverages a logged-in user's active session to fetch information locally.
- ⚡ **Built with Modern Tools:** Powered by [Vite](https://vitejs.dev/) and [React](https://react.dev/) for a blazing-fast, developer-friendly experience.
- 🌈 **Minimalistic and User-Friendly:** Clean design to help you focus on what matters.

---

## 🛠️ Installation

Since Assignmint is not yet on the Chrome Web Store, you'll need to load it manually in developer mode:

1. **Clone the repository to your local machine:**
   ```bash
   git clone https://github.com/raphaelsanchez0/assignmint-chrome-extension.git
   cd assignmint-extension
   ```
2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Build the extension:**
   ```bash
   npm run build-all
   ```
4. **Locate the `dist` folder:**
   - After running the build command, a folder named `dist` will be generated in the root directory of the project. This folder contains the production-ready files for the Chrome extension.
   - Use this folder when loading the extension in Chrome (see Step 5).
5. **Load the extension in Chrome:**
   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable **Developer Mode** in the top-right corner.
   - Click on **Load unpacked** and select the `dist` folder from the project directory.
   - For additional details, see [Chrome's guide on loading unpacked extensions](https://developer.chrome.com/docs/extensions/mv3/getstarted/#unpacked).
