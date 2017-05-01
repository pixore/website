import React from 'react'

export default React.createClass({
  render () {
    return <div className='sprite'>
      <div className='pxr_grid__header'>
        <a>
          <img src={this.props.data.user.profileImage} />
        </a>
        <span>
          {this.props.data.user.displayName}
          <br />
          <div className='username'>{this.props.data.user.username}</div>
        </span>
      </div>
      <img src={this.props.data.preview} />
      <div className='footer'>
        {this.props.data.name}
      </div>
    </div>
  }
})
