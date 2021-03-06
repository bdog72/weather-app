var React = require('react')
var PropTypes = require('prop-types')

function PlayerPreview (props) {
  return (
    <div>
      <div className='column'>
        <img className='avatar'
          src={props.avatar}
        />
        <h2 className='username'>@{props.username}</h2>
      </div>
      {props.children}
      {/* <button
        className='reset'
        onClick={props.onReset.bind(null, props.id)}>
         Reset
       </button> */}
    </div>
  )
}

PlayerPreview.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired
}

module.exports = PlayerPreview
