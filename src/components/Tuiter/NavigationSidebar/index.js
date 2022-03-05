import React from "react";
const NavigationSidebar = ({ active = "explore" }) => {
  return (
    <div className="list-group">
      <a className="list-group-item" href="/public/tuiter">
        <i className="fab fa-twitter"></i>
      </a>
      <a
        className={`list-group-item
        ${active === "Home" ? "active" : ""}`}
        href="/tuiter/HomeScreen/home.html"
      >
        <i className="fa fa-home"></i>
        <span className="d-none d-xl-inline d-lg-none p-1"> Home</span>
      </a>
      <a
        className={`list-group-item
        ${active === "Explore" ? "active" : ""}`}
        href="/tuiter/ExploreScreen/explore.html"
      >
        <i className="fa fa-hashtag"></i>
        <span className="d-none d-xl-inline d-lg-none p-1"> Explore</span>
      </a>
      <a
        className={`list-group-item
        ${active === "Notifications" ? "active" : ""}`}
        href="/"
      >
        <i className="fa fa-bell"></i>
        <span className="d-none d-xl-inline d-lg-none p-1"> Notifications</span>
      </a>
      <a
        className={`list-group-item
        ${active === "Messages" ? "active" : ""}`}
        href="/"
      >
        <i className="fa fa-envelope"></i>
        <span className="d-none d-xl-inline d-lg-none p-1"> Messages</span>
      </a>
      <a
        className={`list-group-item
        ${active === "Bookmarks" ? "active" : ""}`}
        href="/"
      >
        <i className="fa fa-bookmark"></i>
        <span className="d-none d-xl-inline d-lg-none p-1"> Bookmarks</span>
      </a>
      <a
        className={`list-group-item
        ${active === "Lists" ? "active" : ""}`}
        href="/"
      >
        <i className="fa fa-list"></i>
        <span className="d-none d-xl-inline d-lg-none p-1"> Lists</span>
      </a>
      <a
        className={`list-group-item
        ${active === "Profile" ? "active" : ""}`}
        href="/"
      >
        <i className="fa fa-user"></i>
        <span className="d-none d-xl-inline d-lg-none p-1"> Profile</span>
      </a>
      <a
        className={`list-group-item
        ${active === "More" ? "active" : ""}`}
        href="/"
      >
        <i className="fas fa-circle"></i>
        <span className="d-none d-xl-inline d-lg-none p-1"> More</span>
      </a>
      <div className="d-grid mt-2">
        <a href="tweet.html" className="btn btn-primary btn-block rounded-pill">
          Tweet
        </a>
      </div>
    </div>
  );
};
export default NavigationSidebar;
