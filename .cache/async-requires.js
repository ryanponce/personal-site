// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("/Users/ryanponce/projects/github.com/ryanponce/personal-site/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-tsx": () => import("/Users/ryanponce/projects/github.com/ryanponce/personal-site/src/pages/404.tsx" /* webpackChunkName: "component---src-pages-404-tsx" */),
  "component---src-pages-index-tsx": () => import("/Users/ryanponce/projects/github.com/ryanponce/personal-site/src/pages/index.tsx" /* webpackChunkName: "component---src-pages-index-tsx" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/ryanponce/projects/github.com/ryanponce/personal-site/.cache/data.json")

