import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import path from 'path';
import fs from 'fs';
import { remark } from "remark";
import showdown from 'showdown';

interface AddPostReqBody {
  slug: string;
}

type Node = {
  type: string,
  value: string,
}

const converter = new showdown.Converter({ tables: true, rawHeaderId: true, emoji: true });

// takes slug (category) and converts its corresponding md to html
export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const body: AddPostReqBody = await req.json();
    const { slug } = body;
    const postMD = `${slug}.md`
    let markdownContent = '';

    const markdownPath = path.join(process.cwd(), 'src', 'posts/', postMD);
    const defaultMarkdownPath = path.join(process.cwd(), 'src', 'posts/default.md');

    // read in markdown file
    try {
      markdownContent = fs.readFileSync(markdownPath, 'utf-8');
    } catch (error) {
      markdownContent = fs.readFileSync(defaultMarkdownPath, 'utf-8');
    }

    // convert to html
    const htmlContent = converter.makeHtml(markdownContent);

    // extract all headings
    const headings: any[] = [];
    const ast = remark.parse(markdownContent);
    ast.children.forEach((node) => {
      if (node.type === "heading" && node.depth === 3) {
        const headingObject: Node = node.children[0] as Node;
        headings.push(headingObject.value)
      }
    })

    return NextResponse.json({ success: true, htmlContent, headings }, { status: 200 });
  } catch (error: any) {
    console.error("error: ", error);
    return NextResponse.json({ error }, { status: error.statusCode || 500 });
  }
}