import { createFileRoute, redirect } from '@tanstack/react-router';
import { createServerFn } from '@tanstack/start'
import { Login } from '~/components/Login'
import { useAppSession } from '~/utils/session'

export const loginFn = createServerFn()
  .validator((d) => d as { email: string; password: string })
  .handler(async ({ data }) => {
    console.log("#loginFn");
    console.log(data);
    const user = {email: data.email}

    // Create a session
    const session = await useAppSession()

    await session.update({
      userEmail: user.email,
    })
  })

export const Route = createFileRoute('/_authed')({
  beforeLoad: ({ context }) => {
    //console.log("#_authed.beforeLoad");
    //console.log(context);
    if (!context.user) {
      throw redirect({
        to: '/login',
      });
    }
  },
  errorComponent: ({ error }) => {
    if (error.message === 'Not authenticated') {
      return <Login />
    }

    throw error
  },
})
