import { getPosts } from "./actions/posts.js";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";

import memories from "../src/images/memories.png";
import { Grid, Grow } from "@mui/material";
import useStyles from "./styles.js";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch(getPosts());

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div>
      <Container maxWidth="lg">
        <AppBar position="static" sx={classes.appBar}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography sx={classes.heading} variant="h5" align="center">
              Memories
            </Typography>
            <img
              className={classes.image}
              src={memories}
              alt="memories"
              height={60}
            />
          </div>
        </AppBar>
        <Grow in>
          <Container>
            <Grid
              container
              justifyContent="space-between"
              alignItems="stretch"
              spacing={3}
            >
              <Grid item xs={12} sm={7}>
                <Posts />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </div>
  );
};

export default App;
