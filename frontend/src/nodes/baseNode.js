import { Handle } from 'reactflow';

export const BaseNode = ({
  title,
  handles = [],
  children,
  minHeight = 110,
  minWidth = 220,
  accentColor = '#4f46e5',
}) => {
  return (
    <div
      className="base-node"
      style={{ minHeight, minWidth, '--node-accent': accentColor }}
    >
      {handles.map((handle) => (
        <Handle
          key={handle.id}
          type={handle.type}
          position={handle.position}
          id={handle.id}
          style={handle.style}
          className="base-node-handle"
        />
      ))}
      <div className="base-node-header">{title}</div>
      <div className="base-node-body">{children}</div>
    </div>
  );
};

export const NodeField = ({ label, children }) => {
  return (
    <label className="node-field">
      <span>{label}</span>
      {children}
    </label>
  );
};

export const NodeInput = ({ ...props }) => {
  return <input {...props} className="node-input" />;
};

export const NodeSelect = ({ children, ...props }) => {
  return (
    <select {...props} className="node-input">
      {children}
    </select>
  );
};
