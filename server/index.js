import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from 'path';

import authRoutes from "./routes/auth.routes.js"; 
import messageRoutes from "./routes/message.routes.js"; 
import userRoutes from "./routes/user.routes.js";

import connect from "./mongodb/connect.js";
import { server, app } from './socket/socket.js'

const __dirname = path.resolve();
 
dotenv.config();
app.use(express.json());  // Used to extract data from req.body into JSON format (OR) to parse the incoming requests(req.body) with JSON payloads.
app.use(cookieParser());

const PORT = process.env.PORT || 8000;

// app.get('/', (req , res) => {
//     // res.json('hello world!');
//     res.send('hello world!');
// })

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

app.use(express.static(path.join(__dirname, '/client/dist')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'))
})

const port = ()  => {
    try{
        connect();
        server.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));
    } catch(err) {
        console.error(err);
    }
}

port()


// 00tfqEwjaSEgewLg