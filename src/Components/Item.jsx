export default function Item({item, handleFilterClick, selectedFilters}) {
  return (
    <li className={`item ${item.featured && 'featured'}`}>
      <img src={item.logo} alt="company.img" />
      <div className="job-info-container">
        <div className="item-headers">
          <p>{item.company}</p>
          <div className="headers-tags">
            {item.new && <span className="tag new-tag">NEW!</span>}
            {item.featured && <span className="tag featured-tag">FEATURED</span>}
          </div>
        </div>
        <h3 className="job-title">{item.position}</h3>
        <div className="job-info">
          <span>{item.postedAt}</span>
          <div className="circle"></div>
          <span>{item.contract}</span>
          <div className="circle"></div>
          <span>{item.location}</span>
        </div>
      </div>
      <div className="filter-tags">
        {item.role && (
          <span className="filter-tag" onClick={() => handleFilterClick('role', item.role)}>
            {item.role}
          </span>
        )}
        {item.level && (
          <span className="filter-tag" onClick={() => handleFilterClick('level', item.level)}>
            {item.level}
          </span>
        )}
        {item.languages &&
          item.languages.map(language => {
            console.log(language);
            return (
              <span
                key={language}
                onClick={() => handleFilterClick('languages', item.languages)}
                className="filter-tag"
              >
                {language}
              </span>
            );
          })}
        {item.tools &&
          item.tools.map(tool => (
            <span
              key={tool}
              className="filter-tag"
              onClick={() => handleFilterClick('tools', item.tools)}
            >
              {tool}
            </span>
          ))}
      </div>
    </li>
  );
}
