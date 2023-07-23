import React, { ReactNode } from "react";

interface IGridBlock {
  children: ReactNode | ReactNode[];
  symbol?: string;
  title?: string;
}

const GridBlock = ({ children, symbol, title }: IGridBlock) => {
  return (
    <div className="relative p-8 pt-2 pb-6">
      <div className="absolute top-0 left-0 h-full w-full z-[-1]">
        <div className="absolute top-0 left-0 w-full border-t border-x h-[calc(100%-24px)] border-[var(--ifm-color-emphasis-200)]"></div>
        <div className="absolute bottom-0 left-0 w-[calc(100%-25px)] h-6 border-b border-l border-[var(--ifm-color-emphasis-200)]"></div>
        {/* SVG remains unchanged */}
      </div>
      {
        title && (
          <div className="text-center h-28 flex flex-col justify-between">
            {symbol && <p className="mb-2 text-xs font-bold">{symbol}</p>}
            <span className="grow text-2xl leading-[1.25] font-medium font-serif">{title}</span>
            <hr className="w-12 mx-auto mt-4" />
          </div>
        )
      }
      <div className="text-sm leading-[var(--ifm-line-height-base)] space-y-4">
        {children}
      </div>
    </div>
  )
}

export default GridBlock;