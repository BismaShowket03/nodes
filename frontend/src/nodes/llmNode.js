// llmNode.js

import { Position } from 'reactflow';
import { BaseNode } from './baseNode';

export const LLMNode = ({ id, data }) => {
  const handles = [
    { type: 'target', position: Position.Left, id: `${id}-system`, style: { top: '35%' } },
    { type: 'target', position: Position.Left, id: `${id}-prompt`, style: { top: '70%' } },
    { type: 'source', position: Position.Right, id: `${id}-response`, style: { top: '50%' } },
  ];

  return (
    <BaseNode title="LLM" accentColor="#22c55e" handles={handles}>
      <span>This is a LLM.</span>
    </BaseNode>
  );
};
