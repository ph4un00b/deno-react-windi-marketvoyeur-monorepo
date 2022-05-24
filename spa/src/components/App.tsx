import { Link, Outlet, React, useLocation } from "../deps.ts";

function RootPage() {
  const location = useLocation();
  console.log({ location });
  return (
    <div>
      <h1>Stonks Climate!</h1>

      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/cryptos">Cryptos</Link> | <Link to="/stocks">Stonks</Link>
      </nav>

      <Outlet />

      {location.pathname !== "/" && (
        <nav
          style={{
            borderTop: "solid 1px",
            paddingTop: "1rem",
          }}
        >
          <Link to="/cryptos">2021</Link> | <Link to="/2022">2022</Link> |{"  "}
          <select>
            <option value="linear">linear</option>
            <option value="otra">buscar otra!</option>
          </select>
        </nav>
      )}
    </div>
  );
}

export default RootPage;
