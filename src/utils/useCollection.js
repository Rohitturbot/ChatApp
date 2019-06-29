import { useEffect, useState } from "react";
import { db } from "../firebase";

export default function useCollection(path, orderBy) {
  const [docs, setDocs] = useState([]);
  useEffect(() => {
    let collection = db.collection(path);
    orderBy && collection.orderBy(orderBy);
    return collection.onSnapshot(data => {
      const docs = [];
      data.forEach(doc => {
        docs.push({
          ...doc.data(),
          id: doc.id
        });
      });
      setDocs(docs);
    });
  });
  return docs;
}