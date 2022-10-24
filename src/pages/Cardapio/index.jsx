import React from 'react';
import './style.css';
import Card from '../../components/Card';
import { Link } from 'react-router-dom';
import ReservationImage from '../../images/reservation.png';

const Cardapio = () => {
    return (
        <div>
            <div className='dishes'>
                <div className='insideDishes'>
                    <h2>Pratos populares</h2>
                    <div className='divCards bottom'>
                        <Card name='Macarrão' value='35.50' />
                        <Card name='Arroz' value='14.50' />
                        <Card name='Coxinha' value='25.50' />
                    </div>
                    <div className='divCards'>
                        <Card name='Bolo de chocolate' value='35.50' />
                        <Card name='Miojo' value='5.50' />
                        <Card name='Feijão' value='20.30' />
                    </div>
                </div>
            </div>

            <div className='reservation'>
                <div className='insideReservation'>
                    <div className='insideReservationLeft'>
                        <img src={ReservationImage} />
                    </div>
                    <div className='insideReservationRight'>
                        <h2>Já reservou a sua mesa? Não perca tempo!</h2>
                        <p>Gestão de reservas simples para seu estabelecimento e completo para seus clientes! Sem papéis ou pagers vibrantes para reservas, aqui tudo é feito de forma virtual.</p>
                        <Link className='reservationButton'>RESERVAR</Link>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Cardapio;