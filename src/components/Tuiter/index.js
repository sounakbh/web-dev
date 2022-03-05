// import React from "react";
// import { Link } from "react-router-dom";

// const Tuiter = () => {
//   return (
//     <>
//       <h1>Tuiter</h1>
//       <Link to="/hello">Hello</Link> |<Link to="/labs">Labs</Link>
//     </>
//   );
// };

// export default Tuiter;

import React from "react";
import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowList from "./WhoToFollowList/index";
import PostSummaryList from "./PostSummaryList";
import ExploreScreen from "./ExploreScreen/ExploreScreen";
const Tuiter = () => {
  return (
    <>
      {/* <NavigationSidebar active="Home" />
      <WhoToFollowList />
      <PostSummaryList /> */}
      <ExploreScreen />
    </>
  );
};
export default Tuiter;
