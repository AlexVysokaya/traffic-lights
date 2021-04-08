import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { changeCount, changeGo, changeLight } from '../../redux/reducer'
import style from './Lights.module.scss'
import { APP_NAME } from '../../App'

class Lights extends React.Component {

  componentDidMount() {
    const { changeGo, changeCount, arrColors, idLight } = this.props;
    const light = arrColors[idLight];
    changeCount(light.time);
    changeGo(light.go);
  }

  componentDidUpdate() {
    const { count, idLight, arrColors, changeLight, history } = this.props;
    if (count === 0) {
      // длинну массива
      if (idLight === 3) {
        history.push(`${APP_NAME}/${arrColors[0].color}`);
        changeLight(0);
      } else {
        history.push(`${APP_NAME}/${arrColors[idLight + 1].color}`);
        changeLight(idLight + 1);
      }
    }
  }

  render() {
    const { count, idLight, arrColors} = this.props
    return <div className={`${style[arrColors[idLight].color]} ${(count <= 2) ? style.action : ''}`}/>
  }
}

let mapStateToProps = (state) => {
  return {
    count: state.reducer.count,
    idLight: state.reducer.idLight,
    arrColors: state.reducer.arrColors
  }
}

export default connect(mapStateToProps, { changeGo, changeCount, changeLight })(withRouter(Lights))