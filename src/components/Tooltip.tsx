"use client";
import { ReactNode, useState } from "react";
import clsx from "clsx";

interface TooltipProps {
  text: string;
  children: ReactNode;
}

export default function Tooltip({ text, children }: TooltipProps) {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      <div
        className={clsx(
          "absolute bottom-full mb-2 w-max p-2 text-sm text-white bg-gray-800 rounded shadow-lg transition-opacity duration-300 transform -translate-x-1/2 left-1/2",
          { "opacity-100": visible, "opacity-0": !visible }
        )}
      >
        {text}
      </div>
    </div>
  );
}
