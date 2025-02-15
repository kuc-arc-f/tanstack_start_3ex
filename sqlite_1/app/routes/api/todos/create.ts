import { json } from '@tanstack/start'
import { createAPIFileRoute } from '@tanstack/start/api'
import {db} from '../../../../src/index';
import {todos} from '../../../../src/db/schema';

export const APIRoute = createAPIFileRoute('/api/todos/create')({
  POST: async({ request, params }) => {
    try{
      const body = await request.json();
      console.log(body);
      const title = body.title;
      if (!title) {
        return res.status(400).json({ message: 'Title is required' });
      }
      const newTodo = await db.insert(todos).values({ title }).returning();
      return json({ message: 'Hello "/api/todos/create"!' })
    }catch(e){
      console.error(e);
      return json({ message: '' })
    };
  },
})
