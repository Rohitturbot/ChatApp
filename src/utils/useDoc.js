import { useEffect, useState } from "react";
import { db } from "../firebase";

export default function useDoc(path) {
  const [doc, setDoc] = useState(null);
  useEffect(() => {
    return db.doc(path).onSnapshot(data => {
      setDoc({
        ...data.data(),
        id: data.id
      });
    });
  }, [path]);
  return doc;
}
