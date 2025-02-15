import { json } from '@tanstack/start'
import { createAPIFileRoute } from '@tanstack/start/api'

export const APIRoute = createAPIFileRoute('/api/helloget')({
  GET: ({ request, params }) => {
    console.log("#GET /api/helloget")
    return json({ message: 'Hello , /api/helloget' })
  },
})
