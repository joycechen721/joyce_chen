"use client"
import React, { useState, useEffect } from "react";
import { renderMd } from "@/utils";
import { useRouter } from "next/navigation";

export default function Page({ params }: { params: { slug: string } }) {
    const router = useRouter();
    const { slug } = params;
    const decodedSlug = decodeURIComponent(slug);

    const [htmlContent, setHtmlContent] = useState('');
    const [headings, setHeadings] = useState<string[]>([]);

    const itemsList: Array<string> = [
        "cs31",
        "cs32",
        "cs33",
        "cs35l",
        "cs180",
        "cs111",
    ];

    useEffect(() => {
        const fetchMarkdownContent = async () => {
            const data = await renderMd(decodedSlug);
            setHtmlContent(data.htmlContent);
            setHeadings(data.headings);
        }
        if (slug) {
            fetchMarkdownContent();
        }
    }, [slug, decodedSlug]);

    return <>
        <div className="blog-main">
            <h1>{decodedSlug}</h1>
            <div className="blog-body">
                <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
            </div>
        </div>
        <div className="blog-sidebar">
            <h3>courses</h3>
            <ul>
                {itemsList.map((item) => (
                    <li key={item} className="flower-item"
                        onClick={() => {
                            router.push(`/courses/${item}`);
                        }}>
                        {item}
                    </li>
                ))}
            </ul >
        </div >
    </>
}
