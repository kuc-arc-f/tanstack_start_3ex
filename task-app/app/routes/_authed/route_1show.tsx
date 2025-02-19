import { createFileRoute } from '@tanstack/react-router'
import { useSearch, useParams  } from '@tanstack/react-router';
import { items } from '~/utils/route_1';

type ProductSearch = {
  itemId: number
}
let item: any = {};

export const Route = createFileRoute('/_authed/route_1show')({
  component: RouteComponent,
  validateSearch: (search: Record<string, unknown>): ProductSearch => {
    return {
      itemId: Number(search?.itemId ?? 1),
    }
  },
})

function RouteComponent() {
  const { itemId } = Route.useSearch()
  console.log("itemId=", itemId);
  const result = items.filter((item) => item.id === itemId);
  if(result && result.length > 0){
    item = result[0];
  }
  console.log(item);

  return (
  <>
    <div className="text-3xl font-bold">itemdetail !</div>
    <hr />
    id : {item.id} , 
    name : {item.name}
  </>
  )
}
