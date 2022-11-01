import React from 'react';

interface Props {
  reset: () => void;
}

const Control: React.FC<Props> = ({reset}) => {
  return (
    <div className="Controls">
      <button type="button" onClick={reset}>Reset</button>
    </div>
  );
};

export default Control;