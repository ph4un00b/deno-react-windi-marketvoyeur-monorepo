import {
  Link,
  LinkProps,
  NavLink,
  NavLinkProps,
  React,
  useLocation,
  useSearchParams,
} from "../../deps.ts";

export function QueryNavLink({ to, ...props }: NavLinkProps) {
  const location = useLocation();
  return <NavLink to={to + location.search} {...props} />;
}

type ActiveProps = LinkProps & {
  query: string;
  queryParams: string;
};

export function ActiveQueryLink(spec: ActiveProps) {
  const { query, queryParams, to, ...props } = spec;
  const [params] = useSearchParams();
  const location = useLocation();
  const isActive = params.getAll(query).includes(queryParams);

  return (
    <Link
      style={{ color: isActive ? "red" : "" }}
      to={`/${location.pathname}?${query}=${queryParams}`}
      {...props}
    />
  );
}
