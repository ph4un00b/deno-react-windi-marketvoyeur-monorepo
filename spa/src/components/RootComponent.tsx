import { Outlet, React, tw, useLocation } from "../client_deps.ts";
import CustomLink from "./atoms/CustomLink.tsx";

const Navigation = (
  <nav className={tw`border-b-[1px] pb-[1rem]`}>
    <CustomLink to="/cryptos">
      Cryptos
    </CustomLink>{" "}
    |{" "}
    <CustomLink to="/stocks">
      Stonks
    </CustomLink>
  </nav>
);

const FooterNavigation = (
  <nav className={tw`border-t-[1px] pt-[1rem]`}>
    <CustomLink to="/cryptos">2021</CustomLink> |{" "}
    <CustomLink to="/2022">2022</CustomLink> |{"  "}
    <select className="bg">
      <option value="linear">linear</option>
      <option value="otra">buscar otra!</option>
    </select>
  </nav>
);

function RootPage() {
  const location = useLocation();
  console.log({ location });
  return (
    <div className={tw`bg-blue-900 text-white`}>
      <h1>
        <span className={tw`text-3xl capitalize`}>Stonks Climate!</span>
      </h1>

      {Navigation}

      <Outlet />

      {location.pathname !== "/" && FooterNavigation}
    </div>
  );
}

export default RootPage;
