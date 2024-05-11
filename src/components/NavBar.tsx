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
} from "react-icons/fa";

const styledIcons = "size-8 hover:fill-themeHoverColor cursor-pointer text-white";

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
    <div className="fixed top-1/3	right-16">
      <ul className="flex gap-1 flex-col">
        {iconArray.map((value, index) => (
          <li key={index}>{value.icon}</li>
        ))}
      </ul>
    </div>
  );
}
