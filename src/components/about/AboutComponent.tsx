import React from "react";
import { categorys } from "@/consts/Categorys";

export const AboutComponent: React.FC = ({}) => {
  return (
    <div>
      <h1>自己紹介</h1>
      <div>
        <h2>Texdeath</h2>
        <img
          src="/static/image/profile.png"
          loading="lazy"
          width={160}
          height={160}
        />
        <p>
          ヤフー株式会社にデザイナーとして入社。
          <br />
          React/Reduxを用いた広告代理店向けSPAのフロントエンド開発および、
          Node.js / MySQLを用いたプロダクト運用を担当。 <br />
          2019年5月から株式会社ICSに転職。
          クライアントワークによる受託フロントエンド開発（React/Redux・Nuxt.jsなど）・オウンドメディア（ICS
          MEDIA）の記事執筆などを担当。おもに初学者に向けたReactの記事を執筆しています。
        </p>
      </div>
      <div>
        <h3>使用可能技術</h3>
        <ul>
          {categorys.map((category, index) => (
            <li key={`${index}-${category}`}>{category}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
