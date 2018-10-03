import React, { Component } from 'react';
import Slider from 'react-slick';

import classes from './Carousel.css';
import CarouselItem from './CarouselItem/CarouselItem';

class CenterMode extends Component {
    render(){
        const albumList = this.props.albumList;
        const settings = {
            className: "center",
            // centerMode: true,
            dots: true,
            infinite: true,
            // centerPadding: "60px",
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 500,
            // autoplay: true,
            // lazyLoad: true,
            pauseOnHover: true,
            // height: "300px"
        };
        return (
            <div className={classes.Carousel}>
                {/* <h2>Center Mode</h2> */}
                <Slider {...settings}>
                    {albumList.map(album => (
                        <CarouselItem
                            key={album.id}
                            cover={album.cover}
                            band={album.bandName}
                            albumName={album.albumName}
                            />
                    ))}
                </Slider>
            </div>
        );

    }
}

export default CenterMode;