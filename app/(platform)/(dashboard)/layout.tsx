"use client"

import { Navbar } from "./_components/navbar";
import Chatbot from "@/app/(marketing)/_components/chatbot"; // Import your Chatbot component

const DashboardLayout = ({ 
  children
}: { 
  children: React.ReactNode;
}) => {
  return (
    <div className="h-full">
      <Navbar />
      {children}
      <Chatbot /> {/* Add your Chatbot component here */}
    </div>
  );
};

export default DashboardLayout;
