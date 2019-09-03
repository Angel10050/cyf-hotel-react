import React from 'react'
import moment from 'moment'

const TableBody = (props) => {
    return (
        props.infoFromObj.map((infoObj) => {
            return (
                <tbody>
                    <tr>
                        <th scope="row">{infoObj.id}</th>
                        <td>{infoObj.title}</td>
                        <td>{infoObj.firstName}</td>
                        <td>{infoObj.surname}</td>
                        <td>{infoObj.email}</td>
                        <td>{infoObj.roomId}</td>
                        <td>{infoObj.checkInDate}</td>
                        <td>{infoObj.checkOutDate}</td>
                        <td>{moment(infoObj.checkOutDate).diff(moment(infoObj.checkInDate), 'days')}</td>
                    </tr>
                </tbody>
            )
        }
        )
    )
}

export default TableBody