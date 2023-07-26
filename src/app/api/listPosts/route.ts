import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_KEY });
const databaseId : string | undefined = process.env.NOTION_DATABASE_ID;

type PropertyFilter = {
    property: string,
    contains: string,
}

const filter : PropertyFilter = {
    "property": "Tags",
    "contains": "updates",
}

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const pageResponse = await notion.databases.query({
      database_id: String(databaseId),
    });
    const pages = pageResponse.results;
    const pageIds : any []= []
    const children : any []= []
    
    for (const page of pages) {
      pageIds.push(page.id);
      const pageChildren = await notion.blocks.children.list({
          block_id: page.id,
          page_size: 50,
      });
      children.push(pageChildren.results);
  }

    return NextResponse.json({ success: true, pageResponse}, { status: 201 });
  } catch (error: any) {
    console.error(error.body);
    return NextResponse.json({ error }, { status: error.statusCode || 500 });
  }
}