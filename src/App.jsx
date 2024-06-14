import Filters from './Components/Filters';
import Item from './Components/Item';

import data from './data.json';
Filters;
console.log(data);
export default function App() {
  return (
    <>
      <header className="header"></header>
      <Filters />
      <main className="container">
        <ul className="items">
          {data.map(item => (
            <Item key={item.id} item={item} />
          ))}
        </ul>
      </main>
    </>
  );
}
