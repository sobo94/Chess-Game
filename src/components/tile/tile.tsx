import './tile.css';

interface Props {

    number: number;
    image?: string;
    
}


export default function Tile({ number, image } : Props) {

    if(number % 2 === 0){
       
        return <div className='Tile Color-B'> <img alt="" src={image}/> </div>

    }
    else{

        return <div className='Tile Color-A'> <img alt=""src={image}/> </div>
       
    }
   

}