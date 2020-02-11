import React, { PureComponent } from 'react'
import {Navbar} from '../../ExportingComponents'
import './Header.css'

export class Header extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div id="header-container">
                <Navbar/>
                <div id="header-title">

                </div>
            </div>
        )
    }
}