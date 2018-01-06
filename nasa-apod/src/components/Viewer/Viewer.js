import React from 'react';
import styles from './Viewer.scss';
import classNames from 'classnames/bind';
import {
    FadingCircle
} from 'better-react-spinkit'

const cx = classNames.bind(styles)

const Viewer = ({mediaType,url,loading}) => {
    if(!url) return null;
    
    if(loading) {
        return (
        <div className={cx('viewer')}>
        <FadingCircle color='black' size={100}/>
        </div>
    )
    }


    return (
        <div className={cx('viewer')}>
            {
                mediaType ==='image' ? (
                    <img onClick={() => window.open(url)} src={url} alt='space'/>
                ) : (
                    <iframe title='space-video' src = {url} frameBorder='0' gesture='media' allwo='encrypted-media' allowFullScreen></iframe>

                )
            }
        </div>
    );
};

export default Viewer;