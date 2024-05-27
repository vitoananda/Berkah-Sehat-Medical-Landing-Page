import { useState, useEffect } from "react";
import type { ReactNode } from "react";

type ISectionProps = {
  title?: string;
  description?: string;
  yPadding?: string;
  fullWidth?: boolean;
  titleAlign?: "left" | "center" | "right";
  children: ReactNode;
};

const Section = (props: ISectionProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`${
        props.fullWidth ? "w-full" : "max-w-screen-md mx-auto"
      } ${props.yPadding ? props.yPadding : "py-5"} ${
        isMobile ? "px-4" : "px-0" // Use px-4 for smaller padding on mobile
      }`}
    >
      {(props.title || props.description) && (
        <div
          className={`mt-6 mb-5 text-${
            props.titleAlign ? props.titleAlign : "center"
          } sm:text-left`}
        >
          {props.title && (
            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-[#295A8D]">
              {props.title}
            </h2>
          )}
          {props.description && (
            <div className="mt-4 text-xl md:px-20">{props.description}</div>
          )}
        </div>
      )}

      {props.children}
    </div>
  );
};

export { Section };
