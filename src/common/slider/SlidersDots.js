import React, {Component} from 'react'
class SlidersDots extends Component{
    render() {
        return(
            <div className="dots">
                {
                    this.props.images.map((item, index) => (
                        <span
                            key={index}
                            className={"dot "+(index === this.props.index ? 'active' : '')}
                      />
                    ))
                }
            </div>
        )
    }
}
export default SlidersDots