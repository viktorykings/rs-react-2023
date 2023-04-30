import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import type { Response } from 'express';
import Template from './Template';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import store from './store';

export async function render(url: string, res: Response) {
  let didError = false;
  const stream = ReactDOMServer.renderToPipeableStream(
    <Template>
      <Provider store={store}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </Provider>
    </Template>,
    {
      onShellReady() {
        res.statusCode = didError ? 500 : 200;
        res.setHeader('Content-type', 'text/html');
        stream.pipe(res);
      },
      onShellError(error) {
        res.statusCode = 500;
        res.send('<h1>Oops! Error occused!</h1>');
        console.log(error);
      },
      onError(err) {
        didError = true;
        console.error(err);
      },
    }
  );
}
