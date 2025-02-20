import { useRouter } from '@tanstack/react-router'
import {
  HeadContent,
  Link,
  Outlet,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router'
import { useServerFn } from '@tanstack/start'
import { createServerFn } from '@tanstack/start'
import { useMutation } from '../hooks/useMutation'
import { loginFn } from '../routes/_authed'
import { Auth } from './Auth'
import { signupFn } from '~/routes/signup'
import { useAppSession } from '~/utils/session'
import signup from '~/utils/users/signup'

export function Login() {
  const router = useRouter()

  const loginMutation = useMutation({
    fn: loginFn,
    onSuccess: async (ctx) => {
      console.log("#onSuccess");
      console.log(ctx);
      if (!ctx.data?.error) {
        await router.invalidate()
        router.navigate({ to: '/' })
        return
      }
    },
  })

  //const signupMutation = useMutation({
  //  fn: useServerFn(signupFn),
  //})

  return (
  <>
    <Auth
      actionText="Login"
      status={loginMutation.status}
      onSubmit={async(e) => {
        const formData = new FormData(e.target as HTMLFormElement)
        const data = {
          email: formData.get('email') as string,
          password: formData.get('password') as string,
        };
        console.log(data);
        const response = await fetch("/api/user/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        console.log(response);
        if (!response.ok) {
          return;
        }
        const json = await response.json()
        console.log(json);
        if(json.ret && json.ret !== 200){
          alert("error, Login"); 
          return;
        }
        /*
        const result = await signup.create(data);
        if(!result){
           alert("error, Login"); 
           return;
        }
        */

        loginMutation.mutate({
          data: {
            email: formData.get('email') as string,
            password: formData.get('password') as string
          },
        })

/*
*/
      }}
    />

  </>
  )
}
