import React from 'react';
import './_videoHorizontal.scss';
import { AiFillEye } from 'react-icons/ai';
import request from '../../api';
import moment from 'moment';
import numeral from 'numeral';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Col, Row } from 'react-bootstrap';

const VideoHorizontal = () => {

   const seconds = moment.duration('100').asSeconds()
   const _duration = moment.utc(seconds * 1000).format('mm:ss')

   return (
      <Row className='py-2 m-1 videoHorizontal align-items-center'>
         <Col xs={6} md={6} className='videoHorizontal__left'>
            <LazyLoadImage
               src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
               effect='blur'
               className='videoHorizontal__thumbnail'
               wrapperClassName='videoHorizontal__thumbnail-wrapper'
            />
            <span className='videoHorizontal__duration'>{_duration}</span>
         </Col>
         <Col xs={6} md={6} className='videoHorizontal__right p-0'>
            <p className='mb-1 videoHorizontal__title'>Be a full stack developer </p>
            <div className='videoHorizontal__details'>
               <AiFillEye /> {numeral(10000).format('0.a')} Views •
               {moment('2021-05-01').fromNow()}
            </div>

            <div className='my-1 videoHorizontal__channel d-flex align-items-center'>
               {/* //TODO show in search screen */}
               {/* <LazyLoadImage
               src='https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png'
               effect='blur'
             
            /> */}
               <p className='mb-0'>BackBench Coder</p>
            </div>
         </Col>

      </Row>
   )
}

export default VideoHorizontal
