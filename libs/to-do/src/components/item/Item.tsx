import React, { ChangeEvent } from 'react';
import {
  Grid,
  Checkbox,
  Typography
} from '@material-ui/core'

export interface ItemProps {
  value: boolean
  name: string
  handleChange: (name: string, value: boolean) => void
  title: string
  description?: string
  disabled?: boolean
}

export const Item = (props: ItemProps) => {
  const { value, name, handleChange, title, description, disabled } = props
  // do I need a useState to manage checked value / re-render
  const onChange = (event: ChangeEvent<HTMLInputElement>, checked: boolean) => {
    handleChange(event.target.name, checked)
  }

  return (
    <Grid
    container
    direction="row"
    justify="flex-start"
    alignItems="center"
    >
      <Grid item>
        <Checkbox
          checked={value}
          onChange={onChange}
          name={name}
          color="primary"
          disabled={disabled && disabled}
        />
      </Grid>
      <Grid item>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="flex-start"
        >
          <Grid item>
            <Typography>{title}</Typography>
          </Grid>
          {description && <Grid item>
            <Typography>{description}</Typography>
          </Grid> }
        </Grid>
      </Grid>
    </Grid>
  )
}
