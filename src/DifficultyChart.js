import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { getDifficultyParams } from "./difficulty";
import { Typography, TextField, Button } from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  title: {
    padding: theme.spacing.unit * 2,
    paddingLeft: 0
  },
  subtitle: {
    padding: theme.spacing.unit * 1,
    paddingLeft: 0
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  button: {
    margin: theme.spacing.unit
  }
});

export default withStyles(styles)(
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        indexOffset: 0,
        xLength: 20
      };
    }

    handleOffsetChange = e => {
      const indexOffset = e.currentTarget.value;

      this.setState({
        ...this.state,
        indexOffset
      });
    };

    handleXLengthChange = e => {
      const xLength = e.currentTarget.value;

      this.setState({
        ...this.state,
        xLength
      });
    };

    handleStepClick = () =>
      this.setState({
        ...this.state,
        indexOffset: parseInt(this.state.indexOffset, 10) + 1
      });

    render() {
      const offset = this.state.indexOffset
        ? parseInt(this.state.indexOffset, 10)
        : 0;

      const data = Array.from({ length: this.state.xLength })
        .fill(0)
        .map((z, i) => [
          //X -> block index
          i + 1 + offset,
          //Y -> difficulty
          getDifficultyParams(i + 1 + offset).difficulty
        ]);

      const options = {
        title: {
          text: ""
        },
        yAxis: {
          title: {
            text: "Difficulty"
          }
        },
        series: [
          {
            data: data,
            name: "Difficulty @ block index"
          }
        ],
        chart: {
          zoomType: "x"
        }
      };

      const classes = this.props.classes;
      return (
        <div>
          <Typography className={classes.title} variant="title">
            Naivecoin Difficulty Chart
          </Typography>
          <HighchartsReact options={options} highcharts={Highcharts} />
          <Typography className={classes.subtitle} variant="subtitle">
            Options
          </Typography>
          <TextField
            label="Index Offset"
            className={classes.textField}
            onChange={this.handleOffsetChange}
            value={this.state.indexOffset}
          />
          <TextField
            label="X Axis Length"
            className={classes.textField}
            onChange={this.handleXLengthChange}
            value={this.state.xLength}
          />
          <br />
          <Button
            onClick={this.handleStepClick}
            variant="contained"
            className={classes.button}
          >
            Step
          </Button>
        </div>
      );
    }
  }
);
