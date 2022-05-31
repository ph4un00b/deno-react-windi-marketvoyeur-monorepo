import { Link, React, ReactNode, tw } from "../../client_deps.ts";

type LinkOpts = { children: ReactNode; to: string };

export default function CustomLink({ children, to }: LinkOpts) {
  return (
    <Link
      to={to}
      className={tw`
            link:text-yellow-300
            visited:text-pink-300
            active:bg-purple-300
            hover:(border-red-400 border-[1px] border-solid)`}
    >
      {children}
    </Link>
  );
}
