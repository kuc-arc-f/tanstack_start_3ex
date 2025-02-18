import { json } from '@tanstack/start'
import { createAPIFileRoute } from '@tanstack/start/api'

export const APIRoute = createAPIFileRoute('/api/common/get_sys_items')({
  GET: ({ request, params }) => {
    return json({
       message: 'Hello "/api/common/hello"!' 
       data: {}
    })
  },
})
