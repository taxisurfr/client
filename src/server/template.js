export default ({body, title, initialState}) => {
    return `
    <!DOCTYPE html>
    <html>
      <head>
        <script>window.__APP_INITIAL_STATE__ = ${initialState}</script>
        <title>${title}</title>
/*
        <link rel="stylesheet" href="https://app.taxisurfr.com/static/server.css" />
*/
        <link rel="shortcut icon" href="/static/favicon.ico">
        <link href="https://redux-form.com/6.4.3/bundle.css"
          media="screen, projection"
          rel="stylesheet" type="text/css"/>
        <link href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.min.css"
          media="screen, projection" rel="stylesheet" type="text/css"/>
          
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <script type="text/javascript" src="https://js.stripe.com/v2/"></script>
      </head>
      
      <body>
        <div id="root">${body}</div>
      </body>
    </html>
  `;
};
