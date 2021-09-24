import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { ThumbUp, ThumbDown, Delete } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { reactionAdded, movieDeleted } from "./moviesSlice";

export function SingleMovieCard({ movie }) {
  const { title, category, id, likes, dislikes } = movie;
  const x = 100 * id;
  const dispatch = useDispatch();
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        margin: "5px",
        flexDirection: "column",
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[x] }} aria-label="recipe">
            {id}
          </Avatar>
        }
        title={title}
        subheader={category}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="body2" color="text.secondary">
          {`This is a test description for movie ${title}`}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="likes movie"
          onClick={() =>
            dispatch(reactionAdded({ movieId: movie.id, reaction: "likes" }))
          }
        >
          <ThumbUp />
          {likes}
        </IconButton>
        <IconButton
          aria-label="dislikes movie"
          onClick={() =>
            dispatch(reactionAdded({ movieId: movie.id, reaction: "dislikes" }))
          }
        >
          <ThumbDown />
          {dislikes}
        </IconButton>
        <IconButton
          aria-label="delete movie"
          onClick={() => dispatch(movieDeleted({ movieId: movie.id }))}
        >
          <Delete />
        </IconButton>
      </CardActions>
    </Card>
  );
}
