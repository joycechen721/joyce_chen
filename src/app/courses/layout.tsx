import NavBar from "@/components/NavBar"

export default function CourseLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        <NavBar />
        {children}
      </section>
    )
  }