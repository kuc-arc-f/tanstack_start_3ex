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
import ExportGantt from '~/utils/TaskProject/ExportGantt'
import TaskIndex from "~/utils/TaskItems/CrudIndex";

type ProductSearch = {
  id: number
}
let data: any ={items: []}
let project = {};
let items = [];
let itemsNone = [], itemsWorking = [], itemsComplete = [];

export const Route = createFileRoute('/_authed/TaskProjectExport')({
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
  console.log("itemId=", id);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await TaskIndex.getList(id);
        console.log(res);
        items = res;
        const resProj = await HttpCommon.post({"id": id}, '/project/get' );
        project = resProj.data;
        console.log(project)

        setStateArray();
        setUpdateTime(new Date().getTime());
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };
    fetchTodos();
  }, []);

  const setStateArray = async function() {
    itemsNone = items.filter(item => (item.status === '1') );
    itemsWorking = items.filter(item => (item.status === '2') );
    itemsComplete = items.filter(item => (item.status === '3') );
  }

  const exportGantt = async function () {
    try{
      await ExportGantt.out(items)
    } catch (e) {
        console.error(e);
        throw new Error('Error , exportGantt');
    }
  }

  return (
    <>
      <div className="container mx-auto px-4 py-4 bg-gray-100">
        <div className="pt-2">
          <Link to={`/`} className="btn-outline-blue mx-2">home
          </Link>
        </div>
        <hr className="my-2" />
        <div className="col-md-6">
            <Link to={`/TaskProject`} className="btn btn-outline-blue mx-2">Back
            </Link>
        </div>
        <hr className="my-2" />
        <h1 className="text-3xl">Export: {project.name}</h1>
        ID: {id}
        <hr className="my-2" />
        {/*
        <div class="text-center">
            <button class="my-2 btn btn-primary" onClick={() => {exportExcel()}}>List</button>
        </div>    
        <hr class="my-1" />
        */}
        <div className="text-center">
          <button className="my-2 btn" onClick={() => exportGantt()}
          >Gantt</button>
        </div>    
        <hr className="my-1" />
  
      </div>
  
    </>
    );
  
}
