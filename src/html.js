import React from "react"

let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

module.exports = class HTML extends React.Component {
  render() {
    let css
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta 
            name="google-site-verification" 
            content="rUNq8lzwm3z15gaVNUa43iEQ-gKP0WJhkb_qko81oTc" 
          />

          {/* Schema.org tags */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{
            __html: `
                {
                  "@context": "http://schema.org",
                  "@type": "Organization",
                  "name": "GDPR Checklist",
                  "url": "https://www.gdprchecklist.io",
                  "sameAs": [
                      "https://twitter.com/gdpr_checklist"
                  ]
                } 
            `}} />
          {this.props.headComponents}
          {css}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        
          <script dangerouslySetInnerHTML={{ 
            __html: `
            var _iub = _iub || [];
            _iub.csConfiguration = {
              cookiePolicyId: 52432713,
              siteId: 1031622,
              lang: "en"
            };
            (function (w, d) {
              var loader = function () { var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src = "//cdn.iubenda.com/cookie_solution/stable/iubenda_cs.js"; tag.parentNode.insertBefore(s, tag); };
              if (w.addEventListener) { w.addEventListener("load", loader, false); } else if (w.attachEvent) { w.attachEvent("onload", loader); } else { w.onload = loader; }
            })(window, document);
            `}}
          />
        </body>
      </html>
    )
  }
}
