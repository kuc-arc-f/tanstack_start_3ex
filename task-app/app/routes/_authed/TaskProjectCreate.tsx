import { createFileRoute } from '@tanstack/react-router'
import {useState, useEffect}  from 'react';
import {
  HeadContent,
  Link,
  Outlet,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router'
import { z } from 'zod';
import {todoSchema} from '~/utils/TaskProject/types';
import Crud from '~/utils/TaskProject/Crud';
import HttpCommon from '~/utils/HttpCommon';

let data;
let errors: { [key: string]: string } = {};

export const Route = createFileRoute('/_authed/TaskProjectCreate')({
  component: RouteComponent,
})

function RouteComponent() {
  const [updateTime, setUpdateTime] = useState("");

  const addPost = async function () {
    try{
      errors = {};
      const values = Crud.getInputValues();
      console.log(values);
      const validatedTodo = todoSchema.parse(values);
      const response = await HttpCommon.post(values,  '/project/create');
      console.log(response)
      //navigate(`/task_project`);
    } catch (error) {
      console.log(error);
      if (error instanceof z.ZodError) {
        errors = error.errors.reduce((acc, curr) => {
          const field = curr.path[0];
          acc[field] = curr.message;
          return acc;
        }, {});
      }
      console.log(errors);
      alert("error, add");
    }
  }

  return (
    <>
      <div className="pt-2">
        <Link to={`/`} className="btn-outline-blue mx-2">home
        </Link>
      </div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
          <Link to={`/TaskProject`} className="btn-outline-blue">Back
          </Link>
          <hr className="my-2" />
          <h1 className="text-3xl font-bold">Project Create</h1>
          <hr className="my-2" />
          <div className="col-md-6 form-group">
            <label>Name</label>
            <input type="text" id="name" name="name" 
            className="input_text" required />
          </div>
          <hr className="mt-2 mb-2" />
          <button onClick={() => addPost() } 
          className="btn btn-primary my-2"
          >Add</button>
  
        </div>
      </div>
    </>
  );  
}
