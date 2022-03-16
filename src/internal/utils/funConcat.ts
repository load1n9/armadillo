import { isPromise } from "./mod.ts";

export const funConcat = (
  // deno-lint-ignore no-explicit-any
  funcA: any,
  // deno-lint-ignore no-explicit-any
  funcB: any,
) =>
  // deno-lint-ignore no-explicit-any
  function pipedFunction(...args: any[]) {
    const intermediate = funcA(...args);
    return isPromise(intermediate)
      ? intermediate.then(funcB)
      : funcB(intermediate);
  };
export const funConcatSync = (
  // deno-lint-ignore no-explicit-any
  funcA: any,
  // deno-lint-ignore no-explicit-any
  funcB: any,
) =>
  // deno-lint-ignore no-explicit-any
  function pipedFunction(...args: any[]) {
    return funcB(funcA(...args));
  };
