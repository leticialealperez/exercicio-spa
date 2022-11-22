import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { meuTema } from './config/theme';
import Home from './pages/Home';

function App() {

  return (
    <ThemeProvider theme={meuTema.light}>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}/>
            </Routes>
        </BrowserRouter>
    </ThemeProvider>
  );

}

export default App;

// variaveis

// tipos primitivos e tipos complexos (objetos, arrays)

// estruturas de desvio de fluxo - IF ELSE, SWITCH

// estrutura de repetição de bloco - FOR, WHILE, DO WHI

// rotina - funções - parameteros e retornos 
