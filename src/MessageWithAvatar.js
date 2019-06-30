import React, { useState, useEffect } from "react";
import { db } from "./firebase";

const cache = {};
const pendingCache = {};

function useDoc(path) {
  const [doc, setDoc] = useState(cache[path]);

  useEffect(() => {
    if (doc) {
      return;
    }
    let stillMounted = true;
    const pending = pendingCache[path];
    const promise = pending || (pendingCache[path] = db.doc(path).get());

    promise.then(doc => {
      if (stillMounted) {
        const user = {
          ...doc.data(),
          id: doc.id
        };
        setDoc(user);
        cache[path] = user;
      }
    });
    return () => {
      stillMounted = false;
    };
  }, [path, doc]);
  return doc;
}
export default function MessageWithAvatar({ message, showDay }) {
  const author = useDoc(message.user.path);
  return (
    <div key={message.id}>
      {showDay && (
        <div className="Day">
          <div className="DayLine" />
          <div className="DayText">29/06/2019</div>
          <div className="DayLine" />
        </div>
      )}
      <div className="Message with-avatar">
        <div
          className="Avatar"
          style={{
            background: author ? `url(${author.picture})` : ""
          }}
        />
        <div className="Author">
          <div>
            <span className="UserName"> {author && author.displayName}</span>{" "}
            <span className="TimeStamp">3:37 PM</span>
          </div>
          <div className="MessageContent">{message.text}</div>
        </div>
      </div>
    </div>
  );
}
