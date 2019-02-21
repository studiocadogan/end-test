export const root = ({ styles, title, reactDom }) => `
<!doctype html>
    <html>
    <head>
      <title>${title}</title>
      ${styles}
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: sans-serif;
        }
    </style>
    </head>
    <body>
        <div id="root">
        ${reactDom}
        </div>
    <script src="/bundle.js"></script>
  </body>
  </html>`;
