 import React from 'react';

 import TopicPrev from './TopicPrev'; 

 import PropTypes from 'prop-types';


  const List = ({ topics, onTopicClick }) => (
<div className="List">

          {Object.keys(topics).map(topicId =>
            <TopicPrev
             key={topicId}
             onClick={onTopicClick}
              {...topics[topicId]} />
          )}
        </div>
        ); 


  	List.propTypes = {
  	topics: PropTypes.object,
    onTopicClick: PropTypes.func.isRequired,
  };

  export default List; 