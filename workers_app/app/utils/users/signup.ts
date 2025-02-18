
const signup = {

  create: async function(item: any){
    try{
      let ret = false;
      const response = await fetch("/api/common/apisend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      });
  console.log("response=", response.ok);
      if (response.ok) {
        return true;
      }
      return ret;

    }catch(e){console.error(e)}
  }

}
export default signup;

