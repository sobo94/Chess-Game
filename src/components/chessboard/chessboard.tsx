import Tile from "../tile/tile";
import './chessboard.css';

const horizontalAxis = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const verticalAxis = ['1', '2', '3', '4', '5', '6', '7', '8'];


interface Peices {

    image: string;
    x: number;
    y: number;

}


const peices: Peices[] = [];

peices.push({ image: "assets/images/png/w_rook.png", x: 0, y: 0 });
peices.push({ image: "assets/images/png/w_rook.png", x: 7, y: 0 });
peices.push({ image: "assets/images/png/b_rook.png", x: 0, y: 7 });
peices.push({ image: "assets/images/png/b_rook.png", x: 7, y: 7 });

peices.push({ image: "assets/images/png/w_knight.png", x: 1, y: 0 });
peices.push({ image: "assets/images/png/w_knight.png", x: 6, y: 0 });
peices.push({ image: "assets/images/png/b_knight.png", x: 1, y: 7 });
peices.push({ image: "assets/images/png/b_knight.png", x: 6, y: 7 });

peices.push({ image: "assets/images/png/w_bishop.png", x: 2, y: 0 });
peices.push({ image: "assets/images/png/w_bishop.png", x: 5, y: 0 });
peices.push({ image: "assets/images/png/b_bishop.png", x: 2, y: 7 });
peices.push({ image: "assets/images/png/b_bishop.png", x: 5, y: 7 });

peices.push({ image: "assets/images/png/w_king.png", x: 4, y: 0 });
peices.push({ image: "assets/images/png/w_queen.png", x: 3, y: 0 });

peices.push({ image: "assets/images/png/b_king.png", x: 3, y: 7 });
peices.push({ image: "assets/images/png/b_queen.png", x: 4, y: 7 });


for (let i = 0; i < 8; i++) {
    peices.push({ image: "assets/images/png/b_pawn.png", x: i, y: 6 });
    peices.push({ image: "assets/images/png/w_pawn.png", x: i, y: 1 });

}



export default function Chessboard() {

    let board = [];

    for (let j = verticalAxis.length - 1; j >= 0; j--) {
        for (let i = 0; i < horizontalAxis.length; i++) {

            const number = i + j + 1;
            let image = undefined;

            peices.forEach((p) => {
                if (p.x === i && p.y === j) {
                    image = p.image;
                }
            });

            board.push(<Tile image={image} number={number} />);

        }
    }

    return <div id='Chessboard'> {board} </div>
}