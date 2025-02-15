import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/content')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/content"!</div>
}
