import Link from "next/link";
import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Chatbot from "../chatbot/page";
import { BotMessageSquare } from "lucide-react";

function ChatbotButton() {
  return (
    <div className=" justify-center items-center flex">
      <AlertDialog>
        <AlertDialogTrigger>
          <div className="p-5 bg-green-500 rounded-full text-white text-3xl">
            <BotMessageSquare size={100}/>
          </div>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <div className="flex justify-between">
            <AlertDialogTitle>Ask me anything !!</AlertDialogTitle>
            <AlertDialogCancel>Close</AlertDialogCancel>
            </div>
            <AlertDialogDescription>
              <Chatbot />
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default ChatbotButton;
