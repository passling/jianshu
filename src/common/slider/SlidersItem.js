import React, {Component} from 'react'
class SlidersItem extends Component{
    render() {
        let style = {
            width: this.props.images.length * 625 + 'px',
            left: this.props.index * -625 + 'px',
            transitionDuration: this.props.speed + 's'
        }
        return (
            <ul className="sliders" style={style}>
                {
                    this.props.images.map((item, index) =>(
                        <li className="slider" key={index}>
                            <img src={item} alt=""/>
                        </li>
                    ))
                }
            </ul>
        )
    }

}
export default SlidersItem