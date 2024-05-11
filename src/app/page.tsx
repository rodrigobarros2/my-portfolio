import Image from "next/image";
import Cloud from "@/assets/cloud.svg";
import { Card } from "@/components/Card";
import { Banner } from "@/components/Banner";
import { Navbar } from "@/components/NavBar";

export default function Home() {
  return (
    <div className="mx-auto mt-20">
      <Card />
      <Banner />
      <Navbar />
    </div>
  );
}
