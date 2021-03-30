import React from "react"
import {
  Grid,
  Typography
} from '@material-ui/core'
import { ItemMode } from '@productivity/interfaces'
import { ListFunctions } from '../../hooks/useList'

export interface ItemTextProps {
  name: string
  title: string
  value: boolean
  getListFunction: (fn: ListFunctions) => (...args: unknown[]) => void
  description?: string
}

export const ItemText = (props: ItemTextProps) => {
  const { name, title, description, getListFunction, value } = props

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="flex-start"
      onDoubleClick={() => {
        getListFunction(ListFunctions.handleModeChange)(name, ItemMode.edit)
      }}
    >
      <Grid item>
        <Typography style={{textDecorationLine: value ? "line-through" : "none"}}>{title}</Typography>
      </Grid>
      {description && <Grid item>
        <Typography style={{textDecorationLine: value ? "line-through" : "none"}}>{description}</Typography>
      </Grid> }
    </Grid>
  )
}
