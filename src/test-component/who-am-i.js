import {Component} from 'react'
import './who-am-i.css';

// Функциональный компонент
// const WhoAmI = ({name, surename, link}) => {
//   return (
//     <div>
//       <h1>My name is: {name.firstName} , surename: {surename()} </h1>
//       <a href={link}>My profile</a>
//     </div>
//     );
// }
// Классовый компонент
class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 27,
      text: '+'
    }
  }

  nextYear = () => {
    this.setState(state => ({
      years: state.years + 1,
    }))
  }

  prevYear = () => {
    this.setState(state => ({
      years: state.years - 1,
    }))
  }

  render() {
    const {name, surename, link} = this.props;

    return (
      <div className='whoAmI'>
        <button className='years_btn' onClick={this.nextYear}>{this.state.text}</button>
        <h1>My name is: {name.firstName} , surename: {surename()} age: {this.state.years} </h1> 
        <a href={link}>My profile</a>
        <button className='years_btn years_btn_red' onClick={this.prevYear}>-</button>
      </div>
      );
  }
}

function TestApp() {
  return (
    <div className="test_app">
      <WhoAmI name={{firstName: 'John'}} surename={() => {return 'Smith'}} link='facebook.com'/>
      <WhoAmI name={{firstName: 'Alex'}} surename={() => {return 'Shepard'}} link='vk.com'/>
    </div>
  );
}

export default TestApp;