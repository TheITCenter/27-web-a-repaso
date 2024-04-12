import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

export const Chat = () => {
  const { logout } = useContext(AuthContext)
  return (
    <div>
      <h1>
        Chat
      </h1>
      <button onClick={logout} className="button is-primary">Logout</button>
      </div>
  )
}
