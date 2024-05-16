import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  nameCard: string;
  title: string;
  secondaryTitle: string;
  descriptionHighlight?: string;
  firstDescription: string;
  secondDescription?: string;
  children: ReactNode;
}

export function Card({
  icon,
  nameCard,
  title,
  secondaryTitle,
  descriptionHighlight,
  firstDescription,
  secondDescription,
  children,
}: Props) {
  return (
    <div
      data-scroll-index={4}
      id="resume"
      className="py-5 xl:py-3.5 max-w-content xl:max-2xl:max-w-50rem max-xl:mx-auto xl:ml-auto"
    >
      <div className="px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl service-section lg:p-10 2xl:p-13">
        <div className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-full">
          <span className="text-themeColor">{icon}</span>
          {nameCard}
        </div>
        <div className="mb-2 mt-7 md:my-10 section-title">
          <h2 className="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
            {title}{" "}
            <span className="font-semibold text-themeColor">
              {secondaryTitle}
            </span>
          </h2>
          <p className="max-w-xl mt-4 md:mt-6 subtitle">
            {firstDescription}{" "}
            <span className="font-medium text-black dark:text-white/90">
              {descriptionHighlight}
            </span>{" "}
            {secondDescription}
          </p>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
