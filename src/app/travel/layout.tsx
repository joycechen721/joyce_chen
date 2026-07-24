import NavBar from "@/components/NavBar";

export default function TravelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <NavBar />
      <div>{children}</div>
    </section>
  );
}
