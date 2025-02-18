import { createFileRoute, redirect } from '@tanstack/react-router'
import { createServerFn, useServerFn } from '@tanstack/start'
import { useMutation } from '~/hooks/useMutation'
import { Auth } from '~/components/Auth'
import { useAppSession } from '~/utils/session'
import signup from '~/utils/users/signup'

export const signupFn = createServerFn()
  .validator(
    (d) =>
      d as {
        email: string
        password: string
        redirectUrl?: string
      },
  )
  .handler(async ({ data }) => {
    const user = {email: "u@example"}

    await session.update({
      userEmail: user.email,
    })

    // Redirect to the prev page stored in the "redirect" search param
    throw redirect({
      href: data.redirectUrl || '/',
    })
  })

export const Route = createFileRoute('/signup')({
  component: SignupComp,
})

function SignupComp() {
  const signupMutation = useMutation({
    fn: useServerFn(signupFn),
  })

  return (
    <Auth
      actionText="Sign Up"
      status={signupMutation.status}
      onSubmit={async (e) => {
        const formData = new FormData(e.target as HTMLFormElement)
        const data = {
          api_path: "/api/users/create",
          username: "name",
          email: formData.get('email') as string,
          password: formData.get('password') as string,
        };
        console.log(data);
        const result = await signup.create(data);
        if(!result){
           alert("error, User add"); 
           return;
        }
        location.href = "/login";
        /*
        signupMutation.mutate({
          data: {
            email: formData.get('email') as string,
            password: formData.get('password') as string,
          },
        })
        */
      }}
      afterSubmit={
        signupMutation.data?.error ? (
          <>
            <div className="text-red-400">{signupMutation.data.message}</div>
          </>
        ) : null
      }
    />
  )
}
