import * as React from "react";
import { createRender, useModelState } from "@anywidget/react";

import {
  ReactFlow,
  Controls,
  Background,
  ReactFlowProvider,
  useReactFlow,
  useNodesState,
  useEdgesState,
  reconnectEdge,
  addEdge,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import "./intersecting_nodes.css";

const initialNodes = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Node A' },
    position: { x: 250, y: 0 },
  },
  {
    id: '2',
    data: { label: 'Node B' },
    position: { x: 100, y: 200 },
  },
  {
    id: '3',
    data: { label: 'Node C' },
    position: { x: 350, y: 200 },
  },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', label: 'reconnectable edge' },
];

const areArraysEqual = (arr1, arr2) => {
  if (!arr1 || !arr2) return false;
  if (arr1.length !== arr2.length) return false;
  const set1 = new Set(arr1);
  for (const elem of arr2) {
    if (!set1.has(elem)) return false;
  }
  return true;
};

const FlowComponent = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const [highlightedNodes, setHighlightedNodes] = useModelState("highlighted_nodes");

  // Initialize highlightedNodes if it's undefined
  React.useEffect(() => {
    if (highlightedNodes === undefined) {
      setHighlightedNodes([]);
    }
  }, [highlightedNodes, setHighlightedNodes]);

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
    [getIntersectingNodes, setNodes, highlightedNodes, setHighlightedNodes]
  );

  const edgeReconnectSuccessful = React.useRef(true);

  const onConnect = React.useCallback(
    (params) => setEdges((els) => addEdge(params, els)),
    [setEdges]
  );

  const onReconnectStart = React.useCallback(() => {
    edgeReconnectSuccessful.current = false;
  }, []);

  const onReconnect = React.useCallback(
    (oldEdge, newConnection) => {
      edgeReconnectSuccessful.current = true;
      setEdges((els) => reconnectEdge(oldEdge, newConnection, els));
    },
    [setEdges]
  );

  const onReconnectEnd = React.useCallback(
    (_, edge) => {
      if (!edgeReconnectSuccessful.current) {
        setEdges((eds) => eds.filter((e) => e.id !== edge.id));
      }
      edgeReconnectSuccessful.current = true;
    },
    [setEdges]
  );

  return (
    <div style={{ position: "relative", height: "500px", width: "600px" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeDrag={onNodeDrag}
        onConnect={onConnect}
        onReconnect={onReconnect}
        onReconnectStart={onReconnectStart}
        onReconnectEnd={onReconnectEnd}
        className="intersection-flow"
        minZoom={0.2}
        maxZoom={4}
        fitView
        selectNodesOnDrag={false}
        snapToGrid
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