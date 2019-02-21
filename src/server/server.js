const React = require("react"),
  express = require("express"),
  path = require("path"),
  App = require("../app/App"),
  { renderToString } = require("react-dom/server"),
  { testData } = require("../data"),
  { ServerStyleSheet } = require("styled-components"),
  { root } = require("./root");

const sheet = new ServerStyleSheet(),
  reactDom = renderToString(sheet.collectStyles(<App navData={testData} />)),
  styles = sheet.getStyleTags(),
  title = "End Clothing",
  server = express(),
  port = 8000;

server.use(express.static(path.resolve(__dirname, "./dist")));

server.get("/*", (req, res) => res.send(root({ styles, reactDom, title })));

server.listen(port);

console.log(`Server listening at port ${port}`);
