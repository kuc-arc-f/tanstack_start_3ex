import { json } from '@tanstack/start'
import { createAPIFileRoute } from '@tanstack/start/api'

export const APIRoute = createAPIFileRoute('/api/common/sys-param')({
  GET: ({ request, params }) => {
    let API_URL= import.meta.env.VITE_API_URL
    //return json({ message: 'Hello "/api/common/sys-param"!' })
    return json({
      message: 'Hello "/api/common/hello"!' ,
      data: {api_url: API_URL}
   })
  },
})
