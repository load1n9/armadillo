import {
  isAsyncGeneratorFunction,
  isGeneratorFunction,
  noop,
} from "./utils/mod.ts";
import { funConcat, funConcatSync } from "./utils/funConcat.ts";
// deno-lint-ignore no-explicit-any
export const Pipe = (funs: any[]) => {
  // deno-lint-ignore no-explicit-any
  let functionPipeline: any = noop;
  // deno-lint-ignore no-explicit-any
  let functionComposition: any = noop;
  // deno-lint-ignore no-explicit-any
  return (...args: any[]) => {
    const firstArg = args[0];
    if (
      typeof firstArg == "function" &&
      !isGeneratorFunction(firstArg) &&
      !isAsyncGeneratorFunction(firstArg)
    ) {
      if (functionComposition == noop) {
        functionComposition = funs.reduceRight(funConcat);
      }
      return functionComposition(...args);
    }
    if (functionPipeline == noop) {
      functionPipeline = funs.reduce(funConcat);
    }
    return functionPipeline(...args);
  };
};

// deno-lint-ignore no-explicit-any
const PipeSync = (funs: any) => funs.reduce(funConcatSync);
Pipe.sync = PipeSync;
