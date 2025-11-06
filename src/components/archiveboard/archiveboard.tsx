'use client'

import React, { useState, useCallback } from 'react';
import { motion } from "framer-motion";
import { 
  ReactFlow, 
  Background, 

  MiniMap,
  useNodesState, 
  useEdgesState,
  addEdge,
  Panel,

  Edge,
  Connection,

} from '@xyflow/react';
import '@xyflow/react/dist/style.css';


// Define types for node data
interface TextNodeData {
  text: string;
  title?: string;
  description?: string;
}

interface YoutubeNodeData {
  youtube_id: string;
  title?: string;
  description?: string;
}


interface ImageNodeData {
  url: string;
  alt: string;
  title?: string;
  description?: string;
}

// type NodeData = ImageNodeData;

// Custom node types
const TextNode = ({ data, id, hoveredNodeId, onNodeHover }: { 
  data: TextNodeData; 
  id: string;
  hoveredNodeId: string | null;
  onNodeHover: (nodeId: string | null) => void;
}) => {
  const isThisNodeHovered = hoveredNodeId === id;
  const isAnyOtherNodeHovered = hoveredNodeId !== null && hoveredNodeId !== id;
  
  return (
    <motion.div 
      className="relative"
      animate={{
        filter: isAnyOtherNodeHovered ? "blur(10px)" : "blur(0px)",
        scale: isThisNodeHovered ? 1.05 : 1,
        transition: {
          duration: 0.3,
          ease: "easeOut",
        },
      }}
      onMouseEnter={() => onNodeHover(id)}
      onMouseLeave={() => onNodeHover(null)}
    >
      <div className="bg-white p-6 rounded-lg shadow-md border-2 border-gray-200 min-w-[300px]">
        <div className="text-sm font-medium text-gray-800">{data.text}</div>
      </div>
      {data.title && (
        <div className="text-xs font-semibold text-gray-600 mt-2 text-left" style={{ background: 'none', border: 'none' }}>{data.title}</div>
      )}
      {data.description && (
        <div className="text-xs text-gray-500 mt-1 text-left" style={{ background: 'none', border: 'none' }}>{data.description}</div>
      )}
    </motion.div>
  );
};

const YoutubeNode = ({ data, id, hoveredNodeId, onNodeHover }: { 
  data: YoutubeNodeData; 
  id: string;
  hoveredNodeId: string | null;
  onNodeHover: (nodeId: string | null) => void;
}) => {
  const isThisNodeHovered = hoveredNodeId === id;
  const isAnyOtherNodeHovered = hoveredNodeId !== null && hoveredNodeId !== id;
  
  return (
    <motion.div 
      className="relative"
      animate={{
        filter: isAnyOtherNodeHovered ? "blur(10px)" : "blur(0px)",
        scale: isThisNodeHovered ? 1.05 : 1,
        transition: {
          duration: 0.3,
          ease: "easeOut",
        },
      }}
      onMouseEnter={() => onNodeHover(id)}
      onMouseLeave={() => onNodeHover(null)}
    >
      <div className="bg-white p-3 rounded-lg shadow-md border-2 border-red-200">
        <iframe
          width="420"
          height="236"
          src={`https://www.youtube.com/embed/${data.youtube_id}`}
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
          className="rounded"
        />
      </div>
      {data.title && (
        <div className="text-xs font-mono font-bold text-foreground mt-2 text-left" style={{ background: 'none', border: 'none' }}>{data.title}</div>
      )}
      {data.description && (
        <div className="text-xs text-muted-foreground mt-1 text-left" style={{ background: 'none', border: 'none' }}>{data.description}</div>
      )}
    </motion.div>
  );
};



const ImageNode = ({ data, id, hoveredNodeId, onNodeHover }: { 
  data: ImageNodeData; 
  id: string;
  hoveredNodeId: string | null;
  onNodeHover: (nodeId: string | null) => void;
}) => {
  const isThisNodeHovered = hoveredNodeId === id;
  const isAnyOtherNodeHovered = hoveredNodeId !== null && hoveredNodeId !== id;
  
  return (
    <motion.div 
      className="relative"
      style={{ outline: 'none', border: 'none', background: 'transparent' }}
      animate={{
        filter: isAnyOtherNodeHovered ? "blur(10px)" : "blur(0px)",
        scale: isThisNodeHovered ? 1.05 : 1,
        transition: {
          duration: 0.3,
          ease: "easeOut",
        },
      }}
      onMouseEnter={() => onNodeHover(id)}
      onMouseLeave={() => onNodeHover(null)}
    >
      <div className="rounded-2xl shadow-none overflow-hidden w-[200px] h-[200px]" style={{ outline: 'none', border: 'none', background: 'transparent' }}>
        <img 
          src={data.url} 
          alt={data.alt || "Inspiration image"} 
          className="rounded-md w-full h-full object-contain"
          style={{ outline: 'none', border: 'none', background: 'transparent' }}
        />
      </div>
      {data.title && (
        <div className="text-xs font-mono font-bold text-foreground mt-2 text-left" style={{ background: 'transparent', border: 'none' }}>{data.title}</div>
      )}
      {data.description && (
        <div className="text-xs text-muted-foreground mt-1 text-left" style={{ background: 'transparent', border: 'none' }}>{data.description}</div>
      )}
    </motion.div>
  );
};

// Node types configuration - will be created dynamically in component

// Initial nodes with sample content
const initialNodes = [
  {
    id: '4',
    type: 'imageNode',
    position: { x: 1800, y: 550 },
    data: { 
      url: 'https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/8d0f5c9c-3ff7-4af3-0a8a-1b3eaf385800/public',
      alt: 'tl;dr',
      title: 'tl;dr, 2022',
      description: 'Identity & Design System'
    }
  },
  {
    id: '5',
    type: 'imageNode',
    position: { x:10, y: 50 },
    data: { 
      url: 'https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/707c0488-494d-467a-6ba1-69e799a18400/public',
      alt: 'Cap That',
      title: 'Cap That, 2023',
      description: 'Product Design/Design System'
    }
  },
  {
    id: '6',
    type: 'imageNode',
    position: { x: 1200, y: 50 },
    data: { 
      url: 'https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/fb35b6da-d96b-41eb-1576-0f1f28c98000/public',
      alt: 'tl;dr, 2022',
      title: 'tl;dr, 2022',
      description: 'Identity & Design System'
    }
  },
  {
    id: '7',
    type: 'imageNode',
    position: { x: 2400, y: 550 },
    data: { 
      url: 'https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/e6364eb4-4987-472a-75b8-1a1ffe2d4000/public',
      alt: 'A Year of Minfulness, 2019',
      title: 'A Year of Minfulness, 2019',
      description: 'Illustration & Design'
    }
  },
  {
    id: '8',
    type: 'imageNode',
    position: { x: 3000, y: 500 },
    data: { 
      url: 'https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/f1be712d-f16a-40b6-9f9f-04b5a6e2ad00/public',
      alt: 'women in web3, 2022',
      title: 'women in web3, 2022',
      description: 'Identity'
    }
  },
  {
    id: '9',
    type: 'imageNode',
    position: { x: 2000, y: 10 },
    data: { 
      url: 'https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/e7bb7033-2cbc-49ea-bfcd-b068935b6b00/public',
      alt: 'Bison Trails, 2021',
      title: 'Bison Trails, 2021',
      description: 'Brand'
    }
  },
  {
    id: '10',
    type: 'imageNode',
    position: { x: 2800, y: 10 },
    data: { 
      url: 'https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/b94ad4be-2ddc-42c8-33d5-f1b8b38dac00/public',
      alt: 'Mochi, 2024',
      title: 'Mochi, 2024',
      description: 'Generative 3D sculture of my dog'
    }
  },
  {
    id: '11',
    type: 'imageNode',
    position: { x: 50, y: 500 },
    data: { 
      url: 'https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/dd306108-5582-43d8-e191-9d7575d4d100/public',
      alt: 'Petra Wallet, 2023',
      title: 'Petra Wallet, 2023',
      description: 'Design System & Illustration'
    }
  },
  {
    id: '12',
    type: 'imageNode',
    position: { x: 1900, y: 1350 },
    data: { 
      url: 'https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/77a54910-5b73-414a-cefb-b350e9d15000/public',
      alt: 'Google x Instrument, 2024',
      title: 'Google x Instrument, 2024',
      description: 'Results About You: Design System & Illustration'
    }
  },
  {
    id: '13',
    type: 'imageNode',
    position: { x: 500, y: 300 },
    data: { 
      url: 'https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/4d7751dd-164e-4f9a-723b-d53c95363200/public',
      alt: 'women in web3, 2022',
      title: 'women in web3, 2022',
      description: 'Identity'
    }
  },
  {
    id: '14',
    type: 'imageNode',
    position: { x: 2400, y: 2010 },
    data: { 
      url: 'https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/3d00277a-d32d-4c22-9b0d-3c92dc8c1700/public',
      alt: 'CAMP by Walmart, 2020',
      title: 'CAMP by Walmart, 2020',
      description: 'Design System & Illustration, with kneeon studios'
    }
  },
  {
    id: '15',
    type: 'imageNode',
    position: { x: 1600, y: 1000 },
    data: { 
      url: 'https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/1ea58c45-de3c-4feb-6139-ddd11db09300/public',
      alt: 'Coinbase Assistant, 2022',
      title: 'Coinbase Assistant, 2022',
      description: 'Identity & Illustration'
    }
  },
  {
    id: '16',
    type: 'imageNode',
    position: { x: 650, y: 600 },
    data: { 
      url: 'https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/e101f2c3-06a0-414d-73b3-14ea460bfe00/public',
      alt: 'women in web3, 2022',
      title: 'women in web3, 2022',
      description: 'Identity'
    }
  },
  {
    id: '17',
    type: 'imageNode',
    position: { x: 1200, y: 1400 },
    data: { 
      url: 'https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/b4b0471d-dc38-4127-3160-792de54c5000/public',
      alt: 'Mom & Me, 2016',
      title: 'Mom & Me , 2016',
      description: 'Illustration, Quarto Publications'
    }
  },
  {
    id: '18',
    type: 'imageNode',
    position: { x: 4100, y: 720 },
    data: { 
      url: 'https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/a2834eba-b87a-4359-2e36-786ef058d800/public',
      alt: 'Best in Music, 2017',
      title: 'Best in Music, 2017',
      description: 'Illustration'
    }
  },
  {
    id: '19',
    type: 'imageNode',
    position: { x: 3400, y: 0 },
    data: { 
      url: 'https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/0604679a-ef98-4a34-05a1-4d0ba719a600/public',
      alt: 'Love Wild, 2016',
      title: 'Love Wild, 2016',
      description: 'Mural, Brooklyn, NY'
    }
  },
  {
    id: '20',
    type: 'imageNode',
    position: { x: 100, y: 1100 },
    data: { 
      url: 'https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/1fa55ce8-fc01-4496-1cde-1d6a30966000/public',
      alt: 'Getaway, 2020',
      title: 'Getaway, 2020',
      description: 'Illustration, Artist in Residence'
    }
  },
  {
    id: '21',
    type: 'imageNode',
    position: { x: 1300, y:450 },
    data: { 
      url: 'https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/85903fed-1ab5-4a6f-cb20-419c18eb7700/public',
      alt: 'Oprah Magazine, 2020',
      title: 'Oprah Magazine, 2020',
      description: 'Illustration'
    }
  },
  {
    id: '22',
    type: 'imageNode',
    position: { x: 2400, y: 800 },
    data: { 
      url: 'https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/396f4a1a-7561-491e-c825-a84f1eb0cb00/public',
      alt: 'Mia Mia Beauty, 2016',
      title: 'Mia Mia Beauty, 2016',
      description: 'Illustration'
    }
  },
  {
    id: '23',
    type: 'imageNode',
    position: { x: 3600, y: 1000 },
    data: { 
      url: 'https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/53362d2f-a1cb-447f-aae6-d5659893e800/public',
      alt: 'All Are Welcome, 2021',
      title: 'All Are Welcome, 2021',
      description: 'Illustration, Amazon Publishing'
    }
  },
  {
    id: '24',
    type: 'imageNode',
    position: { x: 1000, y: 900 },
    data: { 
      url: 'https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/fbc8c430-bdea-4c16-8265-2df1013de800/public',
      alt: 'A Year of Mindfulness, 2019',
      title: 'A Year of Mindfulness, 2019',
      description: 'Illustration, Callisto Media'
    }
  },
  {
    id: '25',
    type: 'imageNode',
    position: { x: 2800, y: 900 },
    data: { 
      url: 'https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/894ae476-2a8c-4a9f-5c69-489431f55600/public',
      alt: 'tl;dr, 2022',
      title: 'tl;dr, 2022',
      description: 'Identity & Design System'
    }
  },
  {
    id: '26',
    type: 'imageNode',
    position: { x: 2400, y: 1200 },
    data: { 
      url: 'https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/5a937588-1bd9-46e5-235d-85b7b6a79a00/public',
      alt: 'Don\'t Quit Your Day Dream, 2015',
      title: 'Don\'t Quit Your Day Dream, 2015',
      description: 'Author & Illustration, Ulysses Press '
    }
  },
  {
    id: '27',
    type: 'imageNode',
    position: { x: 400, y: 1400 },
    data: { 
      url: 'https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/34abcca3-8502-4cc9-fd20-82374391e400/public',
      alt: 'CAMP by Walmart, 2020',
      title: 'CAMP by Walmart, 2020',
      description: 'Design System & Illustration'
    }
  },
  {
    id: '28',
    type: 'imageNode',
    position: { x: 3000, y: 1300 },
    data: { 
      url: 'https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/f448d3fc-33bf-4a9c-739f-c3375128fa00/public',
      alt: 'SuperHi, 2019',
      title: 'SuperHi, 2019',
      description: 'Design System & Illustration'
    }
  },
  {
    id: '29',
    type: 'imageNode',
    position: { x: 1500, y: 1700 },
    data: { 
      url: 'https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/d33960b4-0b0b-45d7-7a8d-658412400c00/public',
      alt: 'SuperHi, 2019',
      title: 'SuperHi, 2019',
      description: 'Design System & Illustration'
    }
  },
  {
    id: '30',
    type: 'imageNode',
    position: { x: 4000, y: 1600 },
    data: { 
      url: 'https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/7911729b-07c5-4413-ab2b-3e89917ed900/public',
      alt: 'The Knot, 2017',
      title: 'The Knot, 2017',
      description: 'Illustration'
    }
  },
  {
    id: '31',
    type: 'imageNode',
    position: { x: 700, y: 1650 },
    data: { 
      url: 'https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/e94add00-88fb-4ccc-0d45-c300b3b4d400/public',
      alt: 'The Knot, 2017',
      title: 'The Knot, 2017',
      description: 'Illustration'
    }
  },
  {
    id: '32',
    type: 'imageNode',
    position: { x: 700, y: 0 },
    data: { 
      url: 'https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/70bceb9e-a5d6-4349-7465-376c5a527700/public',
      alt: 'The Knot, 2017',
      title: 'The Knot, 2017',
      description: 'Illustration'
    }
  },
  {
    id: '33',
    type: 'imageNode',
    position: { x: 2800, y: 1700 },
    data: { 
      url: 'https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/17bb0af3-bbf4-4398-1b66-a77f17d9cb00/public',
      alt: 'Gallison, 2019',
      title: 'Gallison, 2019',
      description: 'Puzzle Illustration'
    }
  },
  {
    id: '34',
    type: 'imageNode',
    position: { x: 3700, y: 400 },
    data: { 
      url: 'https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/62ed2591-10b3-4d52-c3de-c2e2ce5bb600/public',
      alt: 'Gallison, 2019',
      title: 'Gallison, 2019',
      description: 'Puzzle Illustration'
    }
  }
];

const initialEdges: Edge[] = [];

function ArchiveBoard() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  // const [newImageUrl, setNewImageUrl] = useState('');
  // const [newImageAlt, setNewImageAlt] = useState('');
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);

  // Custom CSS to override ReactFlow borders and style controls
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .react-flow__node {
        outline: none !important;
        border: none !important;
        background: transparent !important;
      }
      .react-flow__node:hover {
        outline: none !important;
        border: none !important;
        background: transparent !important;
      }
      .react-flow__node.selected {
        outline: none !important;
        border: none !important;
        background: transparent !important;
      }
      .react-flow__node:focus {
        outline: none !important;
        border: none !important;
        background: transparent !important;
      }
      
      /* Style the zoom controls with background fill */
      .react-flow__controls {
        background: white !important;
        border-radius: 8px !important;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1) !important;
        border: 1px solid #e5e7eb !important;
      }
      
      .react-flow__controls button {
        background: white !important;
        border: 1px solid #e5e7eb !important;
        color: #374151 !important;
      }
      
      .react-flow__controls button:hover {
        background: #f9fafb !important;
        border-color: #d1d5db !important;
      }
      
      .react-flow__controls button:first-child {
        border-top-left-radius: 8px !important;
        border-bottom-left-radius: 8px !important;
      }
      
      .react-flow__controls button:last-child {
        border-top-right-radius: 8px !important;
        border-bottom-right-radius: 8px !important;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const onConnect = useCallback((params: Connection) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  // Helper function to generate random ID
  // const generateId = () => Math.random().toString(36).substr(2, 9);

  // Create node types with hover functionality
  const nodeTypes = React.useMemo(() => ({
    textNode: (props: any) => (
      <TextNode 
        {...props} 
        hoveredNodeId={hoveredNodeId}
        onNodeHover={setHoveredNodeId}
      />
    ),
    youtubeNode: (props: any) => (
      <YoutubeNode 
        {...props} 
        hoveredNodeId={hoveredNodeId}
        onNodeHover={setHoveredNodeId}
      />
    ),
    imageNode: (props: any) => (
      <ImageNode 
        {...props} 
        hoveredNodeId={hoveredNodeId}
        onNodeHover={setHoveredNodeId}
      />
    ),
  }), [hoveredNodeId]);



  // Add image node
  // const addImageNode = useCallback(() => {
  //   if (!newImageUrl.trim()) return;
  //   
  //   const newNode = {
  //     id: generateId(),
  //     type: 'imageNode',
  //     position: { x: Math.random() * 300, y: Math.random() * 300 },
  //     data: { 
  //       url: newImageUrl, 
  //       alt: newImageAlt || 'Image',
  //       title: 'Image',
  //       description: newImageAlt || 'Added image'
  //     }
  //   };
  //   
  //   setNodes((nds) => [...nds, newNode]);
  //   setNewImageUrl('');
  //   setNewImageAlt('');
  // }, [newImageUrl, newImageAlt, setNodes]);

  return (
    <div className="w-full h-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        className="bg-transparent"
      >
        <Background color="transparent" gap={20} size={1} />
        <Panel position="bottom-left">
          <div className="bg-white border border-gray-300 rounded-lg p-2" style={{ width: '200px', height: '120px' }}>
            <MiniMap 
              nodeColor="#6366f1"
              maskColor="rgba(0, 0, 0, 0.1)"
              className="w-full h-full"
              pannable
              zoomable
            />
          </div>
        </Panel>
      </ReactFlow>
    </div>
  );
}

export default ArchiveBoard;