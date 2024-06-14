export default function Item({item}) {
  //  classname featured when it is featured
  return (
    <li className="item featured">
      <img src={item.logo} alt="company.img" />
      <div className="item-headers">
        <p>{item.company}</p>
        <div className="headers-tags">{item.new && <p className="tag">NEW</p>}</div>
      </div>
    </li>
  );
}
