import * as React from "react";
import { createRender } from "@anywidget/react";

import {
  ReactFlow,
  Controls,
  Background,
  ReactFlowProvider,
  useReactFlow,
  useNodesState,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import "./intersecting_nodes.css";

const initialNodes = [
  {
    id: "1",
    data: { label: "Node 1" },
    position: { x: 0, y: 0 },
    style: {
      width: 200,
      height: 100,
    },
  },
  {
    id: "2",
    data: { label: "Node 2" },
    position: { x: 0, y: 150 },
  },
  {
    id: "3",
    data: { label: "Node 3" },
    position: { x: 250, y: 0 },
  },
  {
    id: "4",
    data: { label: "Node" },
    position: { x: 350, y: 150 },
    style: {
      width: 50,
      height: 50,
    },
  },
];


const FlowComponent = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const { getIntersectingNodes } = useReactFlow();

  const onNodeDrag = React.useCallback(
    (_, node) => {
      const intersections = getIntersectingNodes(node).map((n) => n.id);
      setNodes((nds) =>
        nds.map((n) => ({
          ...n,
          className: intersections.includes(n.id) ? "highlight" : "",
        }))
      );
    },
    [getIntersectingNodes, setNodes]
  );

  return (
    <div style={{ position: "relative", height: "300px", width: "600px" }}>
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        onNodeDrag={onNodeDrag}
        className="intersection-flow"
        minZoom={0.2}
        maxZoom={4}
        fitView
        selectNodesOnDrag={false}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

const render = createRender(() => {
  return (
    <ReactFlowProvider>
      <FlowComponent />
    </ReactFlowProvider>
  );
});

export default { render };