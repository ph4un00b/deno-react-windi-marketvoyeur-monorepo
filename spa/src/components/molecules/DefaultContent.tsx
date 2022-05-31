import { React, tw } from "../../client_deps.ts";

export function DefaultContent() {
  return (
    <main className={tw`bg-emerald-100 text-green-600`}>
      <p>Main!</p>
    </main>
  );
}
