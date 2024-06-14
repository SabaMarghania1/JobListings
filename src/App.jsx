import React, {useState} from 'react';
import Filters from './Components/Filters';
import Item from './Components/Item';

import data from './data.json';

export default function App() {
  const [selectedFilters, setSelectedFilters] = useState({
    languages: [],
    tools: [],
    role: '',
    level: [],
  });

  function handleFilterClick(filter, value) {
    setSelectedFilters({
      ...selectedFilters,
      [filter]: value,
    });
  }

  const filteredData = data.filter(item => {
    const {languages, tools, role, level} = selectedFilters;

    if (languages.length > 0 && !languages.some(lang => item.languages.includes(lang))) {
      return false;
    }
    if (tools.length > 0 && !tools.some(tool => item.tools.includes(tool))) {
      return false;
    }
    if (role && item.role !== role) {
      return false;
    }
    if (level.length > 0 && !level.includes(item.level)) {
      return false;
    }
    return true;
  });

  return (
    <>
      <header className="header"></header>
      <Filters />
      <main className="container">
        <ul className="items">
          {filteredData.map(item => (
            <Item
              key={item.id}
              item={item}
              selectedFilters={selectedFilters}
              handleFilterClick={handleFilterClick}
            />
          ))}
        </ul>
      </main>
    </>
  );
}
