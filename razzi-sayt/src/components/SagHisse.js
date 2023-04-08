import React, { Component } from 'react';
import data from './data';
import img from '../img/section1-sekil1.jpg'


class Card extends Component {
  render() {
      return (
          <div className="card col-3 mt-3" style={{ border: "none" }}>
              <img src={this.props.img} class="card-img-top" alt="..." />
              <div className="card-body">
                  <h5 className="card-title">{this.props.title}</h5>
                  <p className="card-text">{this.props.text}</p>
                  <p className="card-text">${this.props.price}</p>
              </div>
          </div>
      )
  }
}

class sagHisse extends Component {
  render() {
    return (
      <div>
        <div className="sag-hisse">
          <div className="sekil">
            <img src={img} alt="err" className='w-100'/>
          </div>

          <div className="row d-flex mt-4">
                    {data.productData.map((item, index) => {
                        return (
                            <Card
                                img={item.img}
                                title={item.title}
                                text={item.text}
                                price={item.price}
                                key={index}
                            />

                        )
                    })}
          </div>

        </div>
      </div>
    )
  }
}

export default sagHisse