import { json } from '@tanstack/start'
import { createAPIFileRoute } from '@tanstack/start/api'

export const APIRoute = createAPIFileRoute('/api/hello')({
  POST: async ({ request, params }) => {
    const body = await request.json();
    return json({ 
      message: 'Hello ,/api/hello POST-DATA' , data: body
    })
  },
})
