import { json } from "@remix-run/deno";
import { Coin, CoinElement } from "../../generated/models.ts";
import result from "../../generated/coins.postprocessed.json" assert { type: "json" };

export function loader() {
  return json(result, { headers: { "access-control-allow-origin": "*" } });
}
