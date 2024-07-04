import { Stack } from '@mui/material'
import React from 'react'

    const ChatList = ({w = "100%" ,chats=[],chatId,onlineUsers=[],newMessagesAlert=[{
        chatId: "1",
        count: 0,
    }],handleDeleteChat}) => {
      return (
        <div>
            <Stack width={w} direction={"column"}>
                {
                    chats?.map((item,index) => {
                        return <div>{item}</div>
                    })
                }
            </Stack>
        </div>
      )
    }
    
    export default ChatList