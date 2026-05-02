// inputNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode, NodeField, NodeInput, NodeSelect } from './baseNode';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data?.inputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  const handles = [{ type: 'source', position: Position.Right, id: `${id}-value` }];

  return (
    <BaseNode title="Input" accentColor="#0ea5e9" handles={handles}>
      <NodeField label="Name">
        <NodeInput type="text" value={currName} onChange={handleNameChange} />
      </NodeField>
      <NodeField label="Type">
        <NodeSelect value={inputType} onChange={handleTypeChange}>
          <option value="Text">Text</option>
          <option value="File">File</option>
        </NodeSelect>
      </NodeField>
    </BaseNode>
  );
};
