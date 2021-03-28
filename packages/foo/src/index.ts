import { interval } from 'rxjs';
import { take } from 'rxjs/operators';
import { appSchema, tableSchema } from '@nozbe/watermelondb'
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

console.log(schema)




const o = interval(2000).pipe(
    take(4)
)

const foo = () => console.log('hey'); //o.subscribe(v => '');

export { foo };