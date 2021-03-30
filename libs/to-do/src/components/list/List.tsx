import React from 'react';
import { Item } from '../item/Item'
import {
  Grid,
  Button
} from '@material-ui/core'
import { itemType } from '@productivity/interfaces'
import { ListFunctions } from '../../hooks/useList'

export interface ListProps {
  items: itemType[]
  getListFunction: (fn: ListFunctions) => (...args: unknown[]) => void
  disabled?: boolean
}

export const List = (props: ListProps) => {
  const { items, getListFunction, disabled } = props

  return (
    <Grid>
      <Grid>
        {items.map((item) => <Item {...item} getListFunction={getListFunction} disabled={disabled}/>)}
      </Grid>
      <Grid>
        <Button
          variant="contained"
          style={{width: '100%'}}
          onClick={() => {getListFunction(ListFunctions.addItem)()}}
        >
          +
        </Button>
      </Grid>
    </Grid>
  )
}
