import React from 'react';
import { List } from './List';
import { useList } from '../../hooks/useList';
import {
  Grid
} from '@material-ui/core'
import { ItemMode } from '@productivity/interfaces'

export default {
  title: 'List',
  component: List,
};


export const ListStyled = () => {
  // items: itemType[]
  // handleChange: (name: string, value: boolean) => void
  const initialItems = [
    {
      name: 'item0',
      value: false,
      title: 'question 1',
      mode: ItemMode.display
    },
    {
      name: 'item1',
      value: false,
      title: 'question 2',
      description: 'question description',
      mode: ItemMode.display
    },
    {
      name: 'item2',
      value: false,
      title: 'question 3',
      mode: ItemMode.display
    },
    {
      name: 'item3',
      value: false,
      title: 'question 4',
      mode: ItemMode.display
    },
    {
      name: 'item4',
      value: false,
      title: 'question 5',
      description: "I'm baby prism affogato man bun subway tile vexillologist shaman. Readymade meggings kombucha, meditation you probably haven't heard of them cliche palo santo af kogi pop-up aesthetic plaid tumeric. Cliche fanny pack wolf, shaman twee vice hoodie coloring book. VHS food truck vegan butcher pop-up, woke synth leggings activated charcoal put a bird on it glossier health goth banjo sustainable blog. Tilde distillery adaptogen, blue bottle godard dreamcatcher jean shorts master cleanse.",
      mode: ItemMode.display
    }
  ]

  const { items, getListFunction } = useList(initialItems, 'testList')


  return (
    <Grid container>
      <Grid item xs={6}>
        <List items={items} getListFunction={getListFunction} />
      </Grid>

    </Grid>
  )
}
