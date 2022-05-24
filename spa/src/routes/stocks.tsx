import { getStocks } from "../data.ts";
import { QueryNavLink } from "../components/molecules/QueryNavLink.tsx";
import { Outlet, React, useSearchParams } from "../deps.ts";

export default function StocksPage() {
  const stocks = getStocks();
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
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
            <QueryNavLink
              style={({ isActive }) => {
                return {
                  display: "block",
                  margin: "1rem 0",
                  backgroundColor: isActive ? "yellowgreen" : "",
                  color: isActive ? "brown" : "",
                };
              }}
              to={`/stocks/${stock.number}`}
              key={stock.number}
            >
              {stock.name}
            </QueryNavLink>
          ))}
      </nav>

      <Outlet />
    </div>
  );
}
