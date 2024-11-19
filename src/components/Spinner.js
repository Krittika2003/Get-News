import React from 'react'
import loading from './loading.gif'

const spinner = () => {

  return (
    <div className="text-center">
      <img style={{ paddingTop: "120px", paddingBottom: "150px" }} src={loading} alt="Loading.." />
    </div>
  )
}

export default spinner
