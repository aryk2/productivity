import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles, Theme } from "@material-ui/core/styles";
import { timeBlocks } from '../../hooks/useCalendarDay'

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

export interface DayColumnProps {
  date?: unknown
}

export const DayColumn = (props: DayColumnProps) => {
  const classes = useStyles();

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
