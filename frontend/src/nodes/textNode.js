// textNode.js

import { useMemo, useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode, NodeField } from './baseNode';

const VARIABLE_PATTERN = /\{\{\s*([A-Za-z_$][A-Za-z0-9_$]*)\s*\}\}/g;

const getVariablesFromText = (text) => {
  const variableNames = [];
  const seen = new Set();

  for (const match of text.matchAll(VARIABLE_PATTERN)) {
    const variableName = match[1];
    if (!seen.has(variableName)) {
      seen.add(variableName);
      variableNames.push(variableName);
    }
  }

  return variableNames;
};

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  const variableNames = useMemo(() => getVariablesFromText(currText), [currText]);
  const lineCount = currText.split('\n').length;
  const maxLineLength = currText.split('\n').reduce((max, line) => Math.max(max, line.length), 0);
  const minWidth = Math.min(460, Math.max(240, 120 + maxLineLength * 6));
  const minHeight = Math.min(340, Math.max(120, 92 + lineCount * 22, 70 + variableNames.length * 26));

  const handles = [
    ...variableNames.map((variableName, index) => ({
      type: 'target',
      position: Position.Left,
      id: `${id}-var-${variableName}`,
      style: { top: `${((index + 1) / (variableNames.length + 1)) * 100}%` },
    })),
    { type: 'source', position: Position.Right, id: `${id}-output`, style: { top: '50%' } },
  ];

  return (
    <BaseNode title="Text" accentColor="#8b5cf6" handles={handles} minWidth={minWidth} minHeight={minHeight}>
      <NodeField label="Text">
        <textarea
          className="node-input node-textarea"
          value={currText}
          onChange={handleTextChange}
          rows={Math.min(12, Math.max(3, lineCount))}
          placeholder="Use {{variableName}} to create inputs"
        />
      </NodeField>
    </BaseNode>
  );
};
