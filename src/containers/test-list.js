import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import checkAnswer from '../actions/action_answer';
import nextTest from '../actions/action_next';

class TestList extends Component {
  renderButton(item) {
    let success = false;
    if (this.props.test.current.rightNumber == item.id) {
      success = true;
    }
    return (
      <div
        key={item.id.toString()}
        className="p-2 bd-highlight" success={success.toString()}
      >
        <button
          type="button"
          className="btn btn-lg btn-outline-primary"
          onClick={() => this.props.checkAnswer(success)}
        >{item.text}</button>
      </div>
    )
  }

  render() {
    console.log(this.props);
    let successObj;
    if (this.props.test.success === true) {
      successObj = "success!!";
    } else if (this.props.test.success === false) {
      successObj = "fail!!";
    }
    return (
      <div success={this.props.test.success === true ? "success" : this.props.test.success === false ? "fail" : "" }>
        <p className="lead">Попытки: {this.props.test.successCounter}/{this.props.test.counter}</p>
        <div className="audio-wrapper">
          <audio controls src={this.props.test.current.source} type="audio/mpeg"></audio>
        </div>
        <br/>
        <br/>
        <div className="d-sm-flex justify-content-between bd-highlight mb-3">
          {this.props.test.current.choices.map((button, index) =>
            <div
              key={index}
              className="bd-highlight choice-button"
            >
              <button
                type="button"
                className={"btn btn-lg btn-outline-primary btn-block"}
                onClick={() => this.props.checkAnswer(button.is_correct)}
              >{button.text}</button>
            </div>
          )}
        </div>
        {this.props.test.success === true && <div>Правильно!</div>}
        {this.props.test.success === false && <div>Неправильно!</div>}
        <hr className="my-4"/>
        <button
          type="button"
          className={"btn btn-primary btn-lg btn-block"}
            onClick={() => this.props.nextTest()}
        >Следующий</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    test: state.test
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      checkAnswer: checkAnswer,
      nextTest: nextTest
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(TestList);
