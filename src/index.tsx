import React, { useState, useEffect } from 'react';
import { BreakpointPrefix, RwdotProps } from './types';
import './styles.css';

const useScreenSizeInfo = () => {
  const [screenWidth, setScreenWidth] = useState<number | null>(null);
  const [screenHeight, setScreenHeight] = useState<number | null>(null);
  const [breakpointPrefix, setBreakpointPrefix] =
    useState<BreakpointPrefix | null>(null);

  const getBreakpointPrefix = (width: number): BreakpointPrefix => {
    if (width >= 1536) {
      return '2xl';
    } else if (width >= 1280) {
      return 'xl';
    } else if (width >= 1024) {
      return 'lg';
    } else if (width >= 768) {
      return 'md';
    } else if (width >= 640) {
      return 'sm';
    } else {
      return 'xs';
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };

    // Get initial window width and set breakpointPrefix on first render
    handleResize();
    setBreakpointPrefix(getBreakpointPrefix(window.innerWidth));

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // Update breakpointPrefix when screenWidth changes
    setBreakpointPrefix(getBreakpointPrefix(screenWidth));
  }, [screenWidth]);

  return { breakpointPrefix, screenWidth, screenHeight };
};

const Rwdot = ({ position = 'bottom-left', showSize = false }: RwdotProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [dotFullMode, setDotFullMode] = useState<boolean>(false);
  const { breakpointPrefix, screenWidth, screenHeight } = useScreenSizeInfo();

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleHoverOut = () => {
    setIsHovered(false);
  };

  const handleDotClick = () => {
    setDotFullMode(!dotFullMode);
  };

  return (
    <div
      className={`dot dot-${position} ${
        (isHovered || showSize || dotFullMode) && `dot-full`
      } ${(showSize || dotFullMode) && `dot-full-mode`}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverOut}
      onClick={handleDotClick}
    >
      {breakpointPrefix !== null && (
        <div className="dot-info">
          <p>{breakpointPrefix}</p>
          {(isHovered || showSize || dotFullMode) && (
            <p>
              , {screenWidth} x {screenHeight}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export { Rwdot };
