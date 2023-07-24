export default function CourseLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        <h1>Hello</h1>
        <nav></nav>
   
        {children}
      </section>
    )
  }