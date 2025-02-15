import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/test1')({
  component: RouteComponent,
})

function RouteComponent() {
  const testProc = async function () {
    //console.log("testProc");
    try {
      const response = await fetch(`/api/helloget`)
      if (!response.ok) throw new Error('error, /api/helloget')
      const data = await response.json()
      console.log(data)

      const postData = { id: 1, name: 'name-post1' }
      const resPost = await fetch(`/api/hello`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData),
      })
      if (!resPost.ok) throw new Error('error, /api/hello')
      const dataPost = await resPost.json()
      console.log(dataPost)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <>
      <div className="text-3xl">test1 !</div>
      <hr className="my-2" />
      <button className="btn" onClick={() => testProc()}>
        Test
      </button>
    </>
  )
}
