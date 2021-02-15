import React from 'react';
import './App.css';


import {lazy, Suspense} from 'react';
const Header = lazy(() => import('./Codesplitting/Header'));
const Footer = lazy(() => import('./Codesplitting/Footer'));
const Rotas = lazy(() => import('./Codesplitting/Rotas'));

function App() {
    
    return(   
        <div> 
            <header >
                <Suspense fallback={ <p className="carregando">Carregando... </p> }>
                    <Rotas />
                </Suspense>
        
                <Suspense fallback= {
                    <div className="carregando" >
                        <img width="30%" src="https://media.giphy.com/media/fu3GohBvHTaco/giphy.gif" alt="Imagem de carregamento"/>
                    </div>
                }>
                    <Header />
                </Suspense>
        
                <Suspense fallback={ <p className="carregando">...por favor, aguarde um pouco!</p> }>
                    <Footer />
                </Suspense>'
            </header>
      </div>
    );
   
}
export default App;