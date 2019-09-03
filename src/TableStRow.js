import React from 'react'

const TableSrRow = (props) => {
    return (
        <thead className="thead-dark">
            <tr>
                {props.infoFromArr.map((keys) => {
                    return <th scope="col">{keys}</th>;
                })}
            </tr>
        </thead>
    )
}
export default TableSrRow
