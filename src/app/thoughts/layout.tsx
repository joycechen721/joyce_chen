import NavBar2 from "@/components/NavBar2";

export default function CourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <NavBar2 />
      <div className="blog-wrapper">{children}</div>
    </section>
  );
}
