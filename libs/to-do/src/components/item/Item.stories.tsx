import React from 'react';
import { Item } from './Item';

export default {
  title: 'Item',
  component: Item,
};


export const ItemStyled = () => {

  const props = {
    name: 'testItem',
    title: 'title',
  }

  const [value, setValue] = React.useState(false);

  const handleChange = (name: string, value: boolean) => setValue(value)

  return (
    <Item {...props} value={value} handleChange={handleChange} />
  )
}

export const ItemWithDescriptionStyled = () => {
  const [value, setValue] = React.useState(false);

  const props = {
    name: 'testItem',
    title: 'title',
    description: 'description'
  }

  const handleChange = (name: string, value: boolean) => setValue(value)

  return (
    <Item {...props} value={value} handleChange={handleChange} />
  )
}

export const ItemDisabledStyled = () => {
  const [value, setValue] = React.useState(true);

  const props = {
    name: 'testItem',
    title: 'title',
    description: 'description',
    disabled: true
  }

  const handleChange = (name: string, value: boolean) => setValue(value)

  return (
    <Item {...props} value={value} handleChange={handleChange} />
  )
}
