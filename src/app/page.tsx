import { Profile } from "@/components/organisms/Profile";
import { CardAboutMe } from "@/components/organisms/CardAboutMe";
import { Navbar } from "@/components/organisms/NavBar";

export default function Home() {
  return (
    <div className="mx-auto px-5 py-5">
      <Profile />
      <CardAboutMe />
      {/* <Navbar /> */}
    </div>
  );
}
