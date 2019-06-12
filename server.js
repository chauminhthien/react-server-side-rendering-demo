import express from "express";
import config from './webConfig.json';
import React from "react";
import { renderToString } from "react-dom/server";
import App from "./src/App";
import { StaticRouter } from 'react-router';
import { Helmet } from 'react-helmet';

const app = express();

app.use(express.static("build/public"));

app.get("*", (req, res) => {
  const URL_Param = req.params.param ? req.params.param : null;
  const helmet    = Helmet.renderStatic();

  const context = {
    URL_Param
  };

  const Root = (
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  )

  res.send(`
      <!doctype html>
      <html ${helmet.htmlAttributes.toString()}>
        <head>
          ${helmet.title.toString()}
          <meta charset="UTF-8" />
          ${helmet.meta.toString()}
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />

          <link href="/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
          <link href="/css/modern-business.css" rel="stylesheet">

        </head>
        <body>
          <div id="root">${renderToString(Root)}</div>
          <script src="/vendor/jquery/jquery.min.js"></script>
          <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
          <script src="/bundle.js" defer></script>
        </body>
      </html>
  `);

  res.end();
});

app.listen(process.env.PORT || config.port, () => {
  console.log(`Server is listening http://localhost:${process.env.PORT || config.port}/`);
});
