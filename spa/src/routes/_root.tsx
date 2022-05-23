import React from "https://esm.sh/react@18";
import { Route } from "https://esm.sh/react-router-dom@6";
import { DefaultContent } from "../components/molecules/DefaultContent.tsx";

export const RootRoute = <Route index element={<DefaultContent />} />;
