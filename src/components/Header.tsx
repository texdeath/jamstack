import React from "react";
import Link from "next/link";
import { headerStyles } from "@/styles/modules/header";

export const Header: React.FC = () => {
  return (
    <header css={headerStyles.block}>
      <Link href="/">
        <a css={headerStyles.link}>TOP</a>
      </Link>
      <Link href="/works">
        <a css={headerStyles.link}>Works</a>
      </Link>
      <Link href="about">
        <a css={headerStyles.link}>自己紹介</a>
      </Link>
    </header>
  );
};
