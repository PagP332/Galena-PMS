import { createContext, useContext, useState, useEffect } from "react"
import { supabase } from "../api/client"
import { getUserRole } from "../api/user"
import Loading from "../components/Loading"

// SessionProvider is for the user session context, can be accessed anywhere within the the children of the whole app
// Used by declaring { session, setSession } = useSession()

const SessionContext = createContext(null)

export const SessionProvider = ({ children }) => {
  const [session, setSession] = useState(null)
  const [userRole, setUserRole] = useState(null)
  const [userID, setUserID] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_OUT") {
        setSession(null)
        setUserRole(null)
        setUserID(null)
      } else if (session) {
        setSession(session)
        setTimeout(() => {
          setUserID(session.user.id)
          // setUserRole(getUserRole(session.user.id))
          setLoading(false)
        }, 500)
      } else {
        setLoading(false)
      }
    })
    return () => {
      subscription.unsubscribe()
    }
  }, [])

  useEffect(() => {
    const fetchUserRole = async () => {
      setUserRole(await getUserRole(userID))
    }
    fetchUserRole()
  }, [userID])

  if (loading) {
    return <Loading /> // Show loading screen while initializing
  }

  return <SessionContext.Provider value={{ session, setSession, userID, setUserID, userRole, setUserRole }}>{children}</SessionContext.Provider>
}

export const useSession = () => {
  const context = useContext(SessionContext)
  if (!context) {
    throw new Error("useSession must be used within a SessionProvider")
  }
  return context
}
