import React, { Component } from 'react'
import moment from 'moment'

class TableRows extends Component {
    constructor(props) {
        super(props)

        this.state = { selecting: false }
    }

    handleClick = () => {
        this.setState(state => ({
            selecting: !state.selecting
        }));
    }

    render() {
        let changeColour = ''
        if (this.state.selecting) {
            changeColour = 'changedColour'
        }

        const fullInfo = this.props.infoObj

        return (
            <tr className={changeColour} onClick={this.handleClick}>
                <th scope="row">{fullInfo.id}</th>
                <td >{fullInfo.title}</td>
                <td>{fullInfo.firstName}</td>
                <td>{fullInfo.surname}</td>
                <td>{fullInfo.email}</td>
                <td>{fullInfo.roomId}</td>
                <td>{fullInfo.checkInDate}</td>
                <td>{fullInfo.checkOutDate}</td>
                <td>{moment(fullInfo.checkOutDate).diff(moment(fullInfo.checkInDate), 'days')}</td>
            </tr>
        )
    }
}

export default TableRows