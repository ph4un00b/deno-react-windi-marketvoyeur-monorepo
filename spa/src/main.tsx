import React from "https://esm.sh/react@18";
import ReactDOM from "https://esm.sh/react-dom@18/client";
import { DataHashRouter } from "https://esm.sh/react-router-dom@next";
import { AppRoutes } from "./routes/_routes.tsx";

/* document was configured with a proper deno.json */
/* https://deno.land/manual/typescript/configuration#using-the-lib-property */

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
  <React.StrictMode>
    <DataHashRouter fallbackElement={<></>}>
      {AppRoutes}
    </DataHashRouter>
  </React.StrictMode>,
);
