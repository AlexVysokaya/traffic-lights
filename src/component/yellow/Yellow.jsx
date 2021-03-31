import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { changeColor, changeGo, changeTimer } from '../../redux/reducer'
import style from './Yellow.module.css'
import {APP_NAME} from '../../App'

class Yellow extends React.Component {

  componentDidMount() {
    const { history, changeTimer,changeGo} = this.props
    changeGo(false)
    let count = 3;
    changeTimer(count)
    let time = setInterval(() => {
      count--
      changeTimer(count)
    }, 1000);

    setTimeout(()=>{
      clearInterval(time)
      history.push(`${APP_NAME}/${this.props.color}`)
    }, 3000)
  }

  render () {
    return <div className={`${style.yellow} ${(this.props.time <= 2) ? style.action : ''}`} />
  }
}

let mapStateToProps = (state) => {
  return {
    color: state.reducer.color,
    time: state.reducer.timer
  }
}

export default connect (mapStateToProps, {changeColor, changeGo, changeTimer})(withRouter(Yellow))