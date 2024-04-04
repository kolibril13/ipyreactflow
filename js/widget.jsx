import * as React from "react";
import { createRender, useModel } from "@anywidget/react";
import ReactFlow, { Controls, Background } from "reactflow";
import "reactflow/dist/style.css";



export const render = createRender(() => {
  const model = useModel();
  const [nodes, setNodes] = React.useState([
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
  ]);

  React.useEffect(() => {
    function handle_custom_msg(msg) {
      console.log(msg);
      setNodes([
        {
          id: "1",
          data: { label: "Hello" },
          position: { x: 0, y: 0 },
          type: "input",
        },
        {
          id: "2",
          data: { label: msg },
          position: { x: 200, y: 100 },
        },
      ]);
    }
    model.on("msg:custom", handle_custom_msg);
    return () => model.off("msg:custom", handle_custom_msg);
  }, [model]);

  const edges = [{ id: "e1-2", source: "1", target: "2" }];

  return (
    <div style={{ position: "relative", height: "300px", width: "600px" }}>
      <ReactFlow nodes={nodes} edges={edges}>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
});
