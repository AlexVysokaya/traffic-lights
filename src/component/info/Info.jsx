import React from 'react'
import { connect } from 'react-redux'
import style from './Info.module.css'

const Info = ({go, time}) => {
  return (
    <div className={style.info}>
      <div className={style.info_text}>
        {go ? <div>GO!</div> : <div>Please, wait!</div>}
      </div>
      <div className={style.info_timer}>
        {`0:${(time<10) ? 0 : ''}${time}`}
      </div>
    </div>
  )
}

let mapStateToProps = (state) => {
  return {
    go: state.reducer.go,
    time: state.reducer.timer
  }
}

export default connect(mapStateToProps, {})(Info)