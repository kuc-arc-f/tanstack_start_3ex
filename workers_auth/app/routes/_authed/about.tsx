import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authed/about')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_authed/about"!</div>
}
