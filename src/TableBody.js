import React, { Component } from 'react'
import TableRows from './TableRows'

class TableBody extends Component {

    render() {
        return (
            <tbody>
                {this.props.infoFromObj.map((infoObj) => {
                    return (<TableRows infoObj={infoObj} />)
                })}
            </tbody>
        )

    }
}

export default TableBody