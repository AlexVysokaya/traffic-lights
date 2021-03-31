import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { changeColor, changeGo, changeTimer } from '../../redux/reducer'
import style from './Green.module.css'
import {APP_NAME} from '../../App'

class Green extends React.Component {

  componentDidMount() {
    const {changeColor, history, changeTimer,changeGo} = this.props
    changeGo(true)
    changeColor('red')

    let count = 15;
    changeTimer(count)
    let time = setInterval(() => {
      count--
      changeTimer(count)
    }, 1000);

    // if (count == 0) {
    //   clearInterval(time)
    //   history.push('/yellow')
    // }
    setTimeout(()=>{
      clearInterval(time)
      history.push(`${APP_NAME}/yellow`)
    }, 15000)

  }

  render () {
    return <div className={`${style.green} ${(this.props.time <= 3) ? style.action : ''}`} />
  }
}

let mapStateToProps = (state) => {
  return {
    time: state.reducer.timer
  }
}

export default connect (mapStateToProps, {changeColor, changeGo, changeTimer})(withRouter(Green))