import React from "https://esm.sh/react@18";
import { Route } from "https://esm.sh/react-router-dom@next";
import { NotFound } from "../components/molecules/NotFound.tsx";

export const $404Route = <Route path="*" element={<NotFound />} />;
