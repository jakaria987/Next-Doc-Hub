"use client"

import React, { useState } from "react";
import ChatBot from "react-simple-chatbot";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const steps = [
    {
        id: "Greet",
        message: "HI, Welcome to ProgNexus !",
        trigger: "Ask Name"
    },
    {
        id: "Ask Name",
        message: "Please enter your name...",
        trigger: "waiting1"
    },
    {
        id: "waiting1",
        user: true,
        trigger: "Name"
    },
    {
        id: "Name",
        message: "Hi {previousValue},In this website which language did you like the most?",
        trigger: "like"
    },
    {
        id: "like",
        options:[
            {value: "C++", label: "C++", trigger: "C++"},
            {value: "Ruby", label: "Ruby", trigger: "Ruby"},
            {value: "C", label: "C", trigger: "C"},
            {value: "Java", label: "Java", trigger: "Java"},
            {value: "JavaScript", label: "JavaScript", trigger: "JavaScript"},
            {value: "Python", label: "Python", trigger: "Python"},
        ],
    },
    {
        id:"C++",
        message: "Great ! Thanks for choosing C++ ",
        trigger: "issue"
    },
    {
        id:"issue",
        message: "What was your experience about C++?",
        trigger: "choice"
    },
    {
        id: "choice",
        options:[
            {value: "Good", label: "Good", trigger: "Good"},
            {value: "Bad", label: "Bad", trigger: "Bad"},
        ],
    },
    {
        id:"Good",
        message: "Thank you so much, have a nice day !",
        end: true
    },
    {
        id:"Bad",
        message: "Sorry for that, next time we will more conscious about that. Do you have any advice for that?",
        trigger: "waiting2"
    },
    {
        id: "waiting2",
        user: true,
        trigger: "advice"
    },
    {
        id:"advice",
        message: "Thank you so much for sharing your feedback",
        end: true
    },


    {
        id:"Ruby",
        message: "Great ! Thanks for choosing Ruby ",
        trigger: "issue"
    },
    {
        id:"issue",
        message: "What was your experience about Ruby?",
        trigger: "choice"
    },
    {
        id: "choice",
        options:[
            {value: "Good", label: "Good", trigger: "Good"},
            {value: "Bad", label: "Bad", trigger: "Bad"},
        ],
    },
    {
        id:"Good",
        message: "Thank you so much, have a nice day !",
        end: true
    },
    {
        id:"Bad",
        message: "Sorry for that, next time we will more conscious about that. Do you have any advice for that?",
        trigger: "waiting2"
    },
    {
        id: "waiting2",
        user: true,
        trigger: "advice"
    },
    {
        id:"advice",
        message: "Thank you so much for sharing your feedback",
        end: true
    },


    {
        id:"C",
        message: "Great ! Thanks for choosing C",
        trigger: "issue"
    },
    {
        id:"issue",
        message: "What was your experience about C?",
        trigger: "choice"
    },
    {
        id: "choice",
        options:[
            {value: "Good", label: "Good", trigger: "Good"},
            {value: "Bad", label: "Bad", trigger: "Bad"},
        ],
    },
    {
        id:"Good",
        message: "Thank you so much, have a nice day !",
        end: true
    },
    {
        id:"Bad",
        message: "Sorry for that, next time we will more conscious about that. Do you have any advice for that?",
        trigger: "waiting2"
    },
    {
        id: "waiting2",
        user: true,
        trigger: "advice"
    },
    {
        id:"advice",
        message: "Thank you so much for sharing your feedback",
        end: true
    },

    {
        id:"Java",
        message: "Great ! Thanks for choosing Java",
        trigger: "issue"
    },
    {
        id:"issue",
        message: "What was your experience about Java?",
        trigger: "choice"
    },
    {
        id: "choice",
        options:[
            {value: "Good", label: "Good", trigger: "Good"},
            {value: "Bad", label: "Bad", trigger: "Bad"},
        ],
    },
    {
        id:"Good",
        message: "Thank you so much, have a nice day !",
        end: true
    },
    {
        id:"Bad",
        message: "Sorry for that, next time we will more conscious about that. Do you have any advice for that?",
        trigger: "waiting2"
    },
    {
        id: "waiting2",
        user: true,
        trigger: "advice"
    },
    {
        id:"advice",
        message: "Thank you so much for sharing your feedback",
        end: true
    },


    {
        id:"JavaScript",
        message: "Great ! Thanks for choosing JavaScript",
        trigger: "issue"
    },
    {
        id:"issue",
        message: "What was your experience about JavaScript?",
        trigger: "choice"
    },
    {
        id: "choice",
        options:[
            {value: "Good", label: "Good", trigger: "Good"},
            {value: "Bad", label: "Bad", trigger: "Bad"},
        ],
    },
    {
        id:"Good",
        message: "Thank you so much, have a nice day !",
        end: true
    },
    {
        id:"Bad",
        message: "Sorry for that, next time we will more conscious about that. Do you have any advice for that?",
        trigger: "waiting2"
    },
    {
        id: "waiting2",
        user: true,
        trigger: "advice"
    },
    {
        id:"advice",
        message: "Thank you so much for sharing your feedback",
        end: true
    },


    {
        id:"Python",
        message: "Great ! Thanks for choosing Python ",
        trigger: "issue"
    },
    {
        id:"issue",
        message: "What was your experience about Python?",
        trigger: "choice"
    },
    {
        id: "choice",
        options:[
            {value: "Good", label: "Good", trigger: "Good"},
            {value: "Bad", label: "Bad", trigger: "Bad"},
        ],
    },
    {
        id:"Good",
        message: "Thank you so much, have a nice day !",
        end: true
    },
    {
        id:"Bad",
        message: "Sorry for that, next time we will more conscious about that. Do you have any advice for that?",
        trigger: "waiting2"
    },
    {
        id: "waiting2",
        user: true,
        trigger: "advice"
    },
    {
        id:"advice",
        message: "Thank you so much for sharing your feedback",
        end: true
    },  
  ];

  return (
    <>
      <div className="text-center mt-4 bg-slate-200 pt-7 pb-3">
        <button className="btn btn-outline btn-info mr-10 mb-3" onClick={toggleChatbot}>
          {isOpen ? "Close" : "Open"} Chatbox
        </button>
        {isOpen && (
          <div className="flex justify-center">
            <ChatBot
            steps={steps}
            opened={isOpen} 
          />
          </div>
        )}
      </div>
    </>
  );
};

export default Chatbot;






