import React, { useEffect } from 'react';

const Loading = () => {

    const loaderStyle = {
        width: '48px',
        height: '48px',
        border: '5px solid #FFF',
        borderBottomColor: 'transparent',
        borderRadius: '50%',
        display: 'inline-block',
        boxSizing: 'border-box',
        animation: 'rotation 1s linear infinite',
    };

    useEffect(() => {
        // Dynamically inject keyframes into the document
        const styleSheet = document.styleSheets[0];
        const keyframes = `
          @keyframes rotation {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `;
        if (styleSheet) {
            styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
        }
    }, []);

    return (
        <div>
            <div style={loaderStyle}></div>  {/* Loader only, no text */}
        </div>
    );
};

export default Loading;
