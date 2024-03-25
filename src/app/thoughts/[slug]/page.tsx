import React from "react";
import MarkdownRenderer from "./md-renderer";
import fs from 'fs';
import path from 'path';

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const postMD = `${slug}.md`
  let markdownContent = '';

  const markdownPath = path.join(process.cwd(), 'src', 'posts/', postMD);
  const defaultMarkdownPath = path.join(process.cwd(), 'src', 'posts/default.md');

  try {
    markdownContent = fs.readFileSync(markdownPath, 'utf-8');
  } catch (error) {
    markdownContent = fs.readFileSync(defaultMarkdownPath, 'utf-8');
  }

  return <>
    <div className="blog-main">
      <h1>{slug}</h1>
      <div className="blog-body">
        <MarkdownRenderer markdownContent={markdownContent} />
      </div>
    </div>
    <div className="blog-sidebar">
      <h3>contents</h3>
      <ul>
        {["siamese", "ragdoll", "bengal", "tabby", "scottish fold", "russian blue", "ragdoll", "bengal", "tabby", "scottish fold", "russian blue"].map((item) => (
          <>
            <li className="flower-item">
              <a href={`/thoughts/cats/#${item}`}>
                {item}
              </a>
            </li>
          </>
        ))}
      </ul>
    </div>
  </>
}
