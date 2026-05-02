// submit.js
import { useStore } from './store';

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

export const SubmitButton = () => {
  const { nodes, edges } = useStore(selector);

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:8000/pipelines/parse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nodes,
          edges,
        }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const result = await response.json();
      alert(
        `Pipeline Analysis\n\nNodes: ${result.num_nodes}\nEdges: ${result.num_edges}\nIs DAG: ${
          result.is_dag ? 'Yes' : 'No'
        }`
      );
    } catch (error) {
      alert(`Unable to parse pipeline: ${error.message}`);
    }
  };

  return (
    <div className="submit-row">
      <button type="button" className="submit-button" onClick={handleSubmit}>
        Submit Pipeline
      </button>
    </div>
  );
};
