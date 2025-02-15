import { json } from '@tanstack/start'
import { createAPIFileRoute } from '@tanstack/start/api'
import {db} from '../../../../src/index';
import {todos} from '../../../../src/db/schema';

export const APIRoute = createAPIFileRoute('/api/todos/list')({
  GET: async ({ request, params }) => {
    const allTodos = await db.select().from(todos);

    return json({
      message: 'Hello ,/api/hello POST-DATA',
      data: allTodos,
    })
  },
})
