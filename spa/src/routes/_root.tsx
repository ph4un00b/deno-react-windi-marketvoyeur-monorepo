import React from "https://esm.sh/react@18";
import { Route } from "https://esm.sh/react-router-dom@6";

export const RootRoute = (
  <Route
    index
    element={
      <main style={{ padding: "1rem", color: "orangered" }}>
        <p>Main!</p>
      </main>
    }
  />
);
