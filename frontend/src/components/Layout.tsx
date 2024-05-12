import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </main>
  );
}
