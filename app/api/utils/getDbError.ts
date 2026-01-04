/* eslint-disable @typescript-eslint/no-explicit-any */
export function getDbError(error: unknown) {
  const err = error as any;

  const code = err?.code ?? err?.cause?.code;

  const constraint = err?.constraint ?? err.cause?.constraint;

  return { code, constraint };
}
