import moment from 'moment';
import React from 'react';
import './_comment.scss'

const Comment = () => {
    return (
        <div className='comment p-2 d-flex'>
            <img src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png" alt="" 
            />
            <div className="comment__body ">
                <p className="comment__header mb-1">Sailesh  •  {moment('2021-05-01').fromNow()}</p>
                <p className='mb-0'>Nice Video!!!</p>
            </div>
            
        </div>
    )
}

export default Comment
