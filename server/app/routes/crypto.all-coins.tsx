import { json } from "@remix-run/deno";
import { Coin, CoinElement } from "../../generated/models.ts";
import json_coins from "../../generated/coins.postprocessed.json" assert {
  type: "json",
};

export function loader({ request }: { request: Request }) {
  return json(json_coins);
}
