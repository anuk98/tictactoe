import React from 'react'
import { useState } from 'react'
import Board from './Components/Board'
import ResetButton from './Components/ResetButton';
import ScoreBoard from './Components/ScoreBoard';
import './App.css'

function App() {
 
  const[board,setBoard]=useState(Array(9).fill(null));
  const winCondition=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
  ]
  const[xplaying,setXplaying]=useState(true);
  const [scores,setScores]=useState({xScore:0,oScore:0})
  const [gameover,setGameover]=useState(false);
 console.log(board);
  const handleBoxClick=(boxIdx)=>{
    console.log(gameover);
    const updatedBoard=board.map((value,idx)=>{
      if(idx===boxIdx){
        return xplaying?'X':'O';
      }else{
        return value;
      }
    })
    const winner=checkWinner(updatedBoard);
    if(winner){
      if(winner==='o'){
        let {oScore}=scores;
        oScore+=1
        setScores({...scores,oScore})

      }else{
        let {xScore}=scores;
        xScore+=1
        setScores({...scores,xScore})

      }
    }
    console.log(scores);
    setBoard(updatedBoard);
    setXplaying(!xplaying)
  }
  const checkWinner=(board)=>{
    for(let i=0;i<winCondition.length;i++){
      const [x,y,z]=winCondition[i];
      if( board[x] && board[x] === board[y] && board[y] === board[z] ){
        setGameover(true);
        return board[x];
      }
    }
  }
   const resetBoard=()=>{
    setGameover(false);
    setBoard(Array(9).fill(null))
   }
  return (
    <div className='app'>
      <ScoreBoard scores={scores} xplaying={xplaying}/>
      <Board board={board} onClick={gameover ? resetBoard : handleBoxClick}/>
      <ResetButton resetBoard={resetBoard}/>
    </div>
  )
}

export default App