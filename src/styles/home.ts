import { css } from "@emotion/react";

export const homeStyle = {
  link: css`
    cursor: pointer;
  `,
  content: css`
    width: 100%;
    p {
      font-family: monospace;
      text-justify: inter-ideograph;
      text-align: justify;
      font-size: 13px;
      line-height: 18px;
      margin: 0 0 10px;
      color: rgb(134, 137, 128);
    }
  `,
  time: css`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    color: rgb(181, 181, 181);
  `,
};
