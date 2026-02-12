export interface User {
  id: string,
  name: string,
  group_id: string
}

export interface LocalSettings {
  user?: string,
  password?: string,
  knownUserIds?: string[]
}