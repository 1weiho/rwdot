import * as React from 'react';
import './styles.css';

type RwdotProps = {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
};

const Rwdot = (Props: RwdotProps) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [screenWidth, setScreenWidth] = React.useState(0);
  const [breakpointPrefix, setBreakpointPrefix] = React.useState('xs');

  const position = Props.position || 'bottom-left';

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleHoverOut = () => {
    setIsHovered(false);
  };

  React.useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  React.useEffect(() => {
    if (screenWidth >= 1536) {
      setBreakpointPrefix('2xl');
    } else if (screenWidth >= 1280) {
      setBreakpointPrefix('xl');
    } else if (screenWidth >= 1024) {
      setBreakpointPrefix('lg');
    } else if (screenWidth >= 768) {
      setBreakpointPrefix('md');
    } else if (screenWidth >= 640) {
      setBreakpointPrefix('sm');
    } else {
      setBreakpointPrefix('xs');
    }
  }, [screenWidth]);

  return (
    <div
      className={`dot dot-${position}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverOut}
    >
      <div className="dot-info">
        <p>{breakpointPrefix}</p>
        {isHovered && <p>, width: {screenWidth}px</p>}
      </div>
    </div>
  );
};

export { Rwdot };
