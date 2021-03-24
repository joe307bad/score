/**
 * Do not modify this file - it is a proxy to your `App.re` file
 * located in the `src/` folder.
 */
import { appSchema, tableSchema } from '@nozbe/watermelondb'
import { foo } from '@score/foo';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'
import { Database } from '@nozbe/watermelondb'

const schema = appSchema({
    version: 1,
    tables: [
        tableSchema({
            name: 'posts',
            columns: [
                { name: 'title', type: 'string' },
                { name: 'subtitle', type: 'string', isOptional: true },
                { name: 'body', type: 'string' },
                { name: 'is_pinned', type: 'boolean' },
            ]
        }),
        tableSchema({
            name: 'comments',
            columns: [
                { name: 'body', type: 'string' },
                { name: 'post_id', type: 'string', isIndexed: true },
            ]
        }),
    ]
})

const adapter = new SQLiteAdapter({
    schema
})

const database = new Database({
    adapter,
    modelClasses: [
        // Post, // ⬅️ You'll add Models to Watermelon here
    ],
    actionsEnabled: true,
})


foo();

console.log(schema)

export { app as default } from "./lib/es6/src/App.bs.js";
