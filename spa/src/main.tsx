import React from "https://esm.sh/react@18";
import ReactDOM from "https://esm.sh/react-dom@18/client";
import { HashRouter, Route, Routes } from "https://esm.sh/react-router-dom@6";
import RootPage from "./components/App.tsx";
import CryptosPage from "./routes/cryptos.tsx";
import StocksPage from "./routes/stocks.tsx";
import StockPage from "./routes/stock.tsx";

/* document was configured with proper deno.json */
/* https://deno.land/manual/typescript/configuration#using-the-lib-property */

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<RootPage />}>
          <Route
            index
            element={
              <main style={{ padding: "1rem", color: "orangered" }}>
                <p>Main!</p>
              </main>
            }
          />

          <Route path="cryptos" element={<CryptosPage />} />

          <Route path="stocks" element={<StocksPage />}>
            // todo: routes/stocks.index.tsx
            <Route
              index
              element={
                <main style={{ padding: "1rem", color: "orangered" }}>
                  <p>Select stonk!</p>
                </main>
              }
            />

            <Route path=":stockId" element={<StockPage />} />
          </Route>

          // todo: routes/stocks.404.tsx
          <Route
            path="*"
            element={
              <main
                style={{
                  padding: "1rem",
                  color: "brown",
                  backgroundColor: "pink",
                }}
              >
                <p>404: There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
);
