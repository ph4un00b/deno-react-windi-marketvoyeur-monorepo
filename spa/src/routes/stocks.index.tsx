import { React, Route, tw } from "../client_deps.ts";

export const StocksIndex = (
  <Route
    index
    element={
      <main className={tw`p-[1rem] text-red-400`}>
        <p>Select stonk!</p>
      </main>
    }
  />
);
