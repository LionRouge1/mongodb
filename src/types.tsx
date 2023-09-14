export type post = {
  _id: string
  cover: string
  summary: string
  createdAt: string
  updatedAt: string
  title: string
  content: string
  author: {
    _id:string
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
  currentUser: UserInfo | null
  setCurrentUser: React.Dispatch<React.SetStateAction<UserInfo | null>>
}

export type RedirectContextProviderProps = {
  children: React.ReactNode
}

export type RedirectContextType = {
  redirect: boolean
  setRedirect: React.Dispatch<React.SetStateAction<boolean>>
}

export type PostFormProps = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
  handleInputs: (e: any) => void
  postForm: {
    title: string
    summary: string
    image: string[]
    content: string
  }
  view?: string
}