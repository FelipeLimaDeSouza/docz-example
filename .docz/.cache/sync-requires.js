const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---readme-md": hot(preferDefault(require("/Users/felipelima/Projects/docz-example/README.md"))),
  "component---src-components-button-index-mdx": hot(preferDefault(require("/Users/felipelima/Projects/docz-example/src/components/Button/index.mdx"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/felipelima/Projects/docz-example/.docz/src/pages/404.js")))
}

