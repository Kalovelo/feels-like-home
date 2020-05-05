const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/apostoles/projects/feels-like-home/.cache/dev-404-page.js"))),
  "component---src-pages-404-jsx": hot(preferDefault(require("/home/apostoles/projects/feels-like-home/src/pages/404.jsx"))),
  "component---src-pages-about-jsx": hot(preferDefault(require("/home/apostoles/projects/feels-like-home/src/pages/about.jsx"))),
  "component---src-pages-background-jsx": hot(preferDefault(require("/home/apostoles/projects/feels-like-home/src/pages/background.jsx"))),
  "component---src-pages-index-jsx": hot(preferDefault(require("/home/apostoles/projects/feels-like-home/src/pages/index.jsx"))),
  "component---src-pages-portal-jsx": hot(preferDefault(require("/home/apostoles/projects/feels-like-home/src/pages/portal.jsx"))),
  "component---src-pages-projects-jsx": hot(preferDefault(require("/home/apostoles/projects/feels-like-home/src/pages/projects.jsx")))
}

