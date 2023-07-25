import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_KEY });
const databaseId : string | undefined = process.env.NOTION_DATABASE_ID;

interface AddPostReqBody {
  text: string;
}

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const body: AddPostReqBody = await req.json();
    const { text } = body;

    if (!text) {
      return NextResponse.json({ error: 'Text is required.' }, { status: 400 });
    }

    const response = await notion.pages.create({
      parent: { database_id: String(databaseId) },
      properties: {
        title: [
          {
            text: {
              content: text,
            },
          },
        ],
      },
    });

    console.log(response);
    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error: any) {
    console.error(error.body);
    return NextResponse.json({ error }, { status: error.statusCode || 500 });
  }
}