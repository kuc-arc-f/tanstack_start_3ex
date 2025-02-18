import { Link, Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authed/test1')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
  <>
    <h1 className="text-3xl font-bold">Test1</h1>
    <hr className="my-2" />
    <div>Hello "/_authed/test1"!</div>
  </>
  )
}
