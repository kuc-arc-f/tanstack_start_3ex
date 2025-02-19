import HttpCommon from '~/utils/HttpCommon';

const CrudIndex = {
  /**
  * getList
  * @param
  *
  * @return
  */
  getList :async function (id: number): Promise<any>
  {
    try{
      const item = {projectId: id};
      const res = await HttpCommon.post(item, '/tasks/get_list' );
      //console.log(res.data)
      return res.data;
    } catch (e) {
      console.error(e);
      throw new Error("Error, getList");
    } 
  }  ,  
  /**
  * startProc
  * @param
  *
  * @return
  */   
  startProc :async function (): Promise<void> 
  {
    try{
      console.log("#startProc");
      //
      const button: any = document.querySelector('#status_complete');
      button.addEventListener('click', async () => {
        console.log("#status_complete");
      });      
    } catch (e) {
      console.error(e);
    }    
  } 
}

export default CrudIndex;
