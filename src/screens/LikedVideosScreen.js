import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getLikedVideos } from '../redux/actions/videos.action'
import Video from '../components/Video/Video'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'


const LikedVideosScreen = () => {

    const dispatch = useDispatch()

    const { accessToken } = useSelector(state => state.auth)
    const { videos, loading } = useSelector(state => state.likedVideos)

    const history = useHistory()

    useEffect(() => {

        // handle private route
        if (!accessToken) {
            history.push('/auth')
        }
        else {
            dispatch(getLikedVideos())
        }
    }, [history, dispatch, accessToken])

    return (
        <Container>
            <Row className="mt-4">
                {
                    !loading ? videos?.map(video =>
                        <Col md={4} lg={3}>
                            <Video key={video.etag} video={video} />
                        </Col>
                    )
                        :
                        [...Array(16)].map(
                            (d, i) => <Col md={4} lg={3} key={i}>

                                <SkeletonTheme color='#343a40' highlightColor='#3c4147'>
                                    <Skeleton width='100%' height='230px' count={15} />
                                </SkeletonTheme>
                            </Col>
                        )
                }
            </Row>
        </Container>
    )

}

export default LikedVideosScreen
