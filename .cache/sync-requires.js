// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/gw/repos/coin-market/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/gw/repos/coin-market/src/pages/404.js")),
  "component---src-pages-coin-js": preferDefault(require("/Users/gw/repos/coin-market/src/pages/coin.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/gw/repos/coin-market/src/pages/index.js"))
}

