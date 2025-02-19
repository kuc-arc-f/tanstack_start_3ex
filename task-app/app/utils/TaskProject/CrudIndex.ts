
//import LibConfig from '../../lib/LibConfig';
import HttpCommon from '~/utils/HttpCommon';
//import ApiUtil from '../../lib/ApiUtil';

const CrudIndex = {
  /**
  *
  * @param
  *
  * @return
  */
  search :async function (): Promise<any>
  {
    try{
      const seachKey = (<HTMLInputElement>document.querySelector("#searchKey")).value;
      const postItem = {
        seachKey: seachKey,
      }
      const json = await HttpCommon.server_post(postItem, "/project/search");
//console.log(json);      
      let items: any[] = [];
      items = json.data;
      return items;
    } catch (e) {
      console.error(e);
      throw new Error("Error, search");
    } 
  },
  /**
  * 
  * @param
  *
  * @return
  */
  get :async function (id: number): Promise<any>
  {
    try{
      let postItem: any = {
        "id": id
      }; 
      const res = await HttpCommon.post(postItem , '/project/get' );
      console.log(res.data)
      return res.data;
    } catch (e) {
      console.error(e);
      throw new Error("Error, getList");
    } 
  }  ,
  /**
  * 
  * @param
  *
  * @return
  */
  getList :async function (): Promise<any>
  {
    try{
      const json = await HttpCommon.server_post({}, "/project/get_list");
//console.log(json);      
      let items: any[] = [];
      items = json.data;
//console.log(items);
      return items;
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
