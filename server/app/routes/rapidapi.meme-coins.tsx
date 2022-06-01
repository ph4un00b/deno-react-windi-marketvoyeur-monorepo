import { json } from "@remix-run/deno";
import invariant from "https://esm.sh/tiny-invariant@1.2.0";

export async function loader({ request }: { request: Request }) {
    
  const key = Deno.env.get("RAPID_API_KEY");
  invariant(key);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      "X-RapidAPI-Key": key,
    },
  };

  const resp = await fetch(
    //   1 coin
    //   "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=1&offset=0",
    //   100 coins
    "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=100&offset=0",
    options,
  )
    .catch((err) => console.error(err));

  if (resp) {
    const data = await resp.json();
    return json(data); //   await searchCities(url.searchParams.get("q"))
  }

  return json({ message: "error", reason: "no data" });
}
