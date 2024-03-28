'use client'

import { createContext, useContext, useState } from "react"


const AppContext = createContext<any>(undefined)

export default function ContextWrapper({children}:{ children: React.ReactNode }) {
  const [searchVal, setSearchVal] = useState<string>("")

  return (
    <AppContext.Provider value={{searchVal,setSearchVal}}>
      {children}
    </AppContext.Provider>
  )
}


export function useAppContext() {
  return useContext(AppContext)
}