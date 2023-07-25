import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_KEY });
const databaseId : string | undefined = process.env.NOTION_DATABASE_ID;

interface AddItemRequestBody {
  text: string;
}
// type Employee = {
//     id: number;
//     name: string;
//   };
type PropertyFilter = {
    property: string,
    contains: string,
}

// const { Client } = require('@notionhq/client');

// const notion = new Client({ auth: process.env.NOTION_API_KEY });

// (async () => {
//   const databaseId = '2f26ee68df304251aad48ddc420cba3d';
//   const response = await notion.databases.query({
//     database_id: databaseId,
//     filter: {
//       property: 'Last ordered',
//       date: {
//         past_week: {},
//       },
//     }
//   });
//   console.log(response);
// })();

const filter : PropertyFilter = {
    "property": "Tags",
    "contains": "updates",
}

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const response = await notion.databases.query({
      database_id: String(databaseId),
      filter: filter,
    //   filter: {
    //     tags: 'Last ordered',
    //     date: {
    //         past_week: {},
    //     }
    //   }
    });

    console.log(response);
    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error: any) {
    console.error(error.body);
    return NextResponse.json({ error }, { status: error.statusCode || 500 });
  }
}