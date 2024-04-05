// rcc : reactClassComponent
import React, { Component } from 'react'
export class NewsItem extends Component {

  render() {
    // defining props in class based component
    // let [title,description] = this.props; (only usable in functional based components)
    return (
      <div className="my-3">
        <div className="card">
        <div>
            <span className="badge rounded-pill bg-danger" style={{position:'absolute',display:"flex",justifyContent:'flex-end',right:'0'}}>{this.props.source.name}</span>
          </div>
          <img src={this.props.urlToImage} className="card-img-top" alt="..." style={{height:"205px" , width:"355px"}}/>
          <div className="card-body">
            <h5 className="card-title">{this.props.title.slice(0,55)}...</h5>
            <p className="card-text">{this.props.description.slice(0,70)}...
            </p>
            <p className="card-text">by <span className="text-primary">{this.props.author.slice(0,15)}</span>... on {new Date(this.props.date).toGMTString().slice(0, 17)}</p>
            <a href={this.props.url} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read more</a>
            {/* target="_blank" would open the provided link in new page */}
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem