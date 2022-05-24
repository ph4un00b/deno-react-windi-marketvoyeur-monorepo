import { DataHashRouter, React, ReactDOM } from "./deps.ts";
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
