import { json } from '@tanstack/start'
import { createAPIFileRoute } from '@tanstack/start/api'
import { setResponseStatus } from '@tanstack/start/server'
import axios from 'axios'

export const APIRoute = createAPIFileRoute('/api/user/login')({
  POST: async ({ request, params }) => {
    const retObj = { ret: 500 , message: "Internal Server Error" }
    try{    
      const body = await request.json();
      console.log(body)

      const name = import.meta.env.VITE_USER_USERNAME ;
      const password = import.meta.env.VITE_USER_PASSWORD ;
      console.log("name=", name)
      console.log("password=", password)
      if(body.email === name && body.password === password){
        retObj.ret = 200;
        return json(retObj)
      }
      setResponseStatus(500);
      return json(retObj)
    }catch(e){
      console.error(e);
      setResponseStatus(500);
      return json(retObj)
    };
  },
})
