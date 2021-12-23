import moment from 'moment';
import numeral from 'numeral';
import React, { useEffect } from 'react';
import { AiFillEye } from 'react-icons/ai';
import { MdThumbUp, MdThumbDown } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import ShowMoreText from 'react-show-more-text';
import { checkSubscriptionStatus, getChannelDetails } from '../../redux/actions/channel.action';
import CustomHelmet from '../CustomHelmet';
import './_videoMetaData.scss'

const VideoMetaData = ({ video: { snippet, statistics }, videoId }) => {
    const { channelId, channelTitle, description, title, publishedAt } = snippet
    const { viewCount, likeCount, dislikeCount } = statistics
    const dispatch = useDispatch();
    const {
        snippet: channelSnippet,
        statistics: channelStatistics,
     } = useSelector(state => state.channelDetails.channel)

     const subscriptionStatus = useSelector(
        state => state.channelDetails.subscriptionStatus
     )
  

    useEffect(() => {
        dispatch(getChannelDetails(channelId))
        dispatch(checkSubscriptionStatus(channelId))
     }, [dispatch, channelId])


    return (
        <div className='videoMetaData py-2'>
            <CustomHelmet title={title} description={description} />
            <div className="videoMetaData__top">
                <h5>{title}</h5>
                <div className="d-flex justify-content-between align-items-center py-1">
                    <span>
                    
               <AiFillEye /> {numeral(viewCount).format('0.a')} Views   •
            
                    {moment(publishedAt).fromNow()}
                    </span>
                
                <div >
                    <span className='mr-3'><MdThumbUp size={26} /> {numeral(likeCount).format('0.a')}</span>
                    <span className='mr-3'><MdThumbDown size={26} /> {numeral(dislikeCount).format('0.a')}</span>
                </div>
                </div>
            </div>
            <div className="videoMetaData__channel py-3 my-2 d-flex justify-content-between align-items-center">
                <div className="d-flex">
                    <img src={channelSnippet?.thumbnails?.default?.url} alt="" className='rounded-circle mr-3' />
                    <div className="d-flex flex-column">
                        <span>{channelTitle}</span>
                        <span> {' '}
                     {numeral(channelStatistics?.subscriberCount).format(
                        '0.a'
                     )}{' '} Subscribers</span>
                    </div>
                   
                </div>
                <button className={`p-2 m-2 border-0 btn ${
                  subscriptionStatus && 'btn-gray'
               }`}>{subscriptionStatus ? 'Subscribed' : 'Subscribe'}</button>

            </div>
            <div className="videoMetaData__description">
                <ShowMoreText lines={3}
                more="Show More"
                less="Show Less"
                anchorClass='showMoreText'
                expanded={false}
                >
                   {description}
                </ShowMoreText>
               
            </div>
            
        </div>
    )
}

export default VideoMetaData
