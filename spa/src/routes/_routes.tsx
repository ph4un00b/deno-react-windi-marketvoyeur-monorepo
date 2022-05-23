import React from "https://esm.sh/react@18";
import { Route } from "https://esm.sh/react-router-dom@next";
import RootPage from "../components/App.tsx";
import { RootRoute } from "./_root.tsx";
import CryptosPage from "./cryptos.tsx";
import StocksPage from "./stocks.tsx";
import { StocksIndex } from "./stocks.index.tsx";
import { StockId } from "./stocks.stockId.tsx";
import { $404Route } from "./_404.tsx";

export const AppRoutes = (
  <Route path="/" element={<RootPage />}>
    {RootRoute}
    <Route path="cryptos" element={<CryptosPage />} />
    <Route path="stocks" element={<StocksPage />}>
      {StocksIndex}
      {StockId}
    </Route>
    {$404Route}
  </Route>
);
