"use client";

import { useRouter } from "next/navigation";

const CourseNav = () => {
  const router = useRouter();
  const itemsList: Array<string> = [
    "cs31",
    "cs32",
    "cs33",
    "cs35l",
    "cs180",
    "cs111",
  ];

  return (
    <div className="blog-sidebar course-navitem">
      <h3>courses</h3>
      {itemsList.map((item) => (
        <>
          <li
            onClick={() => {
              router.push(`/courses/${item}`);
            }}
          >
            {item}
          </li>
        </>
      ))}
    </div>
  );
};

export default CourseNav;
