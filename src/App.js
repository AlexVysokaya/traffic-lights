import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route} from 'react-router';
import './App.css';
import Info from './component/info/Info';
import Lights from './component/Lights/Lights';
import { decreaseCount } from './redux/reducer';


export const APP_NAME = '/traffic-lights';

class App extends React.Component {

  componentDidMount() {
    setInterval(()=>{
      this.props.decreaseCount();
    }, 1000)
  }

  render() {
    return (
      <div className='app-wrapper'>
        <div className='app'>
          <Info />
          <div className='traffic-light'>
            <Redirect to={`${APP_NAME}/red`}/>
            <div className='red-off'>
              <Route path={`${APP_NAME}/red`} render={() => <Lights />} />
            </div>
            <div className='yellow-off'>
              <Route path={`${APP_NAME}/yellow`} render={() => <Lights />} />
            </div>
            <div className='green-off'>
              <Route path={`${APP_NAME}/green`} render={() => <Lights />} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect (null, {decreaseCount})(App);
