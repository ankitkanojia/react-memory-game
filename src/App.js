import React from 'react';
import logo from "./logo.svg";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFliped : false
    };
  }

  flip = () => {
    this.setState({
      isFliped : true
    }, () => {
      setTimeout(() => {
        this.setState({
          isFliped: false
        });
      }, 3000);
    });
  }

  render() {
    return (
      <div className="App">
        <div class="container">
          <div class="row">
            <div class="col-md-8 red">
              <section class="container">
                <div onClick={this.flip} class={"card" + (this.state.isFliped ? " flipped" : "")}>
                  <div class="front">&nbsp;</div>
                  <div class="back">
                    <img src={logo} alt="s" />
                  </div>
                </div>
              </section>
            </div>
            <div className="col-md-4 pink">
              &nbsp;
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
