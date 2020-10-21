import React from 'react'
import SchoolMenu from '../widget/SchoolMenu'

export default function Menu() {
    return (
        <nav id="sidebar">
            <ul className="list-unstyled components">
                <SchoolMenu />
            </ul>
        </nav>

    )
}
