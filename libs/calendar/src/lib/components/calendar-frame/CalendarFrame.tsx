import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles, Theme } from "@material-ui/core/styles";
import { timeBlocks } from '../../hooks/useCalendarDay'

const useStyles = makeStyles((theme: Theme) => ({
  calendarContainer: {
    "border-style": 'solid',
    "border-width": 'thin',
    "overflow-y": 'scroll',
    "height": '100vh',
    "margin": 20
  },
  timeText: {
    "padding": 0,
    "height": 50,
    "paddingTop": 40,
    "paddingRight": 4
  }
}));

export interface CalendarFrameProps {
  children: React.ReactNode
  date?: unknown
}

export const CalendarFrame = (props: CalendarFrameProps) => {
  const classes = useStyles();

  return (
    <Grid className={classes.calendarContainer}>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
        xs={12}
      >
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="flex-end"
          style={{width: 50}}
        >
          {
            timeBlocks.filter((timeBlock) => !timeBlock.includes(':30')).map((timeBlock) =>
              <Grid item className={classes.timeText}>{timeBlock.replace(':00 ','')}</Grid>
            )
          }
        </Grid>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
          xs={10}
        >
          {props.children}
        </Grid>
      </Grid>
    </Grid>
  )
}
