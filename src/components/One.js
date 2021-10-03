import React from 'react'
import Two from './Two'

function One(props) {
    return (
        <div style={{backgroundColor:'yellow',width:'500px'}}>
            <h1>layer one</h1>
            <Two ></Two>
        </div>
    )
}

export default One
