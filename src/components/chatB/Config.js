import { createChatBotMessage } from 'react-chatbot-kit';
import React from 'react';

const botName='NYAAY SAHHAYAK';
const Config = {
    initialMessages: [createChatBotMessage(`welcome to ${botName}`)],
    
    botName:botName,
    customStyles:{
        botMessageBox:{backgroundColor:'#5ccc9d',},
        chatButton:{backgroundColor:'#5ccc9d',},
        //Container:{backgroundColor:'#000000'}
        Bubbles:{backgroundColor:'#000000'},

    },
    
};

export default Config;