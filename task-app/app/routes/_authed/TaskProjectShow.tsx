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
import CrudIndex from '~/utils/TaskProject/CrudIndex'
import TaskIndex from "~/utils/TaskItems/CrudIndex";
import TaskCrud from '~/utils/TaskItems/Crud';

type ProductSearch = {
  id: number
}
let data: any ={items: []}
let project = {};
let items = [];
let itemsNone = [], itemsWorking = [], itemsComplete = [];

export const Route = createFileRoute('/_authed/TaskProjectShow')({
  component: RouteComponent,
  validateSearch: (search: Record<string, unknown>): ProductSearch => {
    return {
      id: Number(search?.id ?? 1),
    }
  },
})

function RouteComponent() {
  const [updateTime, setUpdateTime] = useState("");
  const { id } = Route.useSearch()
  console.log("itemId=", id);


  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await TaskIndex.getList(id);
        console.log(res);
        items = res;
        setStateArray();

        const target = await CrudIndex.get(id);
        console.log(target);
        project = target;

        setUpdateTime(new Date().getTime());
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };
    fetchTodos();
  }, []);

  const setStateArray = async function() {
    itemsNone = items.filter(item => (item.status === String(TaskCrud.statusType.none)) );
    itemsWorking = items.filter(item => (item.status === String(TaskCrud.statusType.working)) );
    itemsComplete = items.filter(item => (item.status === String(TaskCrud.statusType.complete)) );
  }  

  return (
    <div className="bg-gray-100">
      <div className="pt-2">
        <Link to={`/`} className="btn-outline-blue mx-2">home
        </Link>
      </div>
      <div className="container mx-auto px-4 py-4">
        <div className="row">
          <div className="col-md-6">
              <Link to={`/TaskProject`} className="btn btn-outline-blue">Back
              </Link>
          </div>
          <div className="col-md-6 text-end">
            <Link to={`/TaskItemCreate`} 
              search={{ id: id }}
              >[ Create ]
            </Link>

          </div>
        </div>
        <div className="items-center justify-between mt-2 p-4 bg-white rounded-lg shadow">
          <div className="col-md-6">
            <h3 className="text-3xl font-bold">{project.name}</h3>
            ID: {project.id}
          </div>        
          <div className="row">
            <div className="col-md-6 text-end p-2">
              <Link to={`/TaskProjectExport`} 
                search={{ id: id }}
                >[ Export ]
              </Link>
            </div>
          </div>
          <hr className="my-1" />
          <div className="text-end">
            <button className="btn btn-sm btn-outline-blue" 
            >Clear</button>
            <span className="search_key_wrap">
              <input type="text" size="24" 
              className="border border-gray-400 rounded-md px-3 py-2 w-[50%] focus:outline-none focus:border-blue-500" 
              name="searchKey" id="searchKey" 
              placeholder="Title search" />
            </span>
            <button className="btn btn-sm btn-outline-blue" >Search</button>      
          </div>
          
        </div>
  
        <div className="flex flex-row">
          <div className="flex-1 text-center p-1 m-1">
            <h3 className="text-2xl">None</h3>
          </div>
          <div className="flex-1 text-center p-1 m-1">
            <h3 className="text-2xl">Working</h3>
          </div>
          <div className="flex-1 text-center p-1 m-1">
            <h3 className="text-2xl">Complete</h3>
          </div>
        </div>
  
        <div className="flex flex-row">
          <div className="flex-1 text-center p-0 m-1">
          {itemsNone.map((item, index) => (
            <div key={index} 
            className="items-center justify-between py-4 px-4 my-4 bg-white rounded-lg shadow">
              <h3>{item.title}</h3>
              <Link to={`/TaskItemEdit`} 
                search={{ id: item.id }}
                >[ Edit ]
              </Link>

              <span>id: {item.id}</span>
              <span> , end: {item.complete ? moment(item.complete).format("YYYY-MM-DD") : null}</span>
  
            </div>
          ))}
          </div>
  
          <div className="flex-1 text-center p-0 m-1">
          {itemsWorking.map((item, index) => (
            <div key={index} 
            className="items-center justify-between py-4 px-4 my-4 bg-white rounded-lg shadow">
              <h3>{item.title}</h3>
              <Link to={`/TaskItemEdit`} 
                search={{ id: item.id }}
                >[ Edit ]
              </Link>
              <span>id: {item.id}</span>
              <span> , end: {item.complete ? moment(item.complete).format("YYYY-MM-DD") : null}</span>
            </div>
          ))}
          </div>
  
          <div className="flex-1 text-center p-0 m-1">
          {itemsComplete.map((item, index) => (
            <div key={index} 
            className="items-center justify-between py-4 px-4 my-4 bg-white rounded-lg shadow">
              <h3>{item.title}</h3>
              <Link to={`/TaskItemEdit`} 
                search={{ id: item.id }}
                >[ Edit ]
              </Link>
              <span>id: {item.id}</span>
              <span> , end: {item.complete ? moment(item.complete).format("YYYY-MM-DD") : null}</span>
            </div>
          ))}
          </div>
  
        </div>
  
        <hr />
  
  
      </div>
  
    </div>
    );
  
}
