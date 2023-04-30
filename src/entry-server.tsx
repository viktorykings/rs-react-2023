import React from "react";
import ReactDOMServer from "react-dom/server";
import { matchRoutes } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import type { Response }  from 'express'
import { DataProvider } from "./provider/data";
import routes from "./router";
import Template from './Template'
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import store from './store'

function dataLoader(url: string) {
  const _routes = matchRoutes(routes, url);
  const keys: string[] = []
  const top = _routes?.[0].route.path
  const all = _routes?.
    filter(({ route: { element } }) => !!(element as ElementLoader)?.type?.dataLoader)
    .map(({ route: { element, path } }) => {
      const { type } = element as ElementLoader;
      const { dataLoader } = type
      keys.push(path!);
      return dataLoader?.()
    })
  return { keys, fetch: Promise.all(all || []), top }
}

export async function render(url: string, res: Response) {
  const { fetch, keys, top } =  dataLoader(url)
  const data: Record<string, any> = { top };
  (await fetch).forEach((res, i) => {
    data[keys[i]] = res
  });

  let didError = false
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
        res.send(
          '<h1>Oops! Error occused!</h1>'
        );
      },
      onError(err) {
        didError = true;
        console.error(err);
      },
    }
  );
}