import React, { useState } from "react";
import "fontsource-roboto";
import {
  Grid,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { Timer } from "@material-ui/icons";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  return (
    <div style={{ margin: "20px" }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography
            variant="h3"
            color="initial"
            align="center"
            style={{ margin: "8px" }}
          >
            React To-Do List
          </Typography>
        </Grid>

        <Grid item md={6} xs={12}>
          <TextField
            variant="outlined"
            label="Write Todo Here ..."
            value={text}
            onChange={(event) => setText(event.target.value)}
            size="small"
            style={{ margin: "8px" }}
          />
          <Button
            disabled={!text || list.includes(text)}
            variant="contained"
            color="primary"
            size="large"
            style={{ margin: "8px" }}
            onClick={(event) => setList([...list, text])}
          >
            Add To List
          </Button>
        </Grid>

        <Grid item md={6} xs={12}>
          <List>
            {list.map((todo) => {
              return (
                <ListItem key={todo}>
                  <ListItemIcon>
                    <Timer />
                  </ListItemIcon>
                  <ListItemText>{todo}</ListItemText>
                </ListItem>
              );
            })}
          </List>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
