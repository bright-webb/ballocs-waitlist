import React from 'react';
import Image from 'next/image';
import Draggable, { DraggableEvent, DraggableData } from 'react-draggable';

const DraggableImages: React.FC = () => {
    const [cubePosition, setCubePosition] = React.useState({ x: 0, y: 160 });
    const [trianglePosition, setTrianglePosition] = React.useState({ x: 320, y: 144 });
    const [ribbonPosition, setRibbonPosition] = React.useState({ x: 496, y: 144 });

    const handleCubeDrag = (_: DraggableEvent, data: DraggableData) => {
    setCubePosition({ x: data.x, y: data.y });
    }
  return (
    <div>
      <Draggable position={cubePosition} onDrag={handleCubeDrag}>
        <div style={{ position: 'absolute', left: '1.5rem', top: '10rem', cursor: 'pointer' }}>
          <Image
            src="/cube.png"
            alt="cube"
            height={150}
            width={150}
            className="hidden sm:flex"
            style={{cursor: 'pointer'}}
          />
        </div>
      </Draggable>

      <Draggable>
        <div style={{ position: 'absolute', right: '2rem', top: '9rem', zIndex: -0.5 }}>
          <Image
            src="/triangle.png"
            alt="triangle"
            height={250}
            width={200}
            className="hidden sm:flex"
          />
        </div>
      </Draggable>

      <Draggable>
        <div style={{ position: 'absolute', right: '-4rem', bottom: '-6rem' }}>
          <Image
            src="/ribon.png"
            alt="ribon"
            height={250}
            width={300}
            className="hidden sm:flex"
          />
        </div>
      </Draggable>
    </div>
  );
};

export default DraggableImages;
