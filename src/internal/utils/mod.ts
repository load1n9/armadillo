export const noop = () => {};
// deno-lint-ignore no-explicit-any
export const isPromise = (value: any) =>
  value != null && typeof value.then == "function";

const objectProto = Object.prototype;

const nativeObjectToString = objectProto.toString;

// deno-lint-ignore no-explicit-any
export const objectToString = (value: any) => nativeObjectToString.call(value);
const asyncGeneratorFunctionTag = "[object AsyncGeneratorFunction]";
const generatorFunctionTag = "[object GeneratorFunction]";
// deno-lint-ignore no-explicit-any
export const isGeneratorFunction = (value: any) =>
  objectToString(value) == generatorFunctionTag;
// deno-lint-ignore no-explicit-any
export const isAsyncGeneratorFunction = (value: any) =>
  objectToString(value) == asyncGeneratorFunctionTag;
