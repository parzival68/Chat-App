import { useEffect, useRef } from 'react';
import  useGetMessages from '../hooks/UseGetMessages.js'
import MessageSkeleton from './MessageSkeleton.jsx';
import { Message } from "./index.js";
import useListenMessages from '../hooks/UseListenMessages.js'

const Messages = () => {

  const { messages, loading } = useGetMessages();

  useListenMessages();

  const lastMessageRef = useRef(null);

  useEffect(() => {
    setTimeout(() =>{ lastMessageRef.current?.scrollIntoView({ behaviour: 'smooth' }), 100 })
  },[messages])
  
  return (
    <div className="px-4 flex-1 overflow-auto">

      {!loading && messages.length > 0 && messages.map(message =>
        <div key={message._id} ref={lastMessageRef}>
          <Message  message={message} />  
        </div>
      )}

      {loading && [...Array(5)].map((_, idx) => <MessageSkeleton key={idx} /> )}

      {!loading && messages.length == 0 && (
        <p className='text-center'>Send a message to start the conversation</p>
      )}

    </div>
  )
}

export default Messages