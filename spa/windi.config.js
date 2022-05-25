const { defineConfig } = require("windicss/helpers");

module.exports = defineConfig({
  // shortcuts,
  extract: {
    include: ["index.njk", "src/**"],
    exclude: ["node_modules", ".git", "_plugins", "_site", ".vscode"],
  },
});
