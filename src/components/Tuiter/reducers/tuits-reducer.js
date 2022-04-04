// import tuits from "../data/tuits.json";
import {
  // CREATE_TUIT,
  DELETE_TUIT,
  FIND_ALL_TUITS,
} from "../actions/tuits-actions";

const tuitsReducer = (state = [], action) => {
  switch (action.type) {
    case FIND_ALL_TUITS:
      console.log("Find All Tuits Reducer reached!");
      state = action.tuits;
      return action.tuits;

    // case CREATE_TUIT:
    //   return [...state, action.newTuit];

    case "create-tuit":
      const newTuit = {
        tuit: action.tuit,
        _id: new Date().getTime() + "",
        postedBy: {
          username: "ReactJS",
        },
        stats: {
          retuits: 111,
          likes: 222,
          replies: 333,
        },
      };
      return [newTuit, ...state];

    case DELETE_TUIT:
      return state.filter((tuit) => tuit._id !== action.tuit._id);

    case "like-tuit":
      return state.map((tuit) => {
        if (tuit._id === action.tuit._id) {
          if (tuit.liked === true) {
            tuit.liked = false;
            tuit.stats.likes--;
          } else {
            tuit.liked = true;
            tuit.stats.likes++;
          }
          return tuit;
        } else {
          return tuit;
        }
      });

    default:
      return state;
  }
};

export default tuitsReducer;
