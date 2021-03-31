import { Grid } from '@material-ui/core';
import React from 'react';
import { CalendarFrame } from './CalendarFrame';
import { DayColumn } from '../day-column/DayColumn'

export default {
  title: 'CalendarFrame',
  component: CalendarFrame,
};


export const OneDayCalendarFrameStyled = () => {

  return (
    <Grid
      container
      style={{width: '100%'}}
    >
      <Grid item xs={2}>
        <CalendarFrame >
          <Grid item xs={12}>
            <DayColumn />
          </Grid>
        </CalendarFrame>
      </Grid>
    </Grid>
  )
}

export const FourDayCalendarFrameStyled = () => {

  return (
    <Grid
      container
      style={{width: '100%'}}
    >
      <Grid item xs={6}>
        <CalendarFrame >
          <Grid item xs={3}>
            <DayColumn />
          </Grid>
          <Grid item xs={3}>
            <DayColumn />
          </Grid>
          <Grid item xs={3}>
            <DayColumn />
          </Grid>
          <Grid item xs={3}>
            <DayColumn />
          </Grid>
        </CalendarFrame>
      </Grid>
    </Grid>
  )
}

export const SevenDayCalendarFrameStyled = () => {

  return (
    <Grid
      container
      style={{width: '100%'}}
    >
      <Grid item xs={12}>
        <CalendarFrame >
          <Grid item xs={1}>
            <DayColumn />
          </Grid>
          <Grid item xs={1}>
            <DayColumn />
          </Grid>
          <Grid item xs={1}>
            <DayColumn />
          </Grid>
          <Grid item xs={1}>
            <DayColumn />
          </Grid>
          <Grid item xs={1}>
            <DayColumn />
          </Grid>
          <Grid item xs={1}>
            <DayColumn />
          </Grid>
          <Grid item xs={1}>
            <DayColumn />
          </Grid>
        </CalendarFrame>
      </Grid>
    </Grid>
  )
}
