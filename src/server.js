import express from 'express';
import http from 'http';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';

import routes from './routes';

const app = express();
const port = process.env.PORT || 3003;

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('*', (req, res) => {
  match({ routes, location: req.url }, (err, redirectLocation, props) => {
    if (err) {
      res.status(500).send(err.message);
    } else if (redirectLocation) {
      res.status(302, redirectLocation.pathname + redirectLocation.search);
    } else if (props) {
      const markup = renderToString(<RouterContext {...props} />);

      res.render('index', { markup });
    } else {
      res.sendStatus(404);
    }
  });
});

const server = http.createServer(app);

app.listen(port, function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Listening at http://localhost:${port}`);
});
