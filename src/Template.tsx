import { ReactNode, ReactElement, useContext } from 'react';
import { entry, assets } from '../config';
import { DataContext } from './provider/data';
import React from 'react';

const Template = ({ children }: { children?: ReactNode }): ReactElement => {
  const isDev = !!import.meta.env.DEV;
  const ssrData = useContext(DataContext);
  const PORT = process.env.PORT;

  return (
    <>
      <head>
        {isDev ? (
          <>
            <script type="module" src="/@vite/client"></script>
            <script
              type="module"
              dangerouslySetInnerHTML={{
                __html: `
                import RefreshRuntime from 'http://localhost:${
                  PORT ? PORT : '3000'
                }/@react-refresh';
                RefreshRuntime.injectIntoGlobalHook(window);
                window.$RefreshReg$ = () => {};
                window.$RefreshSig$ = () => (type) => type;
                window.__vite_plugin_react_preamble_installed__ = true;
                `,
              }}
            />{' '}
          </>
        ) : (
          <>
            <link rel="stylesheet" href={`/${assets}/${entry}.css`} />
            <script type="module" src={`/${assets}/${entry}.js`}></script>
          </>
        )}
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/src/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Vite App</title>
      </head>
      <body>
        <div id="root">{children}</div>
        {isDev ? (
          <>
            <script type="module" src="/src/entry-client.tsx"></script>
          </>
        ) : null}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__INITIAL_DATA__ = ${JSON.stringify(ssrData)}`,
          }}
        ></script>
      </body>
    </>
  );
};

export default Template;
