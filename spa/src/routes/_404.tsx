import { NotFound } from "../components/molecules/NotFound.tsx";
import { React, Route } from "../deps.ts";

export const $404Route = <Route path="*" element={<NotFound />} />;
