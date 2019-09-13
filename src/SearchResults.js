import React, { Component } from 'react'
import TableSrRow from './TableStRow'
import TableBody from './TableBody';

// const keysOfObj = ['id', 'title', 'firstName', 'surname', 'email', 'roomId', 'checkInDate', 'checkOutDate', 'days of stay']

class SearchResult extends Component {
    render() {
        return (
            <div>
                <table className="table">
                    <TableSrRow />
                    <TableBody infoFromObj={this.props.FakeBookings} />
                </table>
            </div>
        )
    }
}


export default SearchResult