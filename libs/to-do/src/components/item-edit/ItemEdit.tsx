import React from "react"
import {
  Grid,
  TextField
} from '@material-ui/core'
import { ItemMode } from '@productivity/interfaces'
import { ListFunctions } from '../../hooks/useList'

export interface ItemTextProps {
  name: string
  title: string
  getListFunction: (fn: ListFunctions) => (...args: unknown[]) => void
  description?: string
}

const staticText = {
  title: 'Title',
  description: 'Description'
}

export const ItemEdit = (props: ItemTextProps) => {
  const { name, getListFunction, title, description } = props


  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="flex-start"
    >
      <Grid item style={{width: '100%'}}>
        <TextField
          id={name+'EditTitle'}
          defaultValue={title}
          label={staticText.title}
          variant="outlined"
          size="small"
          fullWidth
          onChange={(event) => {
            getListFunction(ListFunctions.handleItemChange)(name, event.target.value, description)
          }}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === 'Escape') {
              getListFunction(ListFunctions.handleModeChange)(name, ItemMode.display)
              event.preventDefault()
              event.stopPropagation()
            }
          }}
        />
      </Grid>
      <Grid item style={{width: '100%', paddingTop: 8}}>
        <TextField
          id={name+'EditTitle'}
          label={staticText.description}
          defaultValue={description}
          multiline
          size="small"
          rows={2}
          variant="outlined"
          fullWidth
          onChange={(event) => {
            getListFunction(ListFunctions.handleItemChange)(name, title, event.target.value)
          }}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === 'Escape') {
              getListFunction(ListFunctions.handleModeChange)(name, ItemMode.display)
              event.preventDefault()
              event.stopPropagation()
            }
          }}
        />
      </Grid>
    </Grid>
  )
}
