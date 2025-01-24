# Installing Joinn Design System

This README provides instructions for setting up the **Joinn Design System** with **Tailwind CSS** in your Vite project. The setup ensures consistent and scalable theming using dynamically generated CSS variables.

---

## **Joinn Design System Setup for Vite and Tailwind**

Follow these steps to integrate the Joinn Design System into your Vite project.

---

### **1. Install Dependencies**

Install the required dependencies:

```bash
yarn add -D style-dictionary@^4.3.2
```

This will add **Style Dictionary** as a development dependency for generating CSS variables.

---

### **2. Add Required Files**

The Joinn Design System setup includes the following files:

- **`index.css`**: Tailwind’s main CSS file that imports the generated design tokens.
- **`tailwind.config.js`**: Tailwind configuration extended with Joinn Design System tokens.
- **`generator.js`**: A script to generate `global.css`, `lightMode.css`, and `darkMode.css` from `tokens.json`.

You can find these files in the project repository:

- [**`index.css`**](https://github.com/Yield-Fi/joinn-design-system/blob/main/assets/tailwind/src/index.css)
- [**`tailwind.config.js`**](https://github.com/Yield-Fi/joinn-design-system/blob/main/assets/tailwind/tailwind.config.js)
- [**`generator.js`**](https://github.com/Yield-Fi/joinn-design-system/blob/main/assets/tailwind/src/style/generator.js)

---

### **3. Add Commands to `package.json`**

Update your `package.json` scripts to include a command for generating tokens and running the dev/build process, such as the below example:

```json
"scripts": {
  "generate:tokens": "node ./src/style/generator.js",
  "dev": "yarn run generate:tokens && vite --host",
  "build": "yarn run generate:tokens && tsc && vite build"
}
```

#### Explanation of Commands:

- **`generate:tokens`**: Generates CSS files (`global.css`, `lightMode.css`, `darkMode.css`) from [**`tokens.json`**](https://github.com/Yield-Fi/joinn-design-system/blob/main/schema/tokens.json).
- **`dev`**: Runs the token generator and starts the Vite development server.
- **`build`**: Runs the token generator, compiles TypeScript, and builds the project for production.

---

### **4. Token Generation**

The `generator.js` script generates three CSS files:

- **`dist/css/global.css`**: Contains global variables (e.g., typography, spacing).
- **`dist/css/lightMode.css`**: Contains light mode-specific variables.
- **`dist/css/darkMode.css`**: Contains dark mode-specific variables.

If you want to change the output directory (currently set to `dist/`), update the `buildPath` in **`generator.js`**.

---

### **5. Run the Setup**

1. **Generate Tokens**:
   Before running the app, generate the CSS variables:

   ```bash
   yarn run generate:tokens
   ```

2. **Start Development Server**:
   Run the development server:

   ```bash
   yarn dev
   ```

3. **Build for Production**:
   Build the project for production:
   ```bash
   yarn build
   ```

---

### **6. Verify the Setup**

Ensure the generated CSS files are included and imported into your `index.css`:

#### Example `index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Include generated design tokens */
@import "./dist/css/global.css";
@import "./dist/css/lightMode.css";
@import "./dist/css/darkMode.css";
```

---

### **Conclusion**

With this setup, you now have a seamless integration of the Joinn Design System with Tailwind CSS in your Vite project. The generated CSS variables ensure consistent theming across global, light, and dark modes.

If you have any questions or need further assistance, feel free to reach out! 🚀
