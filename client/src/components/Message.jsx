import { useAuthContext } from "../context/AuthContext";

const Message = ({message}) => {
  const { authUser } = useAuthContext();
  // console.log("message", message);
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe ? authUser.profilePic : "https://img.freepik.com/free-vector/graident-ai-robot-vectorart_78370-4114.jpg?t=st=1723395278~exp=1723398878~hmac=de0e0c9226b09258da0b278081196e80eb44ad9dd00f3c919b43f37665e8fc58&w=740";

  const bubbleBgColor = fromMe ? "bg-blue-500" : "bg-purple-500";

  const shakeClass = message.shouldShake ? "shake" : "";

    return (
      <div className={`chat ${chatClassName}`}>
        <div className='chat-image avatar'>
          <div className='w-10 rounded-full'>
            <img alt='Tailwind CSS chat bubble component' src={profilePic} />
          </div>
        </div>
        <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}>{message.message}</div>
      </div>
    );
};
export default Message;