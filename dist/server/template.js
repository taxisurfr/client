"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var body = _ref.body,
      title = _ref.title,
      initialState = _ref.initialState;

  return "\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <script>window.__APP_INITIAL_STATE__ = " + initialState + "</script>\n        <title>" + title + "</title>\n/*\n        <link rel=\"stylesheet\" href=\"https://app.taxisurfr.com/static/server.css\" />\n*/\n        <link rel=\"shortcut icon\" href=\"/static/favicon.ico\">\n        <link href=\"https://redux-form.com/6.4.3/bundle.css\"\n          media=\"screen, projection\"\n          rel=\"stylesheet\" type=\"text/css\"/>\n        <link href=\"//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.min.css\"\n          media=\"screen, projection\" rel=\"stylesheet\" type=\"text/css\"/>\n        <script type=\"text/javascript\" src=\"https://js.stripe.com/v2/\"></script>\n      </head>\n      \n      <body>\n        <div id=\"root\">" + body + "</div>\n      </body>\n    </html>\n  ";
};