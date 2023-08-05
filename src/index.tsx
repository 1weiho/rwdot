import * as React from "react";
import "./styles.css";

const Rwdot = () => {
    const [isHovered, setIsHovered] = React.useState(false);

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleHoverOut = () => {
        setIsHovered(false);
    };

    return (
        <div
            className="dot"
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverOut}
        >
            <div className="dot-xs">
                <div className="dot-info">
                    <p>xs</p>
                    {isHovered && <p>, width: {window.innerWidth}</p>}
                </div>
            </div>
            <div className="dot-sm">
                <div className="dot-info">
                    <p>sm</p>
                    {isHovered && <p>, width: {window.innerWidth}</p>}
                </div>
            </div>
            <div className="dot-md">
                <div className="dot-info">
                    <p>md</p>
                    {isHovered && <p>, width: {window.innerWidth}</p>}
                </div>
            </div>
            <div className="dot-lg">
                <div className="dot-info">
                    <p>lg</p>
                    {isHovered && <p>, width: {window.innerWidth}</p>}
                </div>
            </div>
            <div className="dot-xl">
                <div className="dot-info">
                    <p>xl</p>
                    {isHovered && <p>, width: {window.innerWidth}</p>}
                </div>
            </div>
            <div className="dot-2xl">
                <div className="dot-info">
                    <p>2xl</p>
                    {isHovered && <p>, width: {window.innerWidth}</p>}
                </div>
            </div>
        </div>
    );
};

export { Rwdot };
