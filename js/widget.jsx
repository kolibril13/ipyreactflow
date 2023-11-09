import * as React from "react";
import { createRender, useModelState } from "@anywidget/react";

import ReactFlow, { Controls, Background } from "reactflow";
import "reactflow/dist/style.css";

const nodes = [
  {
    id: "1",
    data: { label: "Hello" },
    position: { x: 0, y: 0 },
    type: "input",
  },
  {
    id: "2",
    data: { label: "World" },
    position: { x: 100, y: 100 },
  },
];

// Define the edge that connects the nodes
const edges = [
  { id: 'e1-2', source: '1', target: '2' },
];

export const render = createRender(() => {
  return (
    <div style={{ position: "relative", height: "300px", width: "600px" }}>
      <ReactFlow nodes={nodes} edges={edges}>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
});
