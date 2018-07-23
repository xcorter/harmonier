import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import changeKey from '../actions/action_change_key';
import changeFunction from '../actions/action_trainer_change_function';

class Trainer extends Component {

    render() {
      const keys = this.props.trainer.keys.map(key =>
        <option
          key={key}
          value={key}
        >{key}</option>
      );
      const choices = this.props.trainer.choices.map(choice =>
        <div className="row" key={choice.id}>
          <div className="col">{choice.key}</div>
          <div className="col">
          { choice.choices.map(func => {
            if (func.is_correct === true) {
              return func.text;
            }
          }) }
          </div>
          <div className="col">
            <audio controls src={choice.source} type="audio/mpeg"></audio>
          </div>
        </div>
      );
      return (
        <div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="key">Тональность</label>
            </div>
            <select className="custom-select" id="key" onChange={(e) => this.props.changeKey(e.target.value)}>
              <option value="">Все тональности</option>
              {keys}
            </select>
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="key">Функция</label>
            </div>
            <select className="custom-select" id="key" onChange={(e) => this.props.changeFunction(e.target.value)}>
              <option value="">Все функции</option>
              <option value="Тоника">Тоника</option>
              <option value="Доминанта">Доминанта</option>
              <option value="Субдоминанта">Субдоминанта</option>
            </select>
          </div>
          <div className="container">
            <div className="row">
              <div className="col">Тональность</div>
              <div className="col">Функция</div>
              <div className="col">Пример звучания</div>
            </div>
            {choices}
          </div>
        </div>
      );
    }
}

function mapStateToProps(state) {
  return {
    trainer: state.trainer
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      changeKey: changeKey,
      changeFunction: changeFunction
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Trainer);
