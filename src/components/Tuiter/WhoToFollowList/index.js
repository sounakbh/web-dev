import WhoToFollowListItem from "./WhoToFollowListItem";
import Who from "./Who.json";
import React from "react";
import { useSelector } from "react-redux";
// const WhoToFollowList = () => {
//   return (
// <ul className="list-group">
//   <li className="list-group-item">
//     <div className="row" style={{ fontSize: "13px" }}>
//       <b>Who to follow</b>
//     </div>
//   </li>
//   {Who.map((who) => (
//     <WhoToFollowListItem who={who} />
//   ))}
// </ul>
//   );
// };

const WhoToFollowList = () => {
  const who = useSelector((state) => state.who);
  return (
    <ul className="list-group">
      <li className="list-group-item">
        <div className="row" style={{ fontSize: "13px" }}>
          <b>Who to follow</b>
        </div>
      </li>
      {Who.map((who) => (
        <WhoToFollowListItem who={who} />
      ))}
    </ul>
  );
};

export default WhoToFollowList;
