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

export const render = createRender(() => {
  return (
    <div style={{ position: "relative", height: "300px", width: "300px" }}>
      <ReactFlow nodes={nodes}>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
});
