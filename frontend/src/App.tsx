import {type ReactNode} from "react";
import {getMessage} from "./utils/http.ts";
import {useQuery } from "@tanstack/react-query";
import {Header } from './components/Header'
import MessageModal from "./components/messageModal"
import MessagesContent from "./components/messagesContent"

function App() {
  const {
    data:messages,
    isLoading,
    isError,
  } =useQuery({queryKey:['messages'], queryFn:getMessage});

  console.log(messages);

  let content:ReactNode;
  if(isLoading){
    content  = <p className="animate-pulse"> Loading ...</p>
  }
  if(isError) {
    content = <p className="text-red-500">Failed To fetch messages</p>
  }
  if(messages && messages.length > 0){
    content = <MessagesContent messages={messages} />
  }
  if(messages && messages.length ===0 ){
    content = <p className="opacity-50">There are no Messages to Display</p>
  }
  return (
    <main className = "font-inter container">
      <Header />
      {content}
      <MessageModal/>
    </main>
  );
}

export default App
