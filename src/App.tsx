import { KeyboardEventHandler, useCallback, useState, useEffect, useRef } from "react";
import ReactFlow, { useReactFlow, NodeMouseHandler, Controls } from "reactflow";

import { Slide, SlideData } from "./Slide";
import { slides, slidesToElements } from "./slides";

const nodeTypes = {
  slide: Slide,
};

const initialSlide = "01";
const { nodes, edges } = slidesToElements(initialSlide, slides);

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(initialSlide);
  const { fitView } = useReactFlow();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Auto-focus the container on mount so arrow keys work immediately
    containerRef.current?.focus();
  }, []);

  useEffect(() => {
    // Add global keyboard listener to handle arrow keys even when child components prevent bubbling
    const handleGlobalKeyPress = (event: KeyboardEvent) => {
      // Don't interfere with typing in input fields or textareas
      const target = event.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
        return;
      }

      const slide = slides[currentSlide];

      switch (event.key) {
        case "ArrowLeft":
        case "ArrowUp":
        case "ArrowDown":
        case "ArrowRight": {
          const direction = event.key.slice(5).toLowerCase() as keyof Pick<SlideData, 'left' | 'up' | 'down' | 'right'>;
          const targetSlide = slide[direction];

          if (targetSlide) {
            event.preventDefault();
            event.stopPropagation();
            setCurrentSlide(targetSlide);
            fitView({ nodes: [{ id: targetSlide }], duration: 100 });
          }
        }
      }
    };

    // Use capture phase to get the event before child components
    window.addEventListener('keydown', handleGlobalKeyPress, true);
    return () => window.removeEventListener('keydown', handleGlobalKeyPress, true);
  }, [currentSlide, fitView]);

  const handleKeyPress = useCallback<KeyboardEventHandler>(
    (event) => {
      const slide = slides[currentSlide];

      switch (event.key) {
        case "ArrowLeft":
        case "ArrowUp":
        case "ArrowDown":
        case "ArrowRight": {
          const direction = event.key.slice(5).toLowerCase() as keyof Pick<SlideData, 'left' | 'up' | 'down' | 'right'>;
          const target = slide[direction];

          // Prevent the arrow keys from scrolling the page when React Flow is
          // only part of a larger application.
          event.preventDefault();

          if (target) {
            setCurrentSlide(target);
            fitView({ nodes: [{ id: target }], duration: 100 });
          }
        }
      }
    },
    [fitView, currentSlide],
  );

  const handleNodeClick = useCallback<NodeMouseHandler>(
    (_, node) => {
      if (node.id !== currentSlide) {
        setCurrentSlide(node.id);
        fitView({ nodes: [{ id: node.id }], duration: 100 });
      }
    },
    [fitView, currentSlide],
  );

  return (
    <div ref={containerRef} className="w-full h-screen outline-none" tabIndex={0} onKeyDown={handleKeyPress}>
      <ReactFlow
        nodes={nodes}
        nodeTypes={nodeTypes}
        nodesDraggable={false}
        panOnScroll
        zoomOnPinch
        zoomOnDoubleClick={false}
        panOnDrag={[1, 2]}
        edges={edges}
        fitView
        fitViewOptions={{ nodes: [{ id: initialSlide }], duration: 100 }}
        minZoom={0.1}
        maxZoom={1.5}
        onNodeClick={handleNodeClick}
      >
        <Controls showInteractive={false} />
      </ReactFlow>
    </div>
  );
}
