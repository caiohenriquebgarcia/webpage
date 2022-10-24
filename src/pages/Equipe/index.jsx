import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Chefe1 from '../../images/Chefe1.png';
import Chefe2 from '../../images/Chefe2.png';
import Chefe3 from '../../images/Chefe3.png';
import Comida from '../../images/Comida.png';

const Equipe = () => {
    return (
        <div>
            <main>
                <div className='insideMain'>
                    <div className='insideMainTop'>
                        <h2>Nossos chefes</h2>
                        <Link className='seeMoreButton'>Ver mais</Link>
                    </div>
                    <div className='content'>
                        <div>
                            <img className='cardImg' src={Chefe1} />
                        </div>
                        <div>
                            <img className='cardImg' src={Chefe2} />
                        </div>
                        <div>
                            <img className='cardImg' src={Chefe3} />
                        </div>
                    </div>
                </div>
            </main>

            <main className='notification'>
                <div className='insideNotification'>
                    <img className='dish' src={Comida} />
                    <img className='dish2' src={Comida} />
                    <h2>Receba notificações</h2>
                    <p>Digite o seu e-mail para receber notificações das promoções que estão rolando!</p>
                    <div className='alignNotification'>
                        <input className='email' type="text" placeholder="Digite o seu e-mail" />
                        <button className='sendButton'>ENVIAR</button>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Equipe;