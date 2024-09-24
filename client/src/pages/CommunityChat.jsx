import MessageDisplay from "./MessageDisplay"
import Sidebar from "./Sidebar"



function CommunityChat() {

  return (
    <div className="main-wrapper flex h-[40rem] overflow-hidden bg-[#1F2023]">
        <Sidebar />
        <MessageDisplay />
    </div>
  )
}

export default CommunityChat;
