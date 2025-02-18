import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router';
import { items } from '~/utils/route_1';

export const Route = createFileRoute('/_authed/route_1')({
  component: RouteComponent,
})

function RouteComponent() {
//  return <div>Hello "/_authed/route_1"!</div>
return (
  <div>
    <h1 className="text-3xl font-bold">商品一覧ページ</h1>
    <hr className="my-2" />
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <Link to={`/route_1show`} 
              search={{
                itemId: item.id,
              }}
              >
            {item.name} の詳細を見る（クエリパラメータ）
          </Link>
        </li>
      ))}
    </ul>
    <Link to="/">
      ホームページへ戻る
    </Link>
  </div>
  );
}
