import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from "moment";
import Loading from "./Loading";
import PhotoHeader from './PhotoHeader';
import PhotoInfo from "./PhotoInfo";
import CopyrightInfo from './CopyrightInfo';
import TransferOwnershipButton from './TransferOwnershipButton';
// @ts-ignore
import { drawImageFromBytes } from '../utils/imageUtils';

import { last } from '../utils/misc';
import './Feed.scss'

class Feed extends Component {
    constructor(props:any) {
        super(props)
        this.state = {
            isLoading: !props.feed,
        }
    }

    static getDerivedStateFromProps = (nextProps:any, prevState:any)=> {
        const isUpdatedFeed = (nextProps.feed !== prevState.feed) && (nextProps.feed !== null)
        if (isUpdatedFeed) {
            return { isLoading: false }
        }
        return null
    }

    componentDidMount() {
        // const { feed, getFeed } : any = this.props
        // if (!feed) getFeed()
    }

    render() {
        const { feed, userAddress} : any  = this.props

        // @ts-ignore
        // if (this.state.isLoading) return <Loading />

        return (
            <div className="Feed">
                {feed.length !== 0
                    ? feed.map(({
                                    id,
                                    ownerHistory,
                                    data,
                                    name,
                                    location,
                                    caption,
                                    timestamp,
                                }: any) => {
                        const originalOwner = ownerHistory[0]
                        const currentOwner = last(ownerHistory)
                        const imageUrl = drawImageFromBytes(data)
                        const issueDate = moment(timestamp * 1000).fromNow()

                        return (
                            <div className="FeedPhoto" key={id}>
                                <PhotoHeader
                                    currentOwner={currentOwner}
                                    location={location}
                                />
                                <div className="FeedPhoto__image">
                                    <img src={imageUrl} alt={name} />
                                </div>
                                <div className="FeedPhoto__info">
                                    <PhotoInfo
                                        name={name}
                                        issueDate={issueDate}
                                        caption={caption}
                                    />
                                    // @ts-ignore
                                    <CopyrightInfo
                                        className="FeedPhoto__copyrightInfo"
                                        id={id}
                                        issueDate={issueDate}
                                        originalOwner={originalOwner}
                                        currentOwner={currentOwner}
                                    />
                                    {
                                        userAddress === currentOwner && (
                                            <TransferOwnershipButton
                                                // @ts-ignore
                                                className="FeedPhoto__transferOwnership"
                                                id={id}
                                                issueDate={issueDate}
                                                currentOwner={currentOwner}
                                            />
                                        )
                                    }
                                </div>
                            </div>
                        )
                    })
                    : <span className="Feed__empty">No Photo :D</span>
                }
            </div>
        )
    }
}

export default Feed
