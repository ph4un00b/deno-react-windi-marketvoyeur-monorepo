import React from "https://esm.sh/react@18";
import { Route } from "https://esm.sh/react-router-dom@next";

export const StocksIndex = (
  <Route
    index
    element={
      <main style={{ padding: "1rem", color: "orangered" }}>
        <p>Select stonk!</p>
      </main>
    }
  />
);
