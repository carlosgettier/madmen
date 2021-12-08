import React from 'react'
import "./teamBoxVideo.scss";
import poster from '../../assets/portfolio/project09/latigo.jpg'

const teamBoxVideo = (props) => (
    <div className="team__box flex-center">
        <video src={props.avatar} autoPlay controls poster={poster} alt="person" />
        {/* <div className="team__box-info">
        <p className="font15 weight800">{props.name}</p>
        <p className="font12 weight500">{props.job}</p>
      </div> */}
    </div>
);

export default teamBoxVideo;
