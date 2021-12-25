
export default function TodoList({ list }) {
  
  return <div>{list && list.map((e) => <div key={e.id}>{e.term}</div>)}</div>;
}
