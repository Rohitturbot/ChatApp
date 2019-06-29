import React, { useEffect, useState } from "react";
import { db } from "./firebase";

export default function Messages() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    return db.collection("channel/general/messages").onSnapshot(data => {
      const docs = [];
      data.forEach(doc => {
        docs.push({
          ...doc.data(),
          id: doc.id
        });
      });
      console.log("docs", docs);

      setMessages(docs);
    });
  }, []);
  return (
    <div className="Messages">
      <div className="EndOfMessages">That's every message!</div>

      {messages.map((message, index) => {
        return index === 0 ? (
          <div>
            <div className="Day">
              <div className="DayLine" />
              <div className="DayText">12/6/2018</div>
              <div className="DayLine" />
            </div>
            <div className="Message with-avatar">
              <div className="Avatar" />
              <div className="Author">
                <div>
                  <span className="UserName">Rohit Yadav </span>
                  <span className="TimeStamp">3:37 PM</span>
                </div>
                <div className="MessageContent">{message.text}</div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="Message no-avatar">
              <div className="MessageContent">{message.text}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
