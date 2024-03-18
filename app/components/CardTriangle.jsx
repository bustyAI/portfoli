import React from 'react'

const CardTriangle = (pattern) => {
    return (
        <div className={`${pattern} absolute bottom-0 mb-24  -right-5 rotate-45 w-0 h-0 border-l-[80px] lg:border-l-[200px] border-l-transparent border-r-[120px] lg:border-r-[200px] border-r-transparent border-b-[170px] lg:border-b-[320px] border-b-white rounded-md`}></div>
    )
}

export default CardTriangle