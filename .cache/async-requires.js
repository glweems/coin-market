// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("/Users/gw/repos/coin-market/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/Users/gw/repos/coin-market/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-coin-js": () => import("/Users/gw/repos/coin-market/src/pages/coin.js" /* webpackChunkName: "component---src-pages-coin-js" */),
  "component---src-pages-index-js": () => import("/Users/gw/repos/coin-market/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

exports.data = () => import("/Users/gw/repos/coin-market/.cache/data.json")

