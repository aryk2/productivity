import React, { ChangeEvent, MouseEvent } from 'react';
import {
  Grid,
  Checkbox,
  IconButton
} from '@material-ui/core'
import { ListFunctions } from '../../hooks/useList'
import { ItemText } from '../item-text/ItemText'
import { ItemEdit } from '../item-edit/ItemEdit'
import { ItemMode } from '@productivity/interfaces'
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CloseIcon from '@material-ui/icons/Close';

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

  const onRemove = (name: string) => {
    getListFunction(ListFunctions.removeItem)(name)
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
          icon={<RadioButtonUncheckedIcon />}
          checkedIcon={<RadioButtonCheckedIcon />}
        />
      </Grid>
      <Grid item xs={10}>
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
      <Grid item xs={1}>
        <Grid
          container
          direction="column-reverse"
          justify="flex-end"
          alignItems="flex-end"
        >
          <IconButton aria-label="delete" size="small" onClick={() => onRemove(name)}>
            <CloseIcon fontSize="small"/>
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  )
}
