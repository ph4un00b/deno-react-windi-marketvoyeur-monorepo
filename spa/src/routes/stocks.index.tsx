import { React, Route } from "../deps.ts";

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
