export type post = {
  id: number
  image: string
  author: string
  createdAt: string
  title: string
  content: string
}

export type UserInfo = {
  username: string
  id: string
  iat: number
}

export type PostProps = {
  image: any
  author: string
  createdAt: string
  title: string
  content: string
}

export type UserContextProviderProps = {
  children: React.ReactNode
}

export type UserContextType = {
  user: UserInfo | null
  setUser: React.Dispatch<React.SetStateAction<UserInfo | null>>
}