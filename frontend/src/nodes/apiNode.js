import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode, NodeField, NodeInput, NodeSelect } from './baseNode';

export const APINode = ({ id, data }) => {
  const [endpoint, setEndpoint] = useState(data?.endpoint || '/api/resource');
  const [method, setMethod] = useState(data?.method || 'GET');

  const handles = [
    { type: 'target', position: Position.Left, id: `${id}-request`, style: { top: '50%' } },
    { type: 'source', position: Position.Right, id: `${id}-response`, style: { top: '50%' } },
  ];

  return (
    <BaseNode title="API" accentColor="#f59e0b" handles={handles}>
      <NodeField label="Endpoint">
        <NodeInput type="text" value={endpoint} onChange={(event) => setEndpoint(event.target.value)} />
      </NodeField>
      <NodeField label="Method">
        <NodeSelect value={method} onChange={(event) => setMethod(event.target.value)}>
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="DELETE">DELETE</option>
        </NodeSelect>
      </NodeField>
    </BaseNode>
  );
};
