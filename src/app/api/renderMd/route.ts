import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { unified } from 'unified'
import remarkHtml from 'remark-html'
import remarkParse from 'remark-parse'
import path from 'path';
import fs from 'fs';

interface AddPostReqBody {
  slug: string;
}

const convertMarkdownToHtml = async (markdownContent: string): Promise<String> => {
  const file = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(markdownContent);
  return String(file);
}

// takes slug (category) and converts its corresponding md to html
export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const body: AddPostReqBody = await req.json();
    const slug = body;
    const postMD = `${slug}.md`
    let markdownContent = '';

    const markdownPath = path.join(process.cwd(), 'src', 'posts/', postMD);
    const defaultMarkdownPath = path.join(process.cwd(), 'src', 'posts/default.md');

    try {
      markdownContent = fs.readFileSync(markdownPath, 'utf-8');
    } catch (error) {
      markdownContent = fs.readFileSync(defaultMarkdownPath, 'utf-8');
    }

    const htmlContent = await convertMarkdownToHtml(markdownContent);

    return NextResponse.json({ success: true, htmlContent }, { status: 201 });
  } catch (error: any) {
    console.error("error: ", error);
    return NextResponse.json({ error }, { status: error.statusCode || 500 });
  }
}