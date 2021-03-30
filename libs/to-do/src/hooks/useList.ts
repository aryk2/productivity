import { itemType, ItemMode } from '@productivity/interfaces'
import { useState } from 'react'

export enum ListFunctions {
  handleChange = 'handleChange',
  handleModeChange = 'handleModeChange',
  handleItemChange = 'handleItemChange',
  addItem = 'addItem',
  removeItem = 'removeItem',
}

export const useList = (initialItems: itemType[], listName: string) => {
  const [items, setItems] = useState<itemType[]>(initialItems)

  const getIndex = (name: string) => {
    return items.findIndex((item) => item.name === name)
  }

  const copyItems = (items: itemType[]) => {
    return items.map(item => ({...item}))
  }

  const moveItemToDone = (items: itemType[], index: number) => {
    const item = items.splice(index, 1)
    items.push(item[0])
    return items
  }

  const moveItemToInProgress = (items: itemType[], index: number) => {
    const item = items.splice(index, 1)
    const insertIndex = items.findIndex(item => item.value)
    items.splice(insertIndex === -1 ? items.length : insertIndex, 0, item[0])
    return items
  }

  const handleChange = (name: string, value: boolean) => {
    const newItems = copyItems(items)
    const index = getIndex(name)
    if (index !== -1) {
      newItems[index].value = value
      const reOrganizedItems = value ?
          moveItemToDone(newItems, index)
        :
          moveItemToInProgress(newItems, index)

      setItems(reOrganizedItems)
    }
  }

  const handleModeChange = (name: string, mode: ItemMode) => {
    const newItems = copyItems(items)
    const index = getIndex(name)
    if (index !== -1) {
      newItems[index].mode = mode
    }
    setItems(newItems)
  }

  const handleItemChange = (name: string, title: string, description: string) => {
    const newItems = copyItems(items)
    const index = getIndex(name)
    if (index !== -1) {
      newItems[index].title = title
      newItems[index].description = description
    }
    setItems(newItems)
  }

  const addItem = () => {
    const newItems = copyItems(items)
    newItems.push({
      name: listName+items.length,
      value: false,
      title: '',
      mode: ItemMode.edit
    })
    setItems(moveItemToInProgress(newItems, newItems.length-1))
  }

  const removeItem = (name: string) => {
    const newItems = copyItems(items)
    const index = getIndex(name)
    newItems.splice(index, 1)
    newItems.forEach((item, i) => item.name = listName+i)
    setItems(newItems)
  }

  const functions = {
    handleChange,
    handleModeChange,
    handleItemChange,
    addItem,
    removeItem,
  }

  const getListFunction = (fn: ListFunctions) => {
    return functions[fn]
  }

  return {
    items,
    getListFunction
  }
}
