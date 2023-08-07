import * as React from 'react';
import './styles.css';
import { BreakpointPrefix, RwdotProps } from './types';

const Rwdot = (Props: RwdotProps) => {
  const [isHovered, setIsHovered] = React.useState<boolean>(false);
  const [dotFullMode, setDotFullMode] = React.useState<boolean>(false);
  const [screenWidth, setScreenWidth] = React.useState<number | null>(null);
  const [screenHeight, setScreenHeight] = React.useState<number | null>(null);
  const [breakpointPrefix, setBreakpointPrefix] =
    React.useState<BreakpointPrefix | null>(null);

  const position = Props.position || 'bottom-left';

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleHoverOut = () => {
    setIsHovered(false);
  };

  const handleDotClick = () => {
    setDotFullMode(!dotFullMode);
  };

  React.useEffect(() => {
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

  React.useEffect(() => {
    // Update breakpointPrefix when screenWidth changes
    setBreakpointPrefix(getBreakpointPrefix(screenWidth));
  }, [screenWidth]);

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

  return (
    <div
      className={`dot dot-${position} ${
        isHovered || Props.showSize || dotFullMode ? `dot-full` : ``
      } ${Props.showSize || dotFullMode ? `dot-full-mode` : ``}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverOut}
      onClick={handleDotClick}
    >
      {breakpointPrefix !== null && (
        <div className="dot-info">
          <p>{breakpointPrefix}</p>
          {(isHovered || Props.showSize || dotFullMode) && (
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
