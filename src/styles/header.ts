import { css } from "@emotion/react";

export const headerStyles = {
  block: css`
    transition: box-shadow 0.2s;
    position: fixed;
    top: 0;
    z-index: 1;
    background: #ffffff;
    left: 0;
    right: 0;
    width: 100%;
    border-bottom: 1px solid #dddddd;
    padding: 0.25rem;
  `,
  link: css`
    cursor: pointer;
    padding: 0 1em;
    text-decoration: none;
  `,
};
