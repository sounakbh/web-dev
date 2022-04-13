import { useDispatch } from "react-redux";
import { updateTuit } from "../actions/tuits-actions";

const TuitStats = ({ tuit }) => {
  const dispatch = useDispatch();
  // const likeTuit = () => {
  //   dispatch({ type: "like-tuit", tuit });
  // };
  return (
    <>
      <span
        style={{ color: "#FAF9F6" }}
        onClick={() => {
          tuit.stats.likes += 1;
          return updateTuit(dispatch, tuit);
        }}
      >
        {tuit.liked && (
          <i className="fa fa-thumbs-up me-1" style={{ color: "red" }}></i>
        )}
        {(!tuit.liked || tuit.stats.likes === 0) && (
          <i className="fa fa-thumbs-up me-1"></i>
        )}
        {tuit.stats && tuit.stats.likes}
      </span>

      <span
        style={{ color: "#FAF9F6" }}
        onClick={() => {
          console.log("Update Tuit clicked!");
          tuit.stats.dislikes += 1;
          return updateTuit(dispatch, tuit);
        }}
      >
        {tuit.disliked && (
          <i className="fa fa-thumbs-down me-1" style={{ color: "red" }}></i>
        )}
        {(!tuit.disliked || tuit.stats.dislikes === 0) && (
          <i className="fa fa-thumbs-down me-1"></i>
        )}
        {tuit.stats && tuit.stats.dislikes}
      </span>
    </>
  );
};
export default TuitStats;
