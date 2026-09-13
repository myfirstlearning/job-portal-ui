import { useState } from "react";

const Tooltip = ({ content, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <span
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}

      {isVisible && (
        <span
          role="tooltip"
          className="animate-scaleIn absolute bottom-full left-1/2 z-50 mb-3 w-64 max-w-[16rem] -translate-x-1/2 pointer-events-none"
        >
          <span className="relative block overflow-hidden rounded-xl border border-gray-700/50 bg-gray-900/95 px-4 py-3 shadow-xl backdrop-blur-sm">
            <span className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-purple-600/20"></span>
            <span className="relative z-10 block text-xs leading-relaxed text-gray-200">
              {content}
            </span>
          </span>
          <span className="absolute top-full left-1/2 -mt-1 h-2 w-2 -translate-x-1/2 rotate-45 border-r border-b border-gray-700/50 bg-gray-900/95 bg-gradient-to-r from-primary-600/20 to-purple-600/20 backdrop-blur-sm"></span>
        </span>
      )}
    </span>
  );
};

export { Tooltip };
export default Tooltip;
