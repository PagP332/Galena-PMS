import { createContext, useContext, useState, useEffect } from "react"
import { supabase } from "../api/client"

const SessionContext = createContext(null)

export const SessionProvider = ({ children }) => {
  const [session, setSession] = useState(null)

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_OUT") {
        setSession(null)
      } else if (session) {
        setSession(session)
      }
    })
    return () => {
      subscription.unsubscribe()
    }
  }, [])

  return <SessionContext.Provider value={{ session, setSession }}>{children}</SessionContext.Provider>
}

export const useSession = () => {
  const context = useContext(SessionContext)
  if (!context) {
    throw new Error("useSession must be used within a SessionProvider")
  }
  return context
}
