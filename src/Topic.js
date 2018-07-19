
import React, { Component } from 'react'; 

import PropTypes from 'prop-types';

 

class Topic extends Component {
	render () {

	return (
	<div className="Topic">
	<div className="Topic-description">
	{this.props.description}
	</div>
	<div className="home-link link"
		onClick={this.props.topicListClick}>		
		TopicList
	</div>
	</div>
	);
	}
}

Topic.propTypes = {
description: PropTypes.string.isRequired,
topicListClick: PropTypes.func.isRequired,
}; 

export default Topic; 