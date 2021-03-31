import { Redirect, Route, Switch } from 'react-router';
import './App.css';
import Green from './component/green/Green';
import Info from './component/info/Info';
import Red from './component/red/Red';
import Yellow from './component/yellow/Yellow';
import { store } from './redux/store';

export const APP_NAME = '/traffic-lights';

function App() {
  window.store = store; //для просмотра через консоль
  return (
    <div className='app-wrapper'>
      <div className='app'>
        <Info />
        <div className='traffic-light'>
          <Redirect to={`${APP_NAME}/red`}/>
          <div className='red-off'>
            <Route path={`${APP_NAME}/red`} render={() => <Red />} />
          </div>
          <div className='yellow-off'>
            <Route path={`${APP_NAME}/yellow`} render={() => <Yellow />} />
          </div>
          <div className='green-off'>
            <Route path={`${APP_NAME}/green`} render={() => <Green />} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
