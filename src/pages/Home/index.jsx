import React from 'react'
import './style.css';
import initialImage from '../../images/initialImage.png';
import bestImage from '../../images/bestImage.png';
import check from '../../images/check.svg';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="initial">
                <div className="insideInitial">
                    <div className="insideInitialLeft">
                        <h1>O <span className="orange">melhor delivery</span> service da sua cidade.</h1>
                        <p>FAÇA JÁ O SEU PEDIDO!</p>
                        <div className="inputGroup">
                            <input className="searchInput" placeholder="O que você quer comer?" />
                            <button className="searchButton">BUSCAR</button>
                        </div>
                    </div>
                    <div className="insideInitialRight">
                        <img src={initialImage} />
                    </div>
                </div>
            </div>

            <div className="best">
                <div className="insideBest">
                    <div className="insideBestLeft">
                        <img src={bestImage} />
                    </div>
                    <div className="insideBestRight">
                        <h2>Os melhores pratos na sua mesa!</h2>
                        <p className="subtitle">Nós priorizamos a qualidade de cada detalhe do seu pedido, desde o app até o prazo na sua mesa.</p>
                        <div className="divCheck">
                            <div className="singleCheck">
                                <img src={check} />
                                <p>Entrega rápida</p>
                            </div>
                            <div className="singleCheck">
                                <img src={check} />
                                <p>Pratos de qualidade</p>
                            </div>
                            <div className="singleCheck">
                                <img src={check} />
                                <p>O melhor da sua cidade</p>
                            </div>
                        </div>
                        <Link className="learnMoreButton">Saiba mais</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;