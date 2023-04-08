import React, { Component } from 'react'
import SolHisse from './SolHisse'
import SagHisse from './SagHisse'

export class Section extends Component {
  render() {
    return ( <div>
          <div className="container">
              <div className="row">
                  <div className="col-3">
                      < SolHisse />
                  </div>
                  <div className="col-9">
                      < SagHisse />
                  </div>
              </div>
          </div>
      </div>
    )
  }
}

export default Section