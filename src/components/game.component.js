import React from 'react';
import Board from './board.component';
import Status from './status.component';
import Reset from './reset.component';
import {checkGame} from '../services/tic-tac-toe';
import MoveList from './move-list.comonent';

class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state=this.getNewGameState();
    }

    getNewGameState(){
        return {
            cells:[
                    null,null,null,
                    null,null,null,
                    null,null,null,
                ],

            player:"O",
            status:'Next Move : "O"',
            winner: null,
            completed: false,
            winningCombo: [],
            moves: []
        };
    }

    handleCellClick=(cellId)=>{

        if(this.state.cells[cellId]!==null)
            return;
        
        var cells = [...this.state.cells];
        cells[cellId]= this.state.player;
        this.setState({cells});

        var moves = [...this.state.moves, 
                        {
                            player: this.state.player, 
                            position: cellId
                        }]

        var result=checkGame(cells);
        let status='';
        
        if(!result.completed){            

            var nextPlayer = this.state.player==='O'?'X':'O'; 
            this.setState({player:nextPlayer});
            status=`Next Move: "${nextPlayer}"`  
                     
            
        } else if(result.winner){                        
            status=`"${result.winner}" Wins!`;
            this.setState({
                winner: result.winner,
                completed: true,
                winningCombo: result.winningCombo
            })            
        } else{ 
            this.setState({completed:true});
            status=`Games Ends in Draw!`;
        }
        
        this.setState({status});

        
    }

    handleReset = ()=>{
        this.setState(this.getNewGameState());
    }

    render(){
        return (
            <div className='game'>
                <div className='left'>
                    <Status message={this.state.status}/>
                    <Board 
                            completed={this.state.completed}
                            cells={this.state.cells} 
                            onCellClick={this.handleCellClick}
                            winningCombo={this.state.winningCombo}
                            />
                    <Reset onClick={this.handleReset} />
                </div>
                <div className='right'>
                    <MoveList moves={this.state.moves}/>
                </div>
            </div>

        )
    }

}

export default Game;