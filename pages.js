/**
 * GitHub Pages Deployment Script
 *
 * This script handles deploying the built portfolio to GitHub Pages.
 * It uses the gh-pages package to push the build folder to the gh-pages branch.
 *
 * Usage:
 *   npm run deploy          - Standard CRA deployment
 *   npm run custom-deploy   - This custom deployment script
 *
 * Configuration:
 *   - branch: The branch to deploy to (default: 'gh-pages')
 *   - repo: The repository URL (optional, defaults to current repo)
 *   - message: Commit message (optional)
 *
 * @see https://github.com/tschaub/gh-pages
 */

const ghpages = require("gh-pages");

// Build output directory
const buildPath = `${__dirname}/build`;

// Deployment configuration
const deployConfig = {
  // Branch to push to (gh-pages is the standard for GitHub Pages)
  branch: "gh-pages",

  // Repository URL - leave undefined to use the current git remote
  // Uncomment and set if deploying to a different repo:
  // repo: "https://github.com/username/repo.git",

  // Commit message for the deployment
  message: "Deploy to GitHub Pages",

  // Push silently (suppress output)
  silent: false,

  // Add files starting with '.' (like .nojekyll for GitHub Pages)
  dotfiles: true,

  // Add .nojekyll to disable Jekyll processing
  // This is important for single-page apps with client-side routing
  add: true,
};

/**
 * Deploy the build folder to GitHub Pages
 */
function deploy() {
  console.log(`🚀 Deploying from: ${buildPath}`);
  console.log(`📦 Target branch: ${deployConfig.branch}`);

  ghpages.publish(buildPath, deployConfig, (err) => {
    if (err) {
      console.error("❌ Deployment failed:", err);
      process.exit(1);
    }
    console.log("✅ Successfully deployed to GitHub Pages!");
    console.log("🌐 Visit: https://apoorvverma.github.io/Portfolio/");
  });
}

// Run deployment
deploy();
