import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { changeColor, changeGo, changeTimer } from '../../redux/reducer'
import style from './Red.module.css'
// import { Red } from './Red'

class Red extends React.Component {

  componentDidMount() {
    const {changeColor, history, changeTimer, changeGo} = this.props
    changeColor('green')
    changeGo(false)
    let count = 10;
    changeTimer(count)
    let time = setInterval(() => {
      count--
      changeTimer(count)
    }, 1000);

    setTimeout(()=>{
      clearInterval(time)
      history.push('/yellow')
    }, 10000)
  }

  render () {
    return <div className={`${style.red} ${(this.props.time <= 3) ? style.action : ''}`} />
  }
}

let mapStateToProps = (state) => {
  return {
    time: state.reducer.timer
  }
}

export default connect (mapStateToProps, {changeColor, changeTimer, changeGo})(withRouter(Red))