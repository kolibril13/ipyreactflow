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
    data: { label: "Node 4" },
    position: { x: 350, y: 150 },
    style: {
      width: 50,
      height: 50,
    },
  },
];

// Helper function to compare two arrays as sets
const areArraysEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  const set1 = new Set(arr1);
  for (const elem of arr2) {
    if (!set1.has(elem)) return false;
  }
  return true;
};

const FlowComponent = () => {
  // State for nodes
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);

  // State for highlighted nodes (stores node IDs)
  const [highlightedNodes, setHighlightedNodes] = React.useState([]);

  const { getIntersectingNodes } = useReactFlow();

  const onNodeDrag = React.useCallback(
    (_, node) => {
      // Retrieve intersecting nodes
      const intersectingNodes = getIntersectingNodes(node);

      // Extract the IDs of the intersecting nodes
      const intersectingIds = intersectingNodes.map((n) => n.id);

      // Check if the intersectingIds are different from current highlightedNodes
      if (!areArraysEqual(intersectingIds, highlightedNodes)) {
        // Update the highlightedNodes state
        setHighlightedNodes(intersectingIds);

        // Update node styles based on intersectingIds
        setNodes((nds) =>
          nds.map((n) => ({
            ...n,
            className: intersectingIds.includes(n.id) ? "highlight" : "",
          }))
        );

        // Log the highlighted node IDs (for debugging)
        console.log("Highlighted node IDs:", intersectingIds);
      }
    },
    [getIntersectingNodes, setNodes, highlightedNodes] // Dependencies
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