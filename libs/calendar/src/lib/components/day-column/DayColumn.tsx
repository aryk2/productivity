import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  dayColumn: {
    "border-style": 'solid',
    "border-width": 'thin',
    "width": '100%'
  },
  timeBlock: {
    "border-style": 'solid',
    "border-width": 'thin',
    "width": '100%',
    "padding": 0,
    "height": 25,
    "&:hover": {
      "background-color": "#ebebeb"
    },
  }
}));

export interface DayColumn {
  date?: unknown
}

export const DayColumn = (props: DayColumn) => {
  const classes = useStyles();

  const timeBlocks = [
    .5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12,
    12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18, 18.5, 19, 19.5, 20, 20.5, 21, 21.5, 22, 22.5, 23, 23.5, 24
  ]

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.dayColumn}
    >
      {
        timeBlocks.map((timeBlock) =>
          <Grid
            item
            className={classes.timeBlock}
            id={String(timeBlock)}
          />
        )
      }
    </Grid>
  )
}
