import { React, ReactNode, tw } from "../../client_deps.ts";

type BtnOpts =
  & { children: ReactNode }
  & React.HTMLAttributes<HTMLButtonElement>;

export default function CustomBtn({ children, ...other }: BtnOpts) {
  return (
    <button
      className={tw`
        bg-purple-500
        hover:(border-red-400 border-[1px] border-solid)`}
      {...other}
    >
      {children}
    </button>
  );
}
