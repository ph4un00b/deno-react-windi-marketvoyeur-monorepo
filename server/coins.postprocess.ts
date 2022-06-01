// Has helper functions for manipulating csv, txt, json, excel, zip, and image files
import { readJSON, writeJSON } from "https://deno.land/x/flat@0.0.15/mod.ts";
import { Coin } from "./generated/models.ts";

const filename = Deno.args[0]; // Same name as downloaded_filename `const filename = 'btc-price.json';`
// const filename = "coins.raw.json"; // Same name as downloaded_filename `const filename = 'btc-price.json';`
const json = await readJSON(filename) as Coin;
// console.log(json)

const currencyRates = Object.values(json.data.coins); // convert property values into an array
// console.log(currencyRates);

const filteredCurrencyRates = currencyRates.map((
  {
    uuid,
    symbol,
    name,
    color,
    iconUrl,
    marketCap,
    price,
    listedAt,
    tier,
    change,
    rank,
  },
) => ({
  uuid,
  symbol,
  name,
  color,
  iconUrl,
  marketCap,
  price,
  listedAt,
  tier,
  change,
  rank,
}));

const newFilename = "./server/generated/coins.postprocessed.json"; // name of a new file to be saved
await writeJSON(newFilename, filteredCurrencyRates); // create a new JSON file with just the Bitcoin price
// console.log("Wrote a post process file")

// Optionally delete the original file
// await removeFile('./btc-price.json') // equivalent to removeFile('btc-price.json')
