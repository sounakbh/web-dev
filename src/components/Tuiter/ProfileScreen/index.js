import React from "react";
import { useSelector } from "react-redux";
const ProfileScreen = () => {
  const profile = useSelector((state) => state.profile);
  return (
    <div>
      <h1>Profile</h1>
      <div className="row">
        <div
          className="col-1"
          style={{ display: "flex", alignItems: "center", fontSize: "30px" }}
        >
          &#8592;
        </div>
        <div className="col-11">
          <h5>
            <b>{profile.firstName + " " + profile.lastName}</b>
          </h5>

          <span>{profile.totalTweets} Tweets</span>
        </div>
      </div>
      <div className="row" style={{ position: "relative" }}>
        {/* Cover photo */}
        <img
          src={profile.bannerPicture}
          style={{ height: "250px", objectFit: "cover" }}
        />
        {/* Profile Photo */}
        <img
          src={profile.profilePicture}
          alt=""
          style={{
            width: "150px",
            borderRadius: "50%",
            objectFit: "cover",
            position: "absolute",
            bottom: -55,
            left: 20,
          }}
        />
      </div>
      <div className="mt-2" style={{ boder: "1px solid red" }}>
        <button
          type="button"
          class="btn btn-block btn-outline-dark rounded-pill"
          style={{ float: "right" }}
        >
          <b>Edit Profile</b>
        </button>
      </div>
      <div className="row" style={{ marginTop: "60px" }}>
        <h5>
          <b>{profile.firstName + " " + profile.lastName}</b>
        </h5>
        <span>@{profile.handle}</span> <br /> <br />
        <span style={{ color: "white" }}>{profile.bio}</span>
        <br /> <br />
        <span>
          <i class="fa fa-map-marker" aria-hidden="true"></i> {profile.location}{" "}
          &nbsp; &nbsp; &nbsp; &nbsp;
          <i class="fa fa-birthday-cake" aria-hidden="true"></i>{" "}
          {profile.dateOfBirth}
          &nbsp; &nbsp; &nbsp; &nbsp;
          <i class="fa fa-calendar-check-o" aria-hidden="true"></i>{" "}
          {profile.dateJoined}
        </span>
        <span>
          <b className="btn-light">{profile.followingCount}</b> &nbsp;Following
          &nbsp; &nbsp; <b className="btn-light">{profile.followersCount}</b>{" "}
          &nbsp;Followers{" "}
        </span>
      </div>
      {/* <div className="row">{profile.bio}</div> */}
    </div>
  );
};
export default ProfileScreen;
