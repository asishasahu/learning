import React  from "react";
class App extends React.Component {
  constructor () {
    super ();
    this.state = {
      txt:"hello from React!", 
      war:"hello world",
      con:"hello con",
    }
  }
  render () {
    return (
      <>
      <div>hello react</div>
      <input type="text" id="inputfld" onChange={ e=>this.setState({txt:e.target.value})}></input>
      <span class="output">{this.state.con}</span>

      <input type="text" className="input2" onChange={ e=>this.setState({war:e.target.value})}></input>
      <span id="output">{this.state.war}</span>

      <input type="text" className="input3" onChange={ e=>this.setState({con:e.target.value})}></input>
      <span id="output">{this.state.txt}</span>
      </>
    )
  }
}

export default App;
