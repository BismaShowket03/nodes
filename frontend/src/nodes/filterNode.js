import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode, NodeField, NodeSelect } from './baseNode';

export const FilterNode = ({ id, data }) => {
  const [condition, setCondition] = useState(data?.condition || 'equals');

  const handles = [
    { type: 'target', position: Position.Left, id: `${id}-value`, style: { top: '35%' } },
    { type: 'target', position: Position.Left, id: `${id}-rule`, style: { top: '70%' } },
    { type: 'source', position: Position.Right, id: `${id}-pass`, style: { top: '35%' } },
    { type: 'source', position: Position.Right, id: `${id}-fail`, style: { top: '70%' } },
  ];

  return (
    <BaseNode title="Filter" accentColor="#0d9488" handles={handles}>
      <NodeField label="Condition">
        <NodeSelect value={condition} onChange={(event) => setCondition(event.target.value)}>
          <option value="equals">Equals</option>
          <option value="contains">Contains</option>
          <option value="greaterThan">Greater Than</option>
          <option value="lessThan">Less Than</option>
        </NodeSelect>
      </NodeField>
    </BaseNode>
  );
};
