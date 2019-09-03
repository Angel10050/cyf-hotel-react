import React from 'react'
import TableSrRow from './TableStRow'
import TableBody from './TableBody'
import FakeBookings from "./data/fakeBookings.json";

const keysOfObj = ['id', 'title', 'firstName', 'surname', 'email', 'roomId', 'checkInDate', 'checkOutDate', 'days of stay']

const SearchResult = () => {
    return (
        <table className="table">
            <TableSrRow infoFromArr={keysOfObj} />
            <TableBody infoFromObj={FakeBookings} />
        </table>
    )
}

export default SearchResult