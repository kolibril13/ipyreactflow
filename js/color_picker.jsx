import * as React from "react";
import { createRender, useModelState } from "@anywidget/react";  // import useModelState
import { useCallback, useRef } from "react";
import {
  ReactFlow,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  reconnectEdge,
  addEdge,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import "./widget.css";

const initialNodes = [
  {
    id: "Color",
    type: "input",
    data: { label: "Color" },
    position: { x: 250, y: 0 },
  },
  {
    id: "blue",
    data: { label: "blue" },
    position: { x: 100, y: 200 },
  },
  {
    id: "green",
    data: { label: "green" },
    position: { x: 350, y: 200 },
  },
];

const initialEdges = [{ id: "e1-2", source: "Color", target: "blue" }];

const render = createRender(() => {
  const edgeReconnectSuccessful = useRef(true);
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [targetNode, setTargetNode] = useModelState("target_node"); 

  const onConnect = useCallback(
    (params) => setEdges((els) => addEdge(params, els)),
    []
  );

  const onReconnectStart = useCallback(() => {
    edgeReconnectSuccessful.current = false;
  }, []);

  const onReconnect = useCallback((oldEdge, newConnection) => {
    edgeReconnectSuccessful.current = true;
    setEdges((els) => reconnectEdge(oldEdge, newConnection, els));
  }, []);

  const onReconnectEnd = useCallback((_, edge) => {
    if (!edgeReconnectSuccessful.current) {
      setEdges((eds) => eds.filter((e) => e.id !== edge.id));
    }
    edgeReconnectSuccessful.current = true;
  }, []);

  React.useEffect(() => {
    if (edges.length > 0) {
      console.log("Target:", edges[0].target);
      setTargetNode(edges[0].target);
    }
  }, [edges]);

  return (
    <div style={{ position: "relative", height: "300px", width: "600px" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        snapToGrid
        onReconnect={onReconnect}
        onReconnectStart={onReconnectStart}
        onReconnectEnd={onReconnectEnd}
        onConnect={onConnect}
        fitView
        attributionPosition="top-right"
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
});

export default { render };