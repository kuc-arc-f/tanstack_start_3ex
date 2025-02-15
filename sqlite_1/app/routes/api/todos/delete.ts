import { json } from '@tanstack/start'
import { createAPIFileRoute } from '@tanstack/start/api'
import {db} from '../../../../src/index';
import {todos} from '../../../../src/db/schema';
import { eq, like } from 'drizzle-orm';

export const APIRoute = createAPIFileRoute('/api/todos/delete')({
  POST: async({ request, params }) => {
    try{
      const body = await request.json();
      console.log(body);
      const id = body.id;
      if (!id) {
        return res.status(400).json({ message: 'id is required' });
      }
      const deletedTodo = await db.delete(todos).where(eq(todos.id, id)).returning();
  
      if (deletedTodo.length === 0) {
        return res.status(404).json({ message: 'Todo not found' });
      }
      return json({ message: 'Hello "/api/todos/delete"!' })
    }catch(e){
      console.error(e);
      return json({ message: '' })
    };
  },
})
