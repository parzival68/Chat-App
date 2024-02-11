import { BsSend } from 'react-icons/bs'
import UseSendMessage from '../hooks/UseSendMessage'
import { useState } from 'react';

const MessageInput = () => {

  const [message, setMessage] = useState('');

  const { loading, sendMessage } = UseSendMessage()

  const handleSendMessage = async(e) => {
    e.preventDefault()
    if(!message) return;
    await sendMessage(message)
    setMessage('');
  }

  return (
    <form onSubmit={handleSendMessage} className="px-4 my-3">
        <div className="w-full relative">
            <input 
                type="text" 
                className="input input-bordered border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white focus:outline-blue-500"
                placeholder="Send a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={loading}
            />
            <button className="absolute inset-y-0 end-0 flex items-center pe-3" disabled={loading}>
              { loading ? <span className='loading loading-spinner'></span> : <BsSend className='w-5 h-5 hover:text-blue-500' /> }
            </button>
        </div>
    </form>
  )
}

export default MessageInput