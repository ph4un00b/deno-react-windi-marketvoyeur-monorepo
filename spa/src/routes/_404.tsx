import { NotFound } from "../components/molecules/NotFound.tsx";
import { React, Route } from "../client_deps.ts";

export const $404Route = <Route path="*" element={<NotFound />} />;
