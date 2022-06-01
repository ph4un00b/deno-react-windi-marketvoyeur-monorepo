import { json } from "@remix-run/deno";
import coins_json from "../../coins.json" assert { type: "json" };
import { Coin } from "../models.ts";

export function loader({ request, conn }: { request: Request }) {
  console.log({ conn });
  const url = new URL(request.url);

  //   return new Response(JSON.stringify({jamon: 'lol'}), {
  //     status: 200,
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      "X-RapidAPI-Key": "39ei209ked3029dk902dk3092kd32dk3d32k30d20-939jhchjij209-e-20",
    },
  };

  // const resp = await fetch(
  // 1 coin
  // "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=1&offset=0",
  // 100 coins
  // "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=100&offset=0",
  // options,
  // )
  // .catch((err) => console.error(err));

  // if (resp) {
  // const data = await resp.json();
  // Deno.writeTextFileSync("coins.json", JSON.stringify(data));
  // return json({ jamon: "lol", data }); //   await searchCities(url.searchParams.get("q"))
  // }

  // return json({ message: "error", reason: "no data" });

  const api = coins_json as Coin
  return json(api.data.coins[0]);
}
