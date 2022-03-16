import { Pipe } from "./internal/mod.ts";

export class Armadillo {
    // deno-lint-ignore no-explicit-any
    static Pipe(...args: any) {
        return Pipe([...args]);
    }
}