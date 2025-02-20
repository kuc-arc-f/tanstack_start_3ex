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
import Crud from '~/utils/TaskItems/Crud';
import CrudCreate from '~/utils/TaskItems/CrudCreate';
import { todoSchema } from '~/utils/TaskItems/types';

let data: any ={items: []}
let project = {};
let items = [];
let itemsNone = [], itemsWorking = [], itemsComplete = [];

type ProductSearch = {
  id: number
}

export const Route = createFileRoute('/_authed/TaskItemCreate')({
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
  const [selectedValue, setSelectedValue] = useState('1');
  const [startDate, setStartDate] = useState('');
  const [complete, setComplete] = useState('');
  const [errors, setErrors] = useState({});

  console.log("itemId=", id);
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const dt = moment().format('YYYY-MM-DD');
        setStartDate(dt);
        setComplete(dt);  
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
      setErrors({});
      let values = Crud.getInputValues();
  console.log(values); 
      const validatedTodo = todoSchema.parse(values);
      console.log("#save.selected=", selectedValue); 
      const resulte = await CrudCreate.addItem(Number(id), selectedValue);
      console.log(resulte);
      location.href = `/TaskProjectShow?id=${id}`;
      //if(resulte.ret === 200) {
      //}
    } catch (error) {
      console.error(error);
      if (error instanceof z.ZodError) {
        const target = error.errors.reduce((acc, curr) => {
          const field = curr.path[0];
          acc[field] = curr.message;
          return acc;
        }, {});
        setErrors(target);
        console.log(target);
      }
    }    
  }  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <Link to={`/TaskProjectShow`} search={{ id: id}}
        className="btn-outline-blue"
          >Back
        </Link>
        <hr className="my-2" />
        <h1 className="text-3xl -font-bold">TaskCreate</h1>
        projectId: {id}
        <hr className="my-2" />
        <div className="col-md-9 form-group">
          <label className="fw-bold ">Title:</label>
          <input type="text" name="title" id="title" 
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
          <textarea id="content" name="content" required 
          className="input_textarea"
          rows="10" placeholder=""></textarea>
        </div>       
        <button  
        onClick={() => saveProc()}
        className="btn btn-primary my-2"
        >Save</button>
  
      </div>
  
    </div>
    );  
  
}
