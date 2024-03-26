"use client"
import React, { useState, useEffect } from "react";
import { renderMd } from "@/utils";

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const decodedSlug = decodeURIComponent(slug);

  const [htmlContent, setHtmlContent] = useState('');
  const [headings, setHeadings] = useState<string[]>([]);

  useEffect(() => {
    const fetchMarkdownContent = async () => {
      const data = await renderMd(decodedSlug);
      setHtmlContent(data.htmlContent);
      setHeadings(data.headings);
    }
    if (slug) {
      fetchMarkdownContent();
    }
  }, [slug]);

  return <>
    <div className="blog-main">
      <h1>{decodedSlug}</h1>
      <div className="blog-body">
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>
    </div>
    <div className="blog-sidebar">
      <h3>contents</h3>
      <ul>
        {headings.map((item) => {
          const strippedItem = item.replace(/[ '"-]/g, '-').toLowerCase();
          return (
            <li key={item} className="flower-item" >
              <a href={`#${strippedItem}`}>
                {item}
              </a>
            </li>
          )
        })}
      </ul >
    </div >
  </>
}
