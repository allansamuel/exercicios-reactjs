import React from 'react'

const Contact = (props) => {
    /* 
    programmatic redirects to '/' after 500 milliseconds

    setTimeout(() => {
        props.history.push('/')
    }, 500) 
    
    */
    return (
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero distinctio, sed iste corrupti laudantium placeat tempore et vel cupiditate sint libero voluptas illo impedit ipsum deleniti ex neque ad quaerat.</p>
        </div>
    )
}
export default Contact