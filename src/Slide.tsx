import { type NodeProps } from "reactflow";
import { Remark } from "react-remark";

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

export function Slide({ data }: NodeProps<SlideData>) {
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
            <Remark>
              {source || ''}
            </Remark>
          </div>
        </div>
      )}
    </article>
  );
}
