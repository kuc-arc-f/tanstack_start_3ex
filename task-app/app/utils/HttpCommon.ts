
const HttpCommon = {
  post: async function(item: any, path: string): Promise<any>
  {
    try{
      item.api_path = path;
      console.log(item);
      const res = await fetch("/api/common/apisend", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},      
        body: JSON.stringify(item)
      });
      if (!res.ok) {
        console.log(json);   
        throw new Error(await res.text());
      }
      const json = await res.json()
      return json;
    }catch(e){console.error(e);}

  }


};
export default HttpCommon;