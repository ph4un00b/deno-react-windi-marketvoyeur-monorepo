import { json } from "@remix-run/deno";
import coins_json from "../../coins.json" assert { type: "json" };
import { Coin } from "../models.ts";

export function loader({ request }: { request: Request }) {
  const api = coins_json as Coin;
  return json(api.data.coins[0]);
}
