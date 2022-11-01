import React from 'react';
import {Character} from "../../types";
import Cell from "../Cell/Cell";

interface Props {
  cells: Character [];
  openCell: (index: number) => void;
}

const Board:React.FC<Props> = ({cells, openCell}) => {
  return (
    <div className="Board">
      {cells.map((cell, index) =>(
        <Cell
          key={index}
          cell={cell}
          index={index}
          openCell={openCell}/>
      ))}
    </div>
  );
};

export default Board;