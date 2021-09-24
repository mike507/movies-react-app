import React from "react";
import { useDispatch } from "react-redux";
import { reactionAdded, movieDeleted } from "./moviesSlice";

const reactionEmoji = {
  likes: "👍",
  dislikes: "👎",
  delete: "🗑️",
};

export const ReactionButtons = ({ movie }) => {
  const dispatch = useDispatch();

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    let handleClick;
    if (name === "delete")
      handleClick = () => dispatch(movieDeleted({ movieId: movie.id }));
    else
      handleClick = () =>
        dispatch(reactionAdded({ movieId: movie.id, reaction: name }));

    return (
      <button
        key={name}
        type="button"
        className="muted-button reaction-button"
        onClick={handleClick}
      >
        {emoji} {movie[name]}
      </button>
    );
  });

  return <>{reactionButtons}</>;
};
