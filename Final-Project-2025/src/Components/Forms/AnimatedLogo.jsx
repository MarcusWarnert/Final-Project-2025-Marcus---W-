import React from 'react';
//I fiddled around with a logo with an animation on a separate file, but I should have just done that on this branch.  An AI helped me to do each different part since we didn't really learn much about animations.
export default function AnimatedLogo({ size = 200 }) {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      padding: '20px'
    }}>
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 200 200"
        style={{ overflow: 'visible' }}
      >
        <defs>
          <style>{`
            @keyframes draw {
              from {
                stroke-dashoffset: 1000;
                opacity: 1;
              }
              to {
                stroke-dashoffset: 0;
                opacity: 0.3;
              }
            }
            
            .drawing-path {
              stroke-dasharray: 1000;
              stroke-dashoffset: 1000;
              animation: draw 4s ease-in-out infinite;
              fill: none;
              stroke-width: 3;
              stroke-linecap: round;
              stroke-linejoin: round;
            }
            
            .triangle {
              stroke: #3498db;
            }
            
            .w-top {
              stroke: #e74c3c;
              animation-delay: 1.5s;
            }
            
            .w-bottom {
              stroke: #e74c3c;
              animation-delay: 2.5s;
            }
          `}</style>
        </defs>
        
        {/* Triangle outline */}
        <path 
          className="drawing-path triangle"
          d="M 100 20 L 180 140 L 20 140 Z"
          alt="Triangle outline of logo"
        />
        
        {/* Top W (normal) */}
        <path 
          className="drawing-path w-top"
          d="M 75 80 L 87.5 120 L 100 80 L 112.5 120 L 125 80"
          alt="Top W letter"
        />
        
        {/* Bottom W (upside down) */}
        <path 
          className="drawing-path w-bottom"
          d="M 75 120 L 87.5 80 L 100 120 L 112.5 80 L 125 120"
          alt="Bottom inverted W letter"
        />
      </svg>
    </div>
  );
}