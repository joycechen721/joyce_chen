import React, { useState, useEffect } from "react";
import * as api from "@/utils";

const Postings = () => {

    const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.listPagesFromNotion().then((posts) => {
      setPosts(posts)
    });
  }, []);

  console.log(posts)

    return (
        <>
        
        </>
    )
}

export default Postings;