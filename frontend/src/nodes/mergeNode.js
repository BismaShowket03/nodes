import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode, NodeField, NodeSelect } from './baseNode';

export const MergeNode = ({ id, data }) => {
  const [strategy, setStrategy] = useState(data?.strategy || 'concat');

  const handles = [
    { type: 'target', position: Position.Left, id: `${id}-first`, style: { top: '35%' } },
    { type: 'target', position: Position.Left, id: `${id}-second`, style: { top: '70%' } },
    { type: 'source', position: Position.Right, id: `${id}-merged`, style: { top: '50%' } },
  ];

  return (
    <BaseNode title="Merge" accentColor="#14b8a6" handles={handles}>
      <NodeField label="Strategy">
        <NodeSelect value={strategy} onChange={(event) => setStrategy(event.target.value)}>
          <option value="concat">Concatenate</option>
          <option value="firstWins">First Wins</option>
          <option value="secondWins">Second Wins</option>
        </NodeSelect>
      </NodeField>
    </BaseNode>
  );
};
