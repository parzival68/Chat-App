import UseGetConversations from '../hooks/UseGetConversations.js';
import { Conversation } from './index.js';
import { getRandomEmoji } from '../utils/emojis.js'

const Conversations = () => {

  const { loading, conversations} = UseGetConversations()

  return (
    <div className="py-2 flex flex-col overflow-auto">
        {conversations.map((conversation, index) => 
          <Conversation 
            key={conversation._id}
            conversation={conversation}
            emoji={getRandomEmoji()}
            lastIdx={index === conversations.length - 1}
          />
        )}

        {loading ? <span className="loading loading-spinner"></span> : ""}
    </div>
  )
}

export default Conversations