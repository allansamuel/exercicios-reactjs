import React, { PureComponent } from 'react'
import {Header, Sobre} from '../../ExportingComponents'
import './Home.css'

export class Home extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <Header/>
                <Sobre/>
            </div>
        )
    }
}
