import { createFileRoute } from '@tanstack/react-router'
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
import HttpCommon from '~/utils/HttpCommon';

let data: any ={items: []}

export const Route = createFileRoute('/_authed/TaskProject')({
  component: RouteComponent,
})

function RouteComponent() {
  const [updateTime, setUpdateTime] = useState("");

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await HttpCommon.post({},  '/project/get_list');
        console.log(response.data)
        data.items = response.data;
        setUpdateTime(new Date().getTime());
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };
    fetchTodos();
  }, []);

  const clearSearch = async function() {
    const seachKey = document.querySelector("#searchKey") as HTMLInputElement;
    seachKey.value = "";
  }  

  return (
    <>
      <div className="task_project bg-gray-100">
        <div className="pt-2">
          <Link to={`/`} className="btn-outline-blue mx-2">home
          </Link>
        </div>
        <div className="container mx-auto px-4 py-4">
          <div className="items-center justify-between p-4 bg-white rounded-lg shadow">
            <div className="col-md-6">
              <h1 className="text-3xl font-bold">project</h1>
            </div>
            <div className="col-md-6 text-end">
              <Link to={`/TaskProjectCreate`} className="btn btn-primary">Create
              </Link>
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
  
          {/* List */}
          <ul>
          {data.items.map((item, index) => (
            <li key={index} 
            className="flex items-center justify-between py-4 px-4 my-4 bg-white rounded-lg shadow">
              <div className="flex-1">
                <a href={`/task_project_show?id=${item.id}`}>
                  <h3 className="my-1 text-2xl">{item.name}</h3>
                </a>		
                <span>ID : {item.id}</span>
              </div>
              <div className="flex-1 text-end pt-3">
                <Link to={`/TaskProjectShow`} 
                  search={{
                    id: item.id,
                  }}
                  >[ Show ]
                </Link>

              </div>            
            </li>
          ))}
          </ul>
  
        </div>
      </div>
    </>
    );  
}
