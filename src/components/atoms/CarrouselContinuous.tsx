import Foto from "@/assets/image.png";
import Image from "next/image";

export function CarrouselContinuous() {
  const styleItemCarrousel =
    "inline-block w-[200px] h-[150px] mx-[10px] bg-[#ccc] leading-[150px] text-center";

  return (
    <div className="w-full overflow-x-hidden whitespace-nowrap max-w-[800px]">
      <div className="inline-block animate-[scroll_18s_linear_infinite]">
        <Image className={styleItemCarrousel} src={Foto} alt="Logo Empresa" />
        <Image className={styleItemCarrousel} src={Foto} alt="Logo Empresa" />
        <Image className={styleItemCarrousel} src={Foto} alt="Logo Empresa" />
        <Image className={styleItemCarrousel} src={Foto} alt="Logo Empresa" />
        <Image className={styleItemCarrousel} src={Foto} alt="Logo Empresa" />
        <Image className={styleItemCarrousel} src={Foto} alt="Logo Empresa" />
      </div>
    </div>
  );
}
