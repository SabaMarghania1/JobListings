export default function Item({item}) {
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
        {item.role && <span className="filter-tag">{item.role}</span>}
        {item.level && <span className="filter-tag">{item.level}</span>}
        {item.languages &&
          item.languages.map(language => <span className="filter-tag">{language}</span>)}
        {item.tools && item.tools.map(tool => <span className="filter-tag">{tool}</span>)}
      </div>
    </li>
  );
}
