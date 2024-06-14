import React from 'react';

export default function Item({item, handleFilterClick}) {
  return (
    <li className={`item ${item.featured && 'featured'}`}>
      <div className="job-info-container">
        <div className="left">
          <img src={item.logo} alt="Company Logo" />
        </div>
        <div className="right">
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
          item.languages.map(language => (
            <span
              key={language}
              className="filter-tag"
              onClick={() => handleFilterClick('languages', language)}
            >
              {language}
            </span>
          ))}
        {item.tools &&
          item.tools.map(tool => (
            <span
              key={tool}
              className="filter-tag"
              onClick={() => handleFilterClick('tools', tool)}
            >
              {tool}
            </span>
          ))}
      </div>
    </li>
  );
}
