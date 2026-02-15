import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <div className="min-h-screen flex items-center justify-center">
      <p>Hello World</p>
    </div>
    </>
  );
}
