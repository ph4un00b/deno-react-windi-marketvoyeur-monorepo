import React from "https://esm.sh/react@18";
import { Route } from "https://esm.sh/react-router-dom@next";
import { DefaultContent } from "../components/molecules/DefaultContent.tsx";

export const RootRoute = <Route index element={<DefaultContent />} />;
