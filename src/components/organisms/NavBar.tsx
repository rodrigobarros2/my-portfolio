import Image from "next/image";
import Logo from "@/assets/logo.svg";

import {
  FaBlog,
  FaBriefcase,
  FaFileAlt,
  FaGraduationCap,
  FaHome,
  FaRegUser,
  FaTasks,
  FaEnvelope,
  FaCommentAlt,
  FaShareAlt,
} from "react-icons/fa";

const styledIcons =
  "size-4 hover:fill-themeHoverColor cursor-pointer text-white";

const iconArray = [
  { icon: <FaHome className={styledIcons} /> },
  { icon: <FaRegUser className={styledIcons} /> },
  { icon: <FaBriefcase className={styledIcons} /> },
  { icon: <FaGraduationCap className={styledIcons} /> },
  { icon: <FaFileAlt className={styledIcons} /> },
  { icon: <FaTasks className={styledIcons} /> },
  { icon: <FaBlog className={styledIcons} /> },
  { icon: <FaCommentAlt className={styledIcons} /> },
  { icon: <FaEnvelope className={styledIcons} /> },
];

export function Navbar() {
  return (
    //<div className="fixed top-2/4 right-[3%] -translate-y-1/2">
    <div className="">
      <ul className="items-center	align- flex gap-6 flex-col rounded-full border-solid border-metalBlack lg:p-3 xl:p-6 border-2">
        <Image src={Logo} width={28} alt="logo" />
        {iconArray.map((value, index) => (
          <li key={index}>{value.icon}</li>
        ))}
        <FaShareAlt className={styledIcons} />
      </ul>
    </div>
  );
}
