import React, { useState, useEffect } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import * as api from "@/utils";

type Post = {
  title: string;
  date: string;
  image: string;
  topics: string;
  content: string;
};

const dateObj: Date = new Date();
const options: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
};

const defaultData: Post[] = [
  {
    title: "on escapism and books.",
    content: "wow, i haven’t written down my thoughts in a while. this is gonna feel extremely awkward. bear with me, as my words will probably not make much sense and my sentences choppy; but hopefully i’ll be able to iterate my thoughts in a semi-understandable manner today.",
    date: dateObj.toLocaleString('en-US', options),
    image: "https://img.freepik.com/free-photo/red-white-cat-i-white-studio_155003-13189.jpg?w=2000",
    topics: "life thoughts, coding",
  },
  {
    title: "on escapism and books.",
    content: "wow, i haven’t written down my thoughts in a while. this is gonna feel extremely awkward. bear with me, as my words will probably not make much sense and my sentences choppy; but hopefully i’ll be able to iterate my thoughts in a semi-understandable manner today.",
    date: dateObj.toLocaleString('en-US', options),
    image: "https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg",
    topics: "life thoughts",
  },
];

const columnHelper = createColumnHelper<Post>();

const columns = [
  columnHelper.accessor("image", {
    header: () => "",
    cell: (info) => <img src={info.getValue()} style={{height: '120px'}} />
  }),
  columnHelper.accessor("title", {
    header: () => "title 📝",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("date", {
    header: () => "date 📅",
  }),
  columnHelper.accessor("topics", {
    header: "topics 💭",
  }),
  columnHelper.accessor("content", {
    header: "blah.blah.. 🖋️",
  }),
];

const PostTable = () => {
  const [data, setData] = useState([...defaultData])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
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
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PostTable;
