export type post = {
  _id: string
  cover: string
  summary: string
  createdAt: string
  updatedAt: string
  title: string
  content: string
  author: {
    id:string
    username: string
  }
}

export type UserInfo = {
  username: string
  id: string
  iat: number
}

export type PostProps = {
  image: any
  summary: string
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

export type RedirectContextProviderProps = {
  children: React.ReactNode
}

export type RedirectContextType = {
  redirect: boolean
  setRedirect: React.Dispatch<React.SetStateAction<boolean>>
}