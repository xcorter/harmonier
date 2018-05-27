import React, { Component } from 'react';
import TestList from '../containers/test-list';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Тест на гармонический слух</h1>
        <p className="lead">Прослушайте аудиозапись и укажите правильную функцию.</p>
        <TestList/>
      </div>
    );
  }
}
