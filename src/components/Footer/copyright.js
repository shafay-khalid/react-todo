import React from 'react'

export default function Copyright() {
    const year = new Date().getFullYear()
  return (
    <footer className='bg-info py-2'>
      <div className="container">
        <div className="row">
            <div className="col">
                <p className='mb-0 text-center text-white'>&copy; {year}. All Rights Are Reserved</p>
            </div>
        </div>
      </div>
    </footer>
  )
}
