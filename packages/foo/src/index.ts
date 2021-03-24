import { interval } from 'rxjs';
import { take } from 'rxjs/operators';


const o = interval(2000).pipe(
    take(4)
)

const foo = () => console.log('hey'); //o.subscribe(v => '');

export { foo };