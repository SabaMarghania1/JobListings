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
    console.log(filter, value);
    setSelectedFilters(prevFilters => ({
      ...prevFilters,
      [filter]: Array.isArray(prevFilters[filter])
        ? toggleFilter(prevFilters[filter], value)
        : value,
    }));
  }

  function toggleFilter(currentFilter, value) {
    if (currentFilter.includes(value)) {
      return currentFilter.filter(item => item !== value);
    } else {
      return [...currentFilter, value];
    }
  }

  function handleClear() {
    setSelectedFilters({
      languages: [],
      tools: [],
      role: '',
      level: [],
    });
  }
  const isVisible =
    selectedFilters.languages.length > 0 ||
    selectedFilters.tools.length > 0 ||
    selectedFilters.role.length > 0 ||
    selectedFilters.level.length > 0;

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
      {isVisible && (
        <Filters
          selectedFilters={selectedFilters}
          handleFilterClick={handleFilterClick}
          handleClear={handleClear}
        />
      )}

      <main className="container">
        <ul className="items">
          {filteredData.map(item => (
            <Item key={item.id} item={item} handleFilterClick={handleFilterClick} />
          ))}
        </ul>
      </main>
    </>
  );
}
