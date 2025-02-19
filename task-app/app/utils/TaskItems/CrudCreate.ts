import Crud from './Crud';
import HttpCommon from '~/utils/HttpCommon';
import LibAuth from '~/utils/LibAuth';
//import ApiUtil from '../../lib/ApiUtil';

const CrudCreate = {

  /**
   *
   * @param key: any
   *
   * @return
   */
  addItem : async function(projectId: number, selected : number) : Promise<any>
  {
    try{
      let ret = false;
      let values = Crud.getInputValues();
      values.status = String(selected);
      values.projectId = projectId;
      values.userId = LibAuth.getUserId();
console.log(values);
      const response = await HttpCommon.post(values,  '/tasks/create');
      console.log(response)
      return response;
    } catch (e) {
      console.error("Error, addItem");
      console.error(e);
      throw new Error('Error , addItem');
    }
  },  
  /**
  *
  * @param
  *
  * @return
  */   
  startProc :async function (): Promise<void> 
  {
    try{
      console.log("#startProc");
    } catch (e) {
      console.error(e);
    }    
  } 
}

export default CrudCreate;
