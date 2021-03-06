import {
  DataHashRouter,
  React,
  ReactDOM,
  QueryClientProvider,
  QueryClient,
} from "./client_deps.ts";
import { AppRoutes } from "./routes/_routes.tsx";

/* document was configured with a proper deno.json */
/* https://deno.land/manual/typescript/configuration#using-the-lib-property */

const root = document.getElementById("root");
const queryClient = new QueryClient();

ReactDOM.createRoot(root!).render(
  <React.StrictMode>
    <DataHashRouter fallbackElement={<></>}>
        {AppRoutes}
    </DataHashRouter>
  </React.StrictMode>
);
