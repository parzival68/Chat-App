import Message  from '../mongodb/models/message.model.js';
import Conversation from '../mongodb/models/conversation.model.js';
import { getReceiverSocketId, io } from '../socket/socket.js';


export const sendMessage = async(req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        })

        if(!conversation) {
             conversation = await Conversation.create({
                participants: [senderId, receiverId]
             })
        }

        const newMessage = new Message ({
            senderId,
            receiverId,
            message
        }) 

        if(newMessage) {
            conversation.messages.push(newMessage._id)

            // await conversation.save();
            // await newMessage.save(); // This two process will take time to run bcoz both runs one after the another

            await Promise.all([conversation.save(), newMessage.save()]) // but this will run parallel(both at same time)

            // SOCKET IO FUNCTIONALITY WILL GO HERE
            const receiverSocketId = getReceiverSocketId(receiverId)
            if(receiverSocketId) {

                // io.to(<socket_id>).emit() used to send events to specific client
                io.to(receiverSocketId).emit("newMessage", newMessage)
            }

            res.status(201).json(newMessage);
        } else {
            return res.status(400).json({error: 'Invalid message data'});
            
        }
    } catch (err) {
        console.error("Error in sendMessage controller:", err.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
} 

export const getMessages = async(req, res) => {
    try {
        const { id: userToChatId } = req.params;
        const senderId = req.user._id;
        
        const conversation = await Conversation.findOne({
            participants : { $all : [senderId, userToChatId] }
        }).populate("messages"); // Not reference but actual messaegs..  

        if(!conversation) return res.status(200).json([]);
        res.status(200).json(conversation.messages);

    } catch (err) {
        console.error("Error in getMessages controller:", err.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}