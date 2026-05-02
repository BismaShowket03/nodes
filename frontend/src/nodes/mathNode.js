import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode, NodeField, NodeSelect } from './baseNode';

export const MathNode = ({ id, data }) => {
  const [operation, setOperation] = useState(data?.operation || 'add');

  const handles = [
    { type: 'target', position: Position.Left, id: `${id}-a`, style: { top: '35%' } },
    { type: 'target', position: Position.Left, id: `${id}-b`, style: { top: '70%' } },
    { type: 'source', position: Position.Right, id: `${id}-result`, style: { top: '50%' } },
  ];

  return (
    <BaseNode title="Math" accentColor="#ec4899" handles={handles}>
      <NodeField label="Operation">
        <NodeSelect value={operation} onChange={(event) => setOperation(event.target.value)}>
          <option value="add">Add (+)</option>
          <option value="subtract">Subtract (-)</option>
          <option value="multiply">Multiply (*)</option>
          <option value="divide">Divide (/)</option>
        </NodeSelect>
      </NodeField>
    </BaseNode>
  );
};
