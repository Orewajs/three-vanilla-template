import restart from "vite-plugin-restart";

export default {
  root: "src/", // Sources files (typically where index.html is)
  publicDir: "../public/", // Path from "root" to public assets (files that are served as they are)
  server: {
    host: true, // Open to local network and display URL
    open: !("SANDBOX_URL" in process.env || "CODESANDBOX_HOST" in process.env), // Open if it's not a CodeSandbox
  },
  build: {
    outDir: "../build", // Output in the build/ folder
    emptyOutDir: true, // Empty the folder first
    sourcemap: false, // Do not add sourcemap
  },
  plugins: [
    restart({ restart: ["../public/**"] }), // Restart server on public file change
  ],
};
