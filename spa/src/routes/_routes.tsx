import { RootRoute } from "./_root.tsx";
import CryptosPage from "./cryptos.tsx";
import StocksPage from "./stocks.tsx";
import { StocksIndex } from "./stocks.index.tsx";
import { StockId } from "./stocks.stockId.tsx";
import { $404Route } from "./_404.tsx";
import { React, Route } from "../client_deps.ts";
import RootPage from "../components/RootComponent.tsx";

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
