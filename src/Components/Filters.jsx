export default function Filters({selectedFilters, handleFilterClick, handleClear}) {
  const {languages, tools, role, level} = selectedFilters;

  return (
    <aside className="filters">
      <div className="filters-left">
        {/* Role Filter */}
        {role.length > 0 && (
          <div className="filter-field">
            <p>{role}</p>
            <div className="remove">
              <img
                src="icon-remove.svg"
                alt="Remove filter"
                onClick={() => handleFilterClick('role', '')}
              />
            </div>
          </div>
        )}

        {/* Tools Filters */}
        {tools.map(tool => (
          <div className="filter-field" key={tool}>
            <p>{tool}</p>
            <div className="remove">
              <img
                src="icon-remove.svg"
                alt="Remove filter"
                onClick={() => handleFilterClick('tools', tool)}
              />
            </div>
          </div>
        ))}

        {/* Languages Filters */}
        {languages.map(language => (
          <div className="filter-field" key={language}>
            <p>{language}</p>
            <div className="remove">
              <img
                src="icon-remove.svg"
                alt="Remove filter"
                onClick={() => handleFilterClick('languages', language)}
              />
            </div>
          </div>
        ))}

        {/* Level Filters */}
        {level.map(level => (
          <div className="filter-field" key={level}>
            <p>{level}</p>
            <div className="remove">
              <img
                src="icon-remove.svg"
                alt="Remove filter"
                onClick={() => handleFilterClick('level', level)}
              />
            </div>
          </div>
        ))}
      </div>
      <p onClick={handleClear} className="filters-right">
        Clear
      </p>
    </aside>
  );
}
