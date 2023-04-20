import React from 'react'
import ReactLogo from '../assets/react.svg'
import { CompanyImg, HeaderStyle } from '../styles'

interface Props { }

function Header(props: Props) {
    const { } = props

    return (
        <div className={HeaderStyle}>
            <div className={CompanyImg}>
                <img src={ReactLogo} alt="React" className='object-fit ' />
            </div>
            <h1 className='font-bold text-xl'>Company Name</h1>
            <p className='font-light'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            </p>
            <strong className=''>
                Full Stack Developer (React, Node, Express, MongoDB)
            </strong>
        </div>
    )
}

export default Header
