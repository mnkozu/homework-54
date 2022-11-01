import React from 'react';
import {Character} from "../../types";
import './Cell.css';

interface Props {
  index: number;
  cell: Character;
  openCell: (index: number) => void;
}

const Cell: React.FC<Props> = ({index, cell, openCell}) => {
  return (
    <div
      key={index}
      onClick={() => openCell(index)}
      className={cell.clicked ? "Cell Open" : "Cell"}
    >
      {cell.clicked && cell.hasItem && 0}
    </div>
  );
};

export default Cell;