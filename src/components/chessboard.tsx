import React from "react";
import './chessboard.css';

const horizontalAxis = ['A' , 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const verticalAxis   = ['1' , '2', '3', '4', '5', '6', '7', '8'];


export default function Chessboard(){

    let board = [];
    
    
        for (let j = verticalAxis.length - 1; j >= 0; j--) {
            for (let i = 0; i < horizontalAxis.length; i++) {
            
                const number = i + j + 1;

                if (number % 2 === 0) {
                    board.push(
                        <div className='Tile-A'>
                            [{horizontalAxis[i]}{verticalAxis[j]}] 
                        </div>
                        );
                }
                else{
                    board.push(
                        <div className='Tile-B'>
                            [{horizontalAxis[i]}{verticalAxis[j]}] 
                        </div>
                        );

                }
                




            }
        }



    return <div id = 'Chessboard'> {board} </div>

}