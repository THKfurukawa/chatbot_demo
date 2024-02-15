// import React from 'react';
import * as React from 'react';
import List from '@mui/material/List';
// import Chat from './Chat';
import {Chat} from './index';
import { styled } from '@mui/system';

const ChatList = styled(List)(({ theme }) => ({
    height: 400,
    padding: '0',
    overflow: 'auto',
}));

const Chats = (props) => {
    return (
        <ChatList id="scroll-area"　sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {props.chats.map((chat, index) => {
                return <Chat text={chat.text} type={chat.type} key={index.toString()} />
            })}
        </ChatList>
    )
}

export default Chats