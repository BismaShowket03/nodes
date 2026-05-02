import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode, NodeField, NodeInput } from './baseNode';

export const DelayNode = ({ id, data }) => {
  const [milliseconds, setMilliseconds] = useState(data?.milliseconds || '500');

  const handles = [
    { type: 'target', position: Position.Left, id: `${id}-input`, style: { top: '50%' } },
    { type: 'source', position: Position.Right, id: `${id}-output`, style: { top: '50%' } },
  ];

  return (
    <BaseNode title="Delay" accentColor="#6366f1" handles={handles}>
      <NodeField label="Milliseconds">
        <NodeInput
          type="number"
          min="0"
          value={milliseconds}
          onChange={(event) => setMilliseconds(event.target.value)}
        />
      </NodeField>
    </BaseNode>
  );
};
