import React from 'react';
import Macarrao from '../../images/macarrao.png';
import Stars from '../../images/stars.svg';
import { Link } from 'react-router-dom';
import './style.css';

const Card = (props) => {
    return (
        <div className='card'>
            <img className='image' src={Macarrao} alt="Macarrão" />
            <p className='name'>{props.name}</p>
            <img className='stars' src={Stars} alt="" />
            <p className='desc'>Pasta is a type of food typically made from an unleavened dough. </p>
            <div className='alignBottom'>
                <p className='price'>${props.value}</p>
                <Link className='buyButton'>Comprar</Link>
            </div>
        </div>
    );
}

export default Card;