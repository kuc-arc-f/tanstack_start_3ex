import { json } from '@tanstack/start'
import { createAPIFileRoute } from '@tanstack/start/api'
import {db} from '../../../../src/index';
import {todos} from '../../../../src/db/schema';
import { eq, like } from 'drizzle-orm';

export const APIRoute = createAPIFileRoute('/api/todos/update')({
  POST: async({ request, params }) => {
    try{
      const body = await request.json();
      console.log(body);
      const title = body.title;
      const id = body.id;
      if (!id) {
        return res.status(400).json({ message: 'id is required' });
      }
      const updatedTodo = await db.update(todos).set({ title }).where(eq(todos.id, id)).returning();
      if (updatedTodo.length === 0) {
        return json({ message: "Todo not found" });
      }  
      return json({ message: 'Hello "/api/todos/update"!' })
    }catch(e){
      console.error(e);
      return json({ message: '' })
    };
  },
})
