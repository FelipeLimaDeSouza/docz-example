const { mergeWith } = require('lodash/fp')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Docz',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: false,
        o: false,
        open: false,
        'open-browser': false,
        root: '/Users/felipelima/Projects/docz/.docz',
        base: '/',
        source: './',
        src: './',
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Docz',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/felipelima/Projects/docz',
          templates:
            '/Users/felipelima/Projects/docz/node_modules/docz-core/dist/templates',
          docz: '/Users/felipelima/Projects/docz/.docz',
          cache: '/Users/felipelima/Projects/docz/.docz/.cache',
          app: '/Users/felipelima/Projects/docz/.docz/app',
          appPackageJson: '/Users/felipelima/Projects/docz/package.json',
          gatsbyConfig: '/Users/felipelima/Projects/docz/gatsby-config.js',
          gatsbyBrowser: '/Users/felipelima/Projects/docz/gatsby-browser.js',
          gatsbyNode: '/Users/felipelima/Projects/docz/gatsby-node.js',
          gatsbySSR: '/Users/felipelima/Projects/docz/gatsby-ssr.js',
          importsJs: '/Users/felipelima/Projects/docz/.docz/app/imports.js',
          rootJs: '/Users/felipelima/Projects/docz/.docz/app/root.jsx',
          indexJs: '/Users/felipelima/Projects/docz/.docz/app/index.jsx',
          indexHtml: '/Users/felipelima/Projects/docz/.docz/app/index.html',
          db: '/Users/felipelima/Projects/docz/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
