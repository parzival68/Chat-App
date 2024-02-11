import jwt from 'jsonwebtoken';
import User from '../mongodb/models/user.model.js';

const protectRoute = async(req, res, next) => {
    try {
        const token = req.cookies.jwt;

        if (!token) {
            return res.status(401).json({ error: "Unauthorized - No Token Provided"});
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if(!decoded) {
            return res.status(401).json({ error: "Unauthorized - Invalid Token" })
        }

        const user = await User.findById(decoded.userId).select("-password"); 

        if(!user) {
            return res.status(404).json({ error: "User not found" })
        }

        req.user = user;

        next();  // It sends the process to the sendMessage method in message.routes.js
    } catch (err) {
        console.error("Error in protectRoute middleware:", err.message)
        res.status(400).json({ message: "Internal server error" })
    }
}

export default protectRoute