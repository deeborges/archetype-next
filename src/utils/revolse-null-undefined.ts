export function resolveNullUndefined(value: null | undefined, type:) {
  if (typeof value === Number && value === null) {
    return 0;
  }
}
