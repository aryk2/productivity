import { Grid } from '@material-ui/core';
import React from 'react';
import { DayColumn } from './DayColumn';

export default {
  title: 'DayColumn',
  component: DayColumn,
};


export const DayColumnStyled = () => {

  return (
    <Grid
      container
      style={{width: '100%'}}
    >
      <Grid item xs={2}>
        <DayColumn />
      </Grid>
    </Grid>
  )
}
