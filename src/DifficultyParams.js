import React, { Component } from "react";
import { getDifficultyParams } from "./difficulty";
import { Typography, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  title: {
    padding: theme.spacing.unit * 2,
    paddingLeft: 0
  }
});

export default withStyles(styles)(
  class extends Component {
    constructor(props) {
      super(props);
      let start = 1;
      this.state = { ...getDifficultyParams(start) };

      setInterval(
        () =>
          this.setState({
            ...getDifficultyParams(start++)
          }),
        400
      );
    }

    render() {
      const classes = this.props.classes;
      return (
        <div>
          <Typography variant="title" className={classes.title}>
            Difficulty Parameters
          </Typography>

          <Grid container spacing={24}>
            <Grid item xs={6}>
              <Typography>
                <strong>i:</strong> {this.state.i}
              </Typography>
              <Typography>
                <strong>step:</strong> {this.state.step}
              </Typography>
              <Typography>
                <strong>base:</strong> {this.state.base}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>
                <strong>poweredByPowCurve:</strong>{" "}
                {this.state.poweredByPowCurve}
              </Typography>
              <Typography>
                <strong>floor:</strong> {this.state.floor}
              </Typography>
              <Typography>
                <strong>difficulty:</strong> {this.state.difficulty}
              </Typography>{" "}
            </Grid>
          </Grid>
        </div>
      );
    }
  }
);
