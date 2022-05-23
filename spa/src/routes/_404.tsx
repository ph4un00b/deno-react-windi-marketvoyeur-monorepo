import React from "https://esm.sh/react@18";
import { Route } from "https://esm.sh/react-router-dom@6";

export const $404Route = (
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
);
