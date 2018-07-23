import React, { Component } from 'react';
import TestList from '../containers/test-list';
import Trainer from '../containers/trainer';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
       mode: 0
     };
  }

  changeMode(e) {
    this.setState({mode: e.target.value});
  }

  render() {
    return (
      <div>
        <h1>Тест на гармонический слух</h1>
        <p className="lead">Прослушайте аудиозапись и укажите правильную функцию.</p>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="mode">Режим</label>
          </div>
          <select className="custom-select" id="mode" onChange={(e) => this.changeMode(e)}>
            <option key="0" value="0">В бой</option>
            <option key="1" value="1">Тренировка</option>
          </select>
        </div>
        { this.state.mode == 1 ? <Trainer/> : <TestList/>}
      </div>
    );
  }
}
