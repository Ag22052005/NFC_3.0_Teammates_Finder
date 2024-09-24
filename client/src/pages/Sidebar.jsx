import useConversation from "../zustand/useConversation";
import Conversations from "./Conversations";
import Search from "./Search";

function Sidebar() {
  const {selectedConversation} = useConversation();
  return (
    <div className={`md:w-1/4  border-r border-slate-500 p-4 md:flex md:flex-col w-full h-full ${selectedConversation ? "hidden" : ""}`}>
      <Search />
      <Conversations />
    </div>
  )
}

export default Sidebar