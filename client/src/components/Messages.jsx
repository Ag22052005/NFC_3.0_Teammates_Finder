import { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessages from "../hooks/useGetBotMessages";

const Messages = ({messages,setMessages}) => {
  const { loading } = useGetMessages();
  const lastMessageRef = useRef();
  // console.log("messages",messages);

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-y-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message, index) => (
          // console.log("message from messages",message),
          <div key={index} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}

      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length === 0 && (
        <p className="text-center">Send a message to start the conversation</p>
      )}
    </div>
  );
};

export default Messages;

const MessageSkeleton = () => {
	return (
		<>
			<div className='flex gap-3 items-center'>
				<div className='skeleton w-10 h-10 rounded-full shrink-0'></div>
				<div className='flex flex-col gap-1'>
					<div className='skeleton h-4 w-40'></div>
					<div className='skeleton h-4 w-40'></div>
				</div>
			</div>
			<div className='flex gap-3 items-center justify-end'>
				<div className='flex flex-col gap-1'>
					<div className='skeleton h-4 w-40'></div>
				</div>
				<div className='skeleton w-10 h-10 rounded-full shrink-0'></div>
			</div>
		</>
	);
};