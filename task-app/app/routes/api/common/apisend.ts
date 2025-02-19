import { json } from '@tanstack/start'
import { createAPIFileRoute } from '@tanstack/start/api'
import { setResponseStatus } from '@tanstack/start/server'
import axios from 'axios'

export const APIRoute = createAPIFileRoute('/api/common/apisend')({
  POST: async ({ request, params }) => {
    const body = await request.json();
    const url = import.meta.env.VITE_API_URL ;
    body.api_key = import.meta.env.VITE_API_KEY;
    console.log(body);
    const targetPath = url + body.api_path;
    console.log("targetPath=", targetPath);
    const res = await fetch(targetPath, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},      
      body: JSON.stringify(body)
    });
    if (res.status !== 200) {
      console.error("Error, HTTP <> 200");
      throw new Error(await res.text());
    }        
    const resObj = await res.json();
    console.log(resObj);
    return json(resObj)
    try{
    }catch(e){
      console.error(e);
      setResponseStatus(500);
      return json({ message: '' })
    };
  },
})
