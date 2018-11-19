import React, {Component} from 'react'
import Swiper from 'swiper/dist/js/swiper.min.js'
import 'swiper/dist/css/swiper.min.css'
import './index.css'
class Slider extends Component{
    componentDidMount() {
       new Swiper('.swiper-container', {
            loop: true,
            autoplay: true,
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
       })
    }
    render() {
        return(
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {this.props.images.map((item, index) =>(
                        <div className="swiper-slide" key={index}>
                            <img src={item} alt=""/>
                        </div>
                    ))}
                </div>
                <div className="swiper-pagination"/>
                <div className="swiper-button-prev"/>
                <div className="swiper-button-next"/>
            </div>
        )
    }

}
export default Slider