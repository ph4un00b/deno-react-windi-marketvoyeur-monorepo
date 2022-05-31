import { React, Route } from "../client_deps.ts";
import StockPage from "./stock.tsx";

export const StockId = <Route path=":stockId" element={<StockPage />} />;
