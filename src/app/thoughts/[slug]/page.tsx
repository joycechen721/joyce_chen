"use client"
import React, { useState, useEffect } from "react";
import { renderMd } from "@/utils";

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    const fetchMarkdownContent = async () => {
      const data = await renderMd(slug);
      setHtmlContent(data.htmlContent)
    };
    if (slug) {
      fetchMarkdownContent();
    }
  }, [slug]);

  return <>
    <div className="blog-main">
      <h1>{slug}</h1>
      <div className="blog-body">
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>
    </div>
    <div className="blog-sidebar">
      <h3>contents</h3>
      <ul>
        {["siamese", "ragdoll", "bengal", "tabby", "scottish fold", "russian blue",].map((item) => (
          <li key={item} className="flower-item" >
            <a href={`/thoughts/cats/#${item}`}>
              {item}
            </a>
          </li>
        ))}
      </ul >
    </div >
  </>
}
