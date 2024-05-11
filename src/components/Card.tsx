import Image from "next/image";
import UserImage from "@/assets/image.png";
import { FaCloudDownloadAlt } from "react-icons/fa";

export function Card() {
  return (
    <div className="fixed left-20 top-20 p-3 max-w-72 mb-3 overflow-hidden minfo__sidebar bg-white dark:bg-nightBlack rounded-2xl">
      <div className="mx-4 mt-12 text-center user-info lg:mx-6">
        <a
          className="w-36 h-36 mb-2.5 block mx-auto border-[6px] border-platinum dark:border-[#2f2f2f] overflow-hidden rounded-full"
          href="/"
        >
          <Image
            src={UserImage}
            className="hidden dark:block w-full h-full rounded-full"
            alt="Brown Reddick"
          />
          {/*Image for Dark Version */}
          {/* <Image
            src={UserImage}
            className="hidden dark:block w-full h-full rounded-full"
            alt="Brown Reddick"
          /> */}
          {/*Image for Light Version */}
        </a>
        <h6 className="mb-1 text-lg font-semibold text-black dark:text-white name">
          Rodrigo Barros
        </h6>
        {/* <div className="leading-none cd-headline clip is-full-width">
          <h6
            className="text-sm cd-words-wrapper designation text-theme after:!bg-theme"
            style={{ width: "113.875px" }}
          >
            <b className="font-normal is-hidden">Web Developer</b>
            <b className="font-normal is-visible">Photographers</b>
            <b className="font-normal is-hidden">Web Designer</b>
          </h6>
        </div> */}
      </div>
      <div className="pt-6 mx-4 border-t lg:mx-6 user-meta-info md:mx-7 my-7 border-platinum dark:border-metalBlack">
        <ul className="space-y-3">
          <li className="flex text-sm">
            <span className="flex-1 font-medium text-black dark:text-white">
              Residência:
            </span>
            <span>Brazil</span>
          </li>
          <li className="flex text-sm">
            <span className="flex-1 font-medium text-black dark:text-white">
              Cidade:
            </span>
            <span>Teresina</span>
          </li>
          <li className="flex text-sm">
            <span className="flex-1 font-medium text-black dark:text-white">
              Anos:
            </span>
            <span>27</span>
          </li>
        </ul>
      </div>
      <div className="px-4 py-5 lg:py-6 lg:px-6 rounded-2xl md:px-8 bg-flashWhite dark:bg-metalBlack">
        <div className="text-sm font-medium text-black dark:text-white">
          Habilidades
        </div>
        <div className="flex items-center justify-between my-4 space-x-4 skills_circle">
          <div className="space-y-2 text-center progressCircle">
            <div className="relative w-12 h-12 circle" data-percent={90}>
              <canvas width={48} height={48} />
              <div className="absolute inset-0 text-[13px] font-medium label flex-center">
                90%
              </div>
            </div>
            <p className="text-[13px] font-normal dark:font-light text-black dark:text-white/90">
              HTML
            </p>
          </div>
          <div className="space-y-2 text-center progressCircle">
            <div className="relative w-12 h-12 circle" data-percent={80}>
              <canvas width={48} height={48} />
              <div className="absolute inset-0 text-[13px] font-medium label flex-center">
                80%
              </div>
            </div>
            <p className="text-[13px] font-normal dark:font-light text-black dark:text-white/90">
              CSS
            </p>
          </div>
          <div className="space-y-2 text-center progressCircle">
            <div className="relative w-12 h-12 circle" data-percent={80}>
              <canvas width={48} height={48} />
              <div className="absolute inset-0 text-[13px] font-medium label flex-center">
                80%
              </div>
            </div>
            <p className="text-[13px] font-normal dark:font-light text-black dark:text-white/90">
              JS
            </p>
          </div>
          <div className="space-y-2 text-center progressCircle">
            <div className="relative w-12 h-12 circle" data-percent={90}>
              <canvas width={48} height={48} />
              <div className="absolute inset-0 text-[13px] font-medium label flex-center">
                90%
              </div>
            </div>
            <p className="text-[13px] font-normal dark:font-light text-black dark:text-white/90">
              PHP
            </p>
          </div>
        </div>
        <div className="mt-6">
          <a
            href="mycv.pdf"
            download=""
            target="_blank"
            className="text-center text-sm border border-themeColor bg-themeColor flex items-center justify-center gap-2 text-white rounded-full py-3.5 transition duration-300 text-[15px] font-semibold hover:bg-themeHoverColor hover:border-themeHoverColor"
          >
            DOWNLOAD CV
            <span className="animate-bounce">
              <FaCloudDownloadAlt />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
