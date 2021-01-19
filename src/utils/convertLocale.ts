/**
 * TZを「YYYY年MM月DD日 HH:MM」の形式にフォーマットして返却します。
 * @param timezone
 */
export const convertLocale = (timezone: string | undefined): string | null => {
  if (!timezone) {
    return null;
  }
  const date = new Date(timezone);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDay().toString().padStart(2, "0");
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${year}年${month}月${day}日 ${hours}:${minutes}`;
};
