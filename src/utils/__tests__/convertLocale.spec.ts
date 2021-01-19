import { convertLocale } from "../convertLocale";

describe("convertLocale.ts", () => {
  it("引数 timezone が 2000-01-02T16:44:00.000Z であるとき、「2000年01月01日 00:00」という文字列にフォーマットして返却する", () => {
    const tz = "2000-01-02T16:44:00.000Z";
    const result = convertLocale(tz);
    const expected = "2000年01月01日 01:44";
    expect(result).toStrictEqual(expected);
  });
  it("引数 timezone が undefined であるとき、 null を返却する", () => {
    const tz = undefined;
    const result = convertLocale(tz);
    expect(result).toBeNull();
  });
});
