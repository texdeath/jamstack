import { MAX_DESCRIPTION_LENGTH } from "@/consts/appConsts";

/**
 * 引数で渡された文字列を、定数で指定された文字数まで省略する関数です。
 * @param str
 */
export const abridgementString = (str: string): string => {
  return `${str.slice(0, MAX_DESCRIPTION_LENGTH)}…`;
};
