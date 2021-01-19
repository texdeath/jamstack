import Link from "next/link";
import { headerStyles } from "@/styles/header";

export const Header: React.FC = () => {
  return (
    <header css={headerStyles.block}>
      <h2>
        <Link href="/">
          <a css={headerStyles.link}>雑記</a>
        </Link>
      </h2>
    </header>
  );
};
