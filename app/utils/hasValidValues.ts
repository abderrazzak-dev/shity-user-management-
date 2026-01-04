export function hasValidValues<
  T extends string | number | boolean | object | null | undefined
>(...values: T[]): boolean {
  return values.every((value) => {
    if (value === null || value === undefined) return false;
    if (typeof value === "string") return value.trim() !== "";
    if (Array.isArray(value)) return value.length > 0;
    if (typeof value === "object") return Object.keys(value).length > 0;
    return true;
  });
}
