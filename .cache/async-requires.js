// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-404-jsx": () => import("./../src/pages/404.jsx" /* webpackChunkName: "component---src-pages-404-jsx" */),
  "component---src-pages-about-jsx": () => import("./../src/pages/about.jsx" /* webpackChunkName: "component---src-pages-about-jsx" */),
  "component---src-pages-background-jsx": () => import("./../src/pages/background.jsx" /* webpackChunkName: "component---src-pages-background-jsx" */),
  "component---src-pages-index-jsx": () => import("./../src/pages/index.jsx" /* webpackChunkName: "component---src-pages-index-jsx" */),
  "component---src-pages-portal-jsx": () => import("./../src/pages/portal.jsx" /* webpackChunkName: "component---src-pages-portal-jsx" */),
  "component---src-pages-projects-jsx": () => import("./../src/pages/projects.jsx" /* webpackChunkName: "component---src-pages-projects-jsx" */)
}

