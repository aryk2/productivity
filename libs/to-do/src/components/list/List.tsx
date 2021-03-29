import React from 'react';

export interface ListProps {
  items: unknown[] // Add type item, should be item[]
  handleChange: (name: string, value: boolean) => void
  disabled?: boolean
}

export const List = (props: ListProps) => {


  return (
    null
  )
}
