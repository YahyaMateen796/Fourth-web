import React from 'react'

export default function Date() {

    const year = new Date().getFullYear()

    return (
        <div className='container'>
            ن<div className="row">
                <div className="col">
                    <span className="text-center text-white">
                        &copy;{year}.All rights are reserved by Yahya Mateen
                    </span>
                </div>
            </div>
        </div>
    )
}
