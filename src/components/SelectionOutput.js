import React from 'react'

export const SelectionOutput = ({ label, description, value }) => {
    return (
        <React.Fragment>
            <div className="f-26" style={{ height: 80, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div>{label}: {value}</div>
                <div className="description">{description}</div>
            </div>
        </React.Fragment>
    )
}