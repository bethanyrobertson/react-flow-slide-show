import { type NodeProps, useReactFlow } from "reactflow";
import { Remark } from "react-remark";
import { useCallback } from "react";

export type SlideData = {
  source?: string;
  component?: React.ComponentType;
  left?: string;
  up?: string;
  down?: string;
  right?: string;
};

export const SLIDE_WIDTH = 1920;
export const SLIDE_HEIGHT = 1080;

// The padding constant is used when computing the presentation layout. It adds
// a bit of space between each slide
export const SLIDE_PADDING = 100;

const style = {
  width: `${SLIDE_WIDTH}px`,
  height: `${SLIDE_HEIGHT}px`,
} satisfies React.CSSProperties;

export function Slide({ data, id }: NodeProps<SlideData>) {
  const { source, component: Component } = data;

  return (
    <article 
      className="slide"
      style={{
        ...style,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {Component ? (
        <div style={{ 
          width: '100%', 
          height: '100%', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center' 
        }}>
          <Component />
        </div>
      ) : (
        <div style={{ 
          width: '100%', 
          height: '100%', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center' 
        }}>
          <div style={{ textAlign: 'center', maxWidth: '90%', maxHeight: '90%' }}>
            <Remark 
              components={{
                img: ({ src, alt, ...props }) => (
                  <img 
                    src={src} 
                    alt={alt} 
                    style={{ 
                      maxWidth: '100%', 
                      maxHeight: '80vh', 
                      objectFit: 'contain',
                      borderRadius: '8px',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                    }} 
                    {...props} 
                  />
                )
              }}
            >
              {source || ''}
            </Remark>
          </div>
        </div>
      )}
    </article>
  );
}
