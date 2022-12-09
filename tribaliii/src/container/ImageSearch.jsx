import React, { useState } from 'react'

const ImageSearch = ({ searchText }) => {

    const [text, setText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        searchText(text)
        setText('')
    }

  return (
    <div className='max-w-sm rounded overflow-hidden my-10 mx-auto'>
        <form className='w-full max-w-sm' onSubmit={handleSubmit}>
            <div className='flex items-center border-2 rounded'>
                <input 
                    onChange={e => setText(e.target.value)}
                    value={text}
                    type="text"
                    placeholder="Search portfolios"
                    className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
                />
                <button type='submit' className='flex-shrink-0 bg-slate-500 hover:bg-slate-800 border-slate-500 hover:border-slate-800 text-sm border-4 text-white py-1 px-2 rounded'>
                    Search
                </button>
            </div>
        </form>
    </div>
  )
}

export default ImageSearch