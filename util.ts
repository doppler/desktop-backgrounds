import { parse } from "https://deno.land/std@0.82.0/flags/mod.ts"

const {start, length, small} = parse(Deno.args)

console.log({start,small})

const goldenRatio = (precision: number) => {
  const s = [...Array(precision)]
    .reduce((acc, _, i) => acc.concat(
      i > 1 ? acc[i - 1] + acc[i - 2] : i
    ), []
  );
  return s[s.length - 1] / s[s.length - 2]
}

const G = goldenRatio(50)

const multiply = (factor: number) => factor * G;

const divide = (divisor: number, small: boolean) =>
  small ?
    divisor * G ** -1 :
    divisor - divisor * G ** -1 ;

console.log(multiply(start));

console.log(divide(start, small));

const divisions = (length: number) =>
  [...Array(length)]
    .reduce((acc, curr, i) =>
      acc.concat(
        divide(acc[acc.length - 1], true)
     ), [start]
  );

console.log(divisions(length));