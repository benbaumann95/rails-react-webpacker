import React from "react"
import PropTypes from "prop-types"
class AllTechnologies extends React.Component {
  render () {
    return (
      <div>
        <h3> Name: {this.props.name} </h3>
        <h4> Description: {this.props.description} </h4>
        <h5> Function: {this.props.function} </h5>
      </div>
    );
  }
}

AllTechnologies.propTypes = {
  name: PropTypes.string,
  description: PropTypes.node,
  function: PropTypes.string
};
export default AllTechnologies
