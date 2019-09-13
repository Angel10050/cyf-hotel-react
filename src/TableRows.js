import React, { Component } from 'react'
import moment from 'moment'

class TableRows extends Component {
    constructor(props) {
        super(props)

        this.state = { selecting: false }
    }

    handleClick = () => {
        this.setState(prevState => ({
            selecting: !prevState.selecting
        }));
    }

    render() {
     
        const {infoObj} = this.props

        return (
            <tr className={this.state.selecting ? 'changedColour' : '' } onClick={this.handleClick}>
                <th scope="row">{infoObj.id}</th>
                <td >{infoObj.title}</td>
                <td>{infoObj.firstName}</td>
                <td>{infoObj.surname}</td>
                <td>{infoObj.email}</td>
                <td>{infoObj.roomId}</td>
                <td>{infoObj.checkInDate}</td>
                <td>{infoObj.checkOutDate}</td>
                <td>{moment(infoObj.checkOutDate).diff(moment(infoObj.checkInDate), 'days')}</td>
            </tr>
        )
    }
}

export default TableRows