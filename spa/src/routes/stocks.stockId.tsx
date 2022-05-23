import React from "https://esm.sh/react@18";
import { Route } from "https://esm.sh/react-router-dom@next";
import StockPage from "./stock.tsx";

export const StockId = <Route path=":stockId" element={<StockPage />} />;
