import { createFileRoute } from '@tanstack/react-router'
import { useSearch, useParams  } from '@tanstack/react-router';
import React from "react";
import {useState, useEffect}  from 'react';
import {
  HeadContent,
  Link,
  Outlet,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router'
import { z } from 'zod';
import moment from "moment";
import HttpCommon from '~/utils/HttpCommon';
import Crud from '~/utils/TaskItems/Crud';
import CrudCreate from '~/utils/TaskItems/CrudCreate';
import CrudEdit from '~/utils/TaskItems/CrudEdit';
import TaskCrud from '~/utils/TaskItems/Crud';
import TaskIndex from "~/utils/TaskItems/CrudIndex";
import { todoSchema } from '~/utils/TaskItems/types';

let project = {};
let items = [];
let itemsNone = [], itemsWorking = [], itemsComplete = [];

type ProductSearch = {
  id: number
}

export const Route = createFileRoute('/_authed/TaskItemEdit')({
  component: RouteComponent,
  validateSearch: (search: Record<string, unknown>): ProductSearch => {
    return {
      id: Number(search?.id ?? 1),
    }
  },
})

function RouteComponent() {
  const { id } = Route.useSearch()
  const [updateTime, setUpdateTime] = useState("");
  const [task, setTask] = useState({});
  const [selectedValue, setSelectedValue] = useState('1');
  const [startDate, setStartDate] = useState('');
  const [complete, setComplete] = useState('');
  const [errors, setErrors] = useState({});
  console.log("itemId=", id);

  
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await CrudEdit.get(Number(id));
        console.log(res);
        const target = res;
        setTask(target);
        setStartDate(moment(target.start_date).format("YYYY-MM-DD"));
        setComplete(moment(target.complete).format("YYYY-MM-DD"));
        setUpdateTime(new Date().getTime());
        setSelectedValue(target.status);
        //const target = await CrudIndex.get(id);
        //project = target.data;
        //console.log(target.data);

        setUpdateTime(new Date().getTime());
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };
    fetchTodos();
  }, []);
  
  // ラジオボタンの変更を処理する関数
  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const saveProc = async function() {
    try{
      console.log("#save.selected=", selectedValue); 
      const resulte = await CrudEdit.update(Number(id), selectedValue);
      console.log(resulte);
      if(resulte) {
        location.href = `/TaskProjectShow?id=${task.projectId}`;
      }
    } catch (e) {
      console.error(e);
      throw new Error('Error , save');
    }    
  }

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setTask({
      ...task,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  async function deleteItem(){
    try {
      if (!window.confirm("Delete OK?")) {
        return;
      }
  
      const item = {
        id: Number(id),
      }
  console.log(item);
      const res = await HttpCommon.post(item , '/tasks/delete' );
      console.log("ret=", res.ret)
      console.log(res)
      if(!res.ret){
        throw new Error("Error, delete");
      }else{
        location.href = `/TaskProjectShow?id=${task.projectId}`;
      }
      return res.data;
    } catch (error) {
        console.error(error);
    }
  }
  //const setStateArray = async function() {
  //  itemsNone = items.filter(item => (item.status === String(TaskCrud.statusType.none)) );
  //  itemsWorking = items.filter(item => (item.status === String(TaskCrud.statusType.working)) );
  //  itemsComplete = items.filter(item => (item.status === String(TaskCrud.statusType.complete)) );
  //}

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <Link to={`/TaskProjectShow`} search={{ id: task.projectId}}
          >[ Back ]
        </Link>
        <hr className="my-2" />
        <h1 className="text-3xl -font-bold">TaskEdit</h1>
        <hr className="my-2" />
        <div className="col-md-9 form-group">
          <label className="fw-bold ">Title:</label>
          <input type="text" name="title" id="title" 
          onChange={(e) => handleInputChange(e)}
          defaultValue={task.title} 
          className="input_text" />
          {errors.title ? (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          ) : null}
        </div>

        {/* status */}
        <div>
          <label>
            <input
              type="radio"
              value="1"
              checked={selectedValue === '1'}
              onChange={handleRadioChange}
              className="ms-2"
            />
            none
          </label>
          <label>
            <input
              type="radio"
              value="2"
              checked={selectedValue === '2'}
              onChange={handleRadioChange}
              className="ms-2"
            />
            working
          </label>
          <label>
            <input
              type="radio"
              value="3"
              checked={selectedValue === '3'}
              onChange={handleRadioChange}
              className="ms-2"
            />
            complete
          </label>
  
        </div>
        <hr className="mt-2 mb-2" />
        <div className="col-md-6 form-group">
          <label className="col-sm-12">Start:</label>
          <input type="date"  className="input_text"  id="start_date" name="start_date"                   
          value={startDate} required="required"
          onChange={(e) => setStartDate(e.target.value)} />        
        </div>
        <div className="col-md-6 form-group">
          <label className="col-sm-12">End:</label>
          <input type="date"  className="input_text"  id="complete" name="complete"                   
          value={complete} required="required"
          onChange={(e) => setComplete(e.target.value)} />        
        </div>
        <div className="col-md-6 form-group">
          <label>Content:</label>
          <textarea 
          onChange={(e) => handleInputChange(e)}
          id="content" name="content" required 
          className="input_textarea"
          defaultValue ={task.content}
          rows="10" placeholder=""></textarea>
        </div>       
        <button  
        onClick={() => saveProc()}
        className="btn btn-primary my-2">Save</button>
        <hr className="my-1" />
        <button onClick={() => deleteItem()} 
        className="btn btn-outline-red my-2">Delete</button>
  
      </div>
  
    </div>
    );
}
