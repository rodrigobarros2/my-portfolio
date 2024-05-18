import { Card } from "@/components/molecules/Card";
import { FaCheckDouble, FaHome, FaPaperPlane } from "react-icons/fa";
import { CarrouselContinuous } from "@/components/atoms/CarrouselContinuous";

export function CardAboutMe() {
  return (
    <Card
      icon={<FaHome />}
      nameCard="Introdução"
      title="I Craft The"
      secondaryTitle="Digital Landscape"
      firstDescription="Essa é a primeira descrição"
      descriptionHighlight="Essa é o texto em branco"
      secondDescription="Essa é depois do texto em branco"
    >
      <div className="text-content pt-7 lg:pt-8 max-lg:max-w-[30rem]">
        <ul className="flex items-center mt-4 -mx-3 lg:mt-5">
          <li className="flex items-center mx-3 text-regular">
            <FaCheckDouble />
            Disponível para trabalho
          </li>
          <li className="flex items-center mx-3 text-regular">
            <FaCheckDouble />
            Trabalho em tempo integral
          </li>
        </ul>
        <ul className="mt-7 buttons">
          <li data-scroll-nav={8}>
            <a
              href="#contact"
              className="btn-theme inline-flex items-center gap-2 bg-themeColor py-4 md:py-4.5 lg:px-9 px-7 rounded-full leading-none transition-all duration-300 hover:shadow-theme_shadow text-white font-medium text-[15px] md:text-base"
            >
              <FaPaperPlane />
              CONTRATE-ME
            </a>
          </li>
        </ul>
      </div>
      <CarrouselContinuous />
    </Card>
  );
}
