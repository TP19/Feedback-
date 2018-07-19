import React, { Component } from 'react'; 

import PropTypes from 'prop-types';


class TopicPrev extends Component {
	handleClick = () => {

		this.props.onClick(this.props.id); 

	};
	render() {
		return (

		<div className="link TopicPrev" onClick={this.handleClick}>

			<div className="category-name">
				{this.props.categoryName}
			</div>

			<div className="topic-name">
				{this.props.topicName}
			</div> 
		</div>
); 
	}
}




TopicPrev.propTypes = {


	id: PropTypes.number.isRequired, 
	categoryName: PropTypes.string.isRequired, 
	topicName: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
};


export default TopicPrev; 