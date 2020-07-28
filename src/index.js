import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import CadastroVideo from './pages/Cadastro/Video';
import CadastroCategoria from './pages/Cadastro/Categoria';
import Home from './pages/Home';

const Page404 = () => (
  <div>
    <h1>Página 404</h1>
  </div>
);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cadastro/video" exact component={CadastroVideo} />
        <Route path="/cadastro/categoria" exact component={CadastroCategoria} />
        <Route component={Page404} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
