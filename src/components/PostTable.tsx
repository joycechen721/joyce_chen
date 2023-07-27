/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect, Fragment } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getExpandedRowModel,
  Row,
} from "@tanstack/react-table";
import * as api from "@/utils";

interface Topic {
  name: string;
  color: string;
}

type Post = {
  title: string;
  date: string;
  image: string;
  topics: Array<Topic>;
  content: string;
};

const dateObj: Date = new Date();
const options: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
};

const defaultData: Post[] = [
  {
    title: "on escapism and books.",
    content:
      "wow, i haven't written down my thoughts in a while. this is gonna feel extremely awkward. bear with me, as my words will probably not make much sense and my sentences choppy; but hopefully i'll be able to iterate my thoughts in a semi-understandable manner today.",
    date: dateObj.toLocaleString("en-US", options),
    image:
      "https://img.freepik.com/free-photo/red-white-cat-i-white-studio_155003-13189.jpg?w=2000",
    topics: [
      { name: "life thoughts", color: "lightgreen" },
      { name: "coding", color: "aqua" },
    ],
  },
  {
    title: "on escapism and books.",
    content:
      "wow, i haven't written down my thoughts in a while. this is gonna feel extremely awkward. bear with me, as my words will probably not make much sense and my sentences choppy; but hopefully i'll be able to iterate my thoughts in a semi-understandable manner today.",
    date: dateObj.toLocaleString("en-US", options),
    image:
      "https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg",
    topics: [
      { name: "life thoughts", color: "lightgreen" },
      { name: "coding", color: "aqua" },
      { name: "food", color: "lavender" },
    ],
  },
];

const columnHelper = createColumnHelper<Post>();

const columns = [
  columnHelper.accessor("title", {
    header: () => "title 📝",
    cell: ({ row, getValue }) => (
      <div>
        <em>{getValue<string>()}</em>
      </div>
    ),
  }),
  // columnHelper.accessor("image", {
  //   header: () => "",
  //   cell: (info) => <img src={info.getValue()} style={{ height: "120px" }} />,
  // }),
  // columnHelper.accessor("content", {
  //   header: "blah.blah.. 🖋️",
  //   cell: ({ row, getValue }) => {
  //     return (
  //       <div className="table-cell" onClick={() => {
  //         row.toggleExpanded()
  //         }}>
  //         {getValue<string>()}
  //       </div>
  //     );
  //   },
  // }),
  columnHelper.accessor("topics", {
    header: "topics 💭",
    cell: (info) => {
      const topics: Topic[] = info.getValue();
      return (
        <div className="topics-container">
          {topics.map((topic) => (
            <div
              key={topic.name}
              className="post-topic"
              style={{ backgroundColor: topic.color }}
            >
              {topic.name}
            </div>
          ))}
        </div>
      );
    },
  }),
  columnHelper.accessor("date", {
    header: () => "date 📅",
  }),
];

const postContent = ({ row }: { row: Row<Post> }) => {
  const content = JSON.stringify(row.original.content, null, 2);
  return (
    <div className="frame post-content">
      {content}
    </div>
  );
};

const PostTable = () => {
  const [data, setData] = useState([...defaultData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
  });

  useEffect(() => {
    // api.listPagesFromNotion().then((posts) => {
    //   setPosts(posts)
    // });
  }, []);

  return (
    <>
      <div className="p-2">
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => {
              return (
                <Fragment key={row.id}>
                  <tr
                    key={row.id}
                    onClick={() => {
                      row.toggleExpanded();
                    }}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                  {row.getIsExpanded() && (
                    <tr className="post-row">
                      <td colSpan={row.getVisibleCells().length}>
                        {postContent({ row })}
                      </td>
                    </tr>
                  )}
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PostTable;
