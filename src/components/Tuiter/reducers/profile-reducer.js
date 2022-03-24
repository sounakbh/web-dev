const profileReducer = (
  state = {
    name: "Jose Annunziato",
    handle: "jannunzi",
    profilePicture: "../../../images/day68-happy-cat.png",
    bannerPicture: "../../../images/day8-printer.png",
    bio: "Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retuits and likes are not endorsements.",
    website: "youtube.com/webdevtv",
    location: "Boston, MA",
    dateOfBirth: "November 21, 1968",
    dateJoined: "April 2009",
    followingCount: 312,
    followersCount: 180,
    totalTweets: 5196,
  },
  action
) => {
  switch (action.type) {
    case "update-profile":
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};

export default profileReducer;
