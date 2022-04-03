import React, { useEffect } from "react";
// import tuits from "../data/tuits.json";
import { useDispatch, useSelector } from "react-redux";
import { findAllTuits, deleteTuit } from "../actions/tuits-actions";
import TuitListItem from "./tuit-list-item";

const TuitList = () => {
  const tuits = useSelector((state) => state.tuits);
  const dispatch = useDispatch();

  useEffect(() => findAllTuits(dispatch), []);

  return (
    <ul className="list-group">
      {console.log(tuits)}
      {tuits.map &&
        tuits.map((tuit) => (
          <TuitListItem key={tuit._id} tuit={tuit} deleteTuit={deleteTuit} />
        ))}
    </ul>
  );
};

export default TuitList;
