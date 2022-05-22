import React from "https://esm.sh/react@18";
import { Link, Outlet, useLocation } from "https://esm.sh/react-router-dom@6";

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
