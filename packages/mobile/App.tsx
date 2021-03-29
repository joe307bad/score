/**
 * Do not modify this file - it is a proxy to your `App.re` file
 * located in the `src/` folder.
 */
import { foo, postsCollection } from '@score/foo';
import withObservables from '@nozbe/with-observables';
import { make } from "./lib/es6/src/App.bs.js";

foo();
const appWithPosts = withObservables(['post'], () => ({
    allPosts: postsCollection.query().observe()
}))
const AppWithPosts = appWithPosts(make)

export default AppWithPosts
