import * as ApiCryptos from "../services/api.cryptos.ts";
import { QueryNavLink } from "../components/molecules/QueryNavLink.tsx";
import { Outlet, React, tw, useSearchParams } from "../client_deps.ts";

export default function CryptosPage() {
  const stocks = ApiCryptos.allCoins();
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className={tw`flex`}>
      <nav className={tw`border-r p-[1rem]`}>
        <input
          value={searchParams.get("filter") || ""}
          onChange={(event) => {
            const filter = event.target.value;

            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />

        {stocks
          .filter((stock) => {
            const filter = searchParams.get("filter");
            if (!filter) return true;

            const name = stock.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((stock) => (
            <QueryNavLink to={`/stocks/${stock.number}`} key={stock.number}>
              {stock.name}
            </QueryNavLink>
          ))}
      </nav>

      <Outlet />
    </div>
  );
}
