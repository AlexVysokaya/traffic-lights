import React from 'react'
import { connect } from 'react-redux'
import style from './Info.module.css'

const Info = ({go, count}) => {
  return (
    <div className={style.info}>
      <div className={style.info_text}>
        {go ? <div>GO!</div> : <div>Please, wait!</div>}
      </div>
      <div className={style.info_timer}>
        {`0:${(count<10) ? 0 : ''}${count}`}
      </div>
    </div>
  )
}

let mapStateToProps = (state) => {
  return {
    go: state.reducer.go,
    count: state.reducer.count,
  }
}

export default connect(mapStateToProps, {})(Info)