// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
  return (
    <section className="panel toolbar-panel">
      <div className="panel-title-row">
        <h2>Node Library</h2>
        <span>Drag to canvas</span>
      </div>
      <div className="toolbar-grid">
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="text" label="Text" />
        <DraggableNode type="math" label="Math" />
        <DraggableNode type="filter" label="Filter" />
        <DraggableNode type="api" label="API" />
        <DraggableNode type="delay" label="Delay" />
        <DraggableNode type="merge" label="Merge" />
      </div>
    </section>
  );
};
