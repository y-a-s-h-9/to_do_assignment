import React from 'react';
import Button from './Button';
import Checkbox from './Checkbox';

type TodoRowProps = {
  label: string;
  onDelete: () => void;
};

const TodoRow: React.FC<TodoRowProps> = ({ label, onDelete }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="todo-row" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Checkbox label={label} />
      {isHovered && <Button variant="small" onClick={onDelete}>Delete</Button>}
    </div>
  );
};

export default TodoRow;
