import { Stack } from "@mui/material";
import React from "react";
import ChatItem from "../shared/ChatItem";

const ChatList = ({
  w = "100%",
  chats = [],
  chatId,
  onlineUsers = [],
  newMessagesAlert = [
    {
      chatId: "1",
      count: 0,
    },
  ],
  handleDeleteChat,
}) => {
  return (
    <div>
      <Stack width={w} direction={"column"}>
        {chats?.map((item, index) => {
          const { name, _id, sameSender, members } = item;
          const isOnline = members?.some((member) =>
            onlineUsers.includes(member._id)
          );
          return (
            <div>
              <ChatItem
                key={_id}
                isOnline={isOnline}
                name={name}
                _id={_id}
                index={index}
                sameSender={chatId === _id}
                handleDeleteChatOpen={handleDeleteChat}
              />
            </div>
          );
        })}
      </Stack>
    </div>
  );
};

export default ChatList;
