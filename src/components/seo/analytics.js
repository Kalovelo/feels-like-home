export const analytics = ` !(function(g, s, q, r, d) {
    r = g[r] =
      g[r] ||
      function() {
        ;(r.q = r.q || []).push(arguments)
      }
    d = s.createElement(q)
    q = s.getElementsByTagName(q)[0]
      d.src = "//${process.env.GATSBY_GOSQUARED_SUBDOMAIN}.cloudfront.net/tracker.js"
    q.parentNode.insertBefore(d, q)
  })(window, document, "script", "_gs")

_gs("${process.env.GATSBY_GOSQUARED_TOKEN}")
_gs("set", "anonymizeIP", true)`
