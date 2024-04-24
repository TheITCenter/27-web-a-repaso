import { useContext, useEffect, useState } from "react" //Hooks de react
import { AuthContext } from "../context/AuthContext" //context /Provider
import { useSocket } from "../hooks/useSocket"; //custom hook

import '../styles/chat.scss' //Estilos

export const Chat = () => { //Donde empieza mi componente de React

  const [message, setMessage] = useState('') //Estado de mi mensaje
  const [messages, setMessages] = useState([]) //Estado de mis mensajes
  
  const { socket, online } = useSocket('http://localhost:8000')
  const { logout, user } = useContext(AuthContext)

  const handleSendMessage = (e) => {
    e.preventDefault()

    // socket.emit('nombre del evento que queremos emitir', {datos que queremos emitir})
    //emitiendo el evento send-message con los datos del mensaje
    socket.emit('send-message', {
      userName: user.username,
      user: socket.id,
      message
    })
    //Limpiando el mensaje
    setMessage('')
  }

  
  useEffect(()=>{
    socket.on('send-message-from-backend', (payload) => {
      setMessages( messages => [ ...messages, payload ])
    })
    return () => {
      socket.off('send-message')
    }
  }, [socket])


  return (
    <div className="chat-container">
      <div className="chat-container__header-section">
        <button onClick={logout} className="button is-primary">Logout</button>
        <h1 className="title is-2 has-text-info-dar mb-0 ">
          Chat
        </h1>
        <span> Status:  
          <span className={`ml-2 ${online? 'has-text-success':'has-text-danger'}`}> 
          {online ? 'Online':'Offline'} 
        </span>
        </span>
      </div>
      <div className="chat-container__body-section">
        <div className="message-outer-container">
          {
            messages.map( (message, index) => (
              <div 
                key={index} 
                className={`message ${message.userName == user.username ? 'align-right': 'align-left'}` }
              >
                <div className="message-header">
                  <span>{message.userName}</span>
                </div>
                <div className="message-body">
                  <span>{message.message}</span>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className="chat-container__message-section">
        <form className="field" onSubmit={handleSendMessage}>
          <div className="control is-flex">
            <input 
              className="input" 
              type="text" 
              placeholder="Escribe tu mensaje..." 
              value={message}
              onChange={ (e) => setMessage(e.target.value) }
            />
            <input
              type="submit" 
              className="button is-primary"
              value="Enviar"
            > 
            </input>
          </div>
        </form>
      </div>
      
    </div>
  )
}
