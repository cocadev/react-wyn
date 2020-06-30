import React from 'react'
import Dropdown from 'rc-dropdown';
import Menu, { Item as MenuItem } from 'rc-menu';
import 'rc-dropdown/assets/index.css';

import { data } from '../../common/data'
import 'react-dropdown/style.css';

export const CustomerTypeInput = (props) => {
    const id = props.calculator.industry
    return (
        <div className='container'>
            <div className='col-lg-5 col-md-12 f-26 m-t responsive-center'>
                Customer Type:
            </div>

            <div className='col-lg-7 col-md-12 f-26 m-t responsive-center' style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Dropdown
                    overlay={
                        <Menu style={{ marginTop: -2 }}>
                            {data.BENCHMARKS.map((item, index) =>
                                <MenuItem key={index} onClick={() => props.setCalculator('industry', index)}>{item.title}</MenuItem>)}
                        </Menu>
                    }
                >
                    <div className="dropdown-btn">
                        <div style={{ flex: 1 }}>{data.BENCHMARKS[id].title}</div>
                        <div className="triangle-down" />
                    </div>
                </Dropdown>
            </div>
        </div>
    )
}