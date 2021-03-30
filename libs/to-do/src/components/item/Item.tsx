import React, { ChangeEvent } from 'react';
import {
  Grid,
  Checkbox
} from '@material-ui/core'
import { ListFunctions } from '../../hooks/useList'
import { ItemText } from '../item-text/ItemText'
import { ItemEdit } from '../item-edit/ItemEdit'
import { ItemMode } from '@productivity/interfaces'

export interface ItemProps {
  value: boolean
  name: string
  getListFunction: (fn: ListFunctions) => (...args: unknown[]) => void
  title: string
  mode: ItemMode
  description?: string
  disabled?: boolean
}

export const Item = (props: ItemProps) => {
  const { value, name, getListFunction, title, description, disabled, mode } = props
  const onChange = (event: ChangeEvent<HTMLInputElement>, checked: boolean) => {
    getListFunction(ListFunctions.handleChange)(event.target.name, checked)
  }

  const isDisabled = (disabled && disabled) || mode === ItemMode.edit

  return (
    <Grid
    container
    direction="row"
    justify="flex-start"
    alignItems="center"
    >
      <Grid item xs={1}>
        <Checkbox
          checked={value}
          onChange={onChange}
          name={name}
          color="primary"
          disabled={isDisabled}
        />
      </Grid>
      <Grid item xs={11}>
        {mode === ItemMode.display ?
          <ItemText
            name={name}
            title={title}
            description={description}
            getListFunction={getListFunction}
            value={value}
          />
        :
          <ItemEdit
            name={name}
            title={title}
            description={description}
            getListFunction={getListFunction}
          />
        }
      </Grid>
    </Grid>
  )
}
