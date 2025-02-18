import { json } from '@tanstack/start'
import { createAPIFileRoute } from '@tanstack/start/api'

export const APIRoute = createAPIFileRoute('/api/test1')({
  GET: ({ request, params }) => {
    return json({ message: 'Hello "/api/test1"!' })
  },
})
