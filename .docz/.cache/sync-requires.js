const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/felipelima/Projects/docz/.docz/.cache/dev-404-page.js"))),
  "component---readme-md": hot(preferDefault(require("/Users/felipelima/Projects/docz/README.md"))),
  "component---src-components-button-index-mdx": hot(preferDefault(require("/Users/felipelima/Projects/docz/src/components/Button/index.mdx"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/felipelima/Projects/docz/.docz/src/pages/404.js")))
}

