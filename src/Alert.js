import React from 'react'
import './Alert.css'
function Alert({message}) {
    return (
        <div className='alert'>
            <h3>{message}</h3>
        </div>
    )
}

export default Alert
