import Cell from './cell.component';

const Board = ({cells, onCellClick,completed, winningCombo}) => {

    return (
        <div className='board'>
            {
                cells.map((value, id) => (
                    <Cell id={id}
                        key={id}
                        value={value}
                        onCellClicked={onCellClick}
                        completed={completed}
                        winner={winningCombo.includes(id)}
                    />
                ))
            }

        </div>
    );
}



export default Board;