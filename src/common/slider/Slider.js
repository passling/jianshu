import React, {Component} from 'react'
import './slider.css'
import SliderItem from './SlidersItem'
import SlidersArrows from './SlidersArrows'
import SlidersDots from './SlidersDots'
export class Slider extends Component{
    constructor() {
        super()
        this.state = {
            index: 0
        }
    }
    componentDidMount() {
        if (this.props.autoPlay) {
            this.go()
        }
    }
    go () {
        this.timer = setInterval(() => {
            this.turn(1)
        }, this.props.delay * 1000)
    }
    turn (step) {
        let index = this.state.index + step
        if (index >= this.props.images.length) {
            index = 0
        }
        if (index < 0) {
            index = this.props.images.length - 1
        }
        this.setState({
            index: index
        })
    }
    render () {
        return(
            <div className="wrapper">
                <SliderItem
                    images={this.props.images}
                    speed={this.props.speed}
                    index={this.state.index}
                />
                <SlidersArrows/>
                <SlidersDots
                    images={this.props.images}
                    index={this.state.index}
                />
            </div>
        )
    }
}
export default Slider