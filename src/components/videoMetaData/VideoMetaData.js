import moment from 'moment';
import numeral from 'numeral';
import React from 'react';
import { AiFillEye } from 'react-icons/ai';
import { MdThumbUp, MdThumbDown } from 'react-icons/md';
import ShowMoreText from 'react-show-more-text';
import './_videoMetaData.scss'

const VideoMetaData = () => {
    return (
        <div className='videoMetaData py-2'>
            <div className="videoMetaData__top">
                <h5>Video Title</h5>
                <div className="d-flex justify-content-between align-items-center py-1">
                    <span>
                    
               <AiFillEye /> {numeral(10000).format('0.a')} Views   •
            
                    {moment('2021-05-01').fromNow()}
                    </span>
                
                <div >
                    <span className='mr-3'><MdThumbUp size={26} /> {numeral(1000).format('0.a')}</span>
                    <span className='mr-3'><MdThumbDown size={26} /> {numeral(2000).format('0.a')}</span>
                </div>
                </div>
            </div>
            <div className="videoMetaData__channel py-3 my-2 d-flex justify-content-between align-items-center">
                <div className="d-flex">
                    <img src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png" alt="" className='rounded-circle mr-3' />
                    <div className="d-flex flex-column">
                        <span>Channel Name</span>
                        <span> {numeral(10000).format('0.a')} Subscribers</span>
                    </div>
                   
                </div>
                <button className="btn border-0 p-2 m-2">Subscribe</button>

            </div>
            <div className="videoMetaData__description">
                <ShowMoreText lines={3}
                more="Show More"
                less="Show Less"
                anchorClass='showMoreText'
                expanded={false}
                >
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, tempora, eveniet accusantium, unde nemo officia veritatis sed iste facere recusandae itaque qui inventore necessitatibus explicabo perferendis at accusamus hic. Repudiandae?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi labore ducimus laborum omnis aspernatur reiciendis, enim, cupiditate tenetur quod modi eius, soluta odit rerum eligendi quas exercitationem maxime ipsa aliquam. Est, voluptate, eum natus eos quis nisi dolore, illum dignissimos placeat doloremque adipisci praesentium accusantium ipsam repellat sed ut architecto.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, perspiciatis! Odit, iusto exercitationem excepturi repellat fugit maxime unde sequi quisquam, illo recusandae praesentium blanditiis? Officiis voluptatem quia omnis dignissimos illum laborum odit aperiam doloremque quaerat quo porro ut voluptas temporibus repudiandae, ipsum officia culpa enim nobis. Ipsum suscipit earum distinctio modi explicabo nobis ullam accusantium aut soluta iure sunt eius repellat aliquam totam laborum, consequatur reprehenderit temporibus. Vitae accusantium fuga illum. Ab cum explicabo, fuga quo a repellat quidem quia maiores error eaque repudiandae laudantium tempora aliquam fugit nisi, non iusto dolore ad neque reprehenderit recusandae. Neque accusantium autem quisquam.

                </ShowMoreText>
               
            </div>
            
        </div>
    )
}

export default VideoMetaData
