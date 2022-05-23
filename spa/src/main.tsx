import React from "https://esm.sh/react@18";
import ReactDOM from "https://esm.sh/react-dom@18/client";
import { HashRouter } from "https://esm.sh/react-router-dom@6";
import { AppRoutes } from "./routes/_routes.tsx";

/* document was configured with a proper deno.json */
/* https://deno.land/manual/typescript/configuration#using-the-lib-property */

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
  <React.StrictMode>
    <HashRouter>
      {AppRoutes}
    </HashRouter>
  </React.StrictMode>,
);
