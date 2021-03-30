export enum ItemMode {
  edit = 'Edit',
  display = 'Display'
}

export interface itemType {
  name: string
  value: boolean
  title: string
  mode: ItemMode
  description?: string
}
