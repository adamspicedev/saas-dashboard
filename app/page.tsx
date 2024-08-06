import Image from "next/image";
import LandingPage from "@/components/landing-page";
import Footer from "@/components/landing-page/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LandingPage />
      <Footer />
    </main>
  );
}
