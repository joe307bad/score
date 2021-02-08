/**
 * Do not modify this file - it is a proxy to your `App.re` file
 * located in the `src/` folder.
 */
import { meaningOfLife } from '@score/foo';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';


const o = interval(2000).pipe(
    take(4)
)

o.subscribe(v => console.log(v));

console.log(meaningOfLife);
export { app as default } from "./lib/es6/src/App.bs.js";
