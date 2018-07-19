

import React from 'react'; 

// import axios from 'axios'; 

import Header from './Header'; 

// import TopicPrev from './TopicPrev';

 import List from './List';

 import Topic from './Topic'; 
 import * as api from './api';


const pushState = (obj, url) =>
window.history.pushState (obj, '', url); 

const onPopState = handler => {
	window.onpopstate = handler;
}; 

class App extends React.Component {
	static propTypes = {
		initialData: React.PropTypes.object.isRequired,
	}; 

	state = this.props.initialData;

	 componentDidMount() {
	 	onPopState((event) => {
	 		this.setState({
	 			currentTopicId: (event.state || {}).currentTopicId
	 			});

	 	});

	 	// axios.get('/api/topics')

	 	// .then(resp => {
	 	// 	this.setState({
	 	// 	topics: resp.data.topics
	 	// });
	 	// })
	 	// .catch(console.error);

	 	// ajax, listener, timers, ajax, 3rd partys
	 }

	 componentWillUnmount() {


	 	//clean all above

	 	onPopState(null); 

	   }
	   fetchTopic = (topicId) => {
	   	pushState(
	   		{ currentTopicId: topicId },
	   		`/topic/${topicId}`
	   		);

	   	//this.state.topics[topicId]
	   	//change name of topic

	   	api.fetchTopic(topicId).then(topic => {
	   		this.setState({
	   		currentTopicId: topic.id,
	   		topics: {
	   			...this.state.topics, 
	   			[topic.id]: topic
	   		}
	   		}); 
	   });
	 };


	    fetchTopicList = (topicId) => {
	   	pushState(
	   		{ currentTopicId: null },
	   		`/`
	   		);

	   	//this.state.topics[topicId]
	   	//change name of topic

	   	api.fetchTopicList().then(topics => {
	   		this.setState({
	   		currentTopicId: null,
	   		topics
	   		}); 
	   });
	 };

	 

	   	currentTopic() {

	   		return this.state.topics[this.state.currentTopicId]; 
	   		 
	   	}

	   	pageHeader() {
	 	if (this.state.currentTopicId) {

	 		return this.currentTopic().topicName;

	 	}

	 	return 'Topics';

	 }


	   currentContent() {
	   	if(this.state.currentTopicId) {  
	   	return <Topic 
	   			topicListClick={this.fetchTopicList}
	   			{...this.currentTopic()}/>;  
	   	}


	   	return <List onTopicClick={this.fetchTopic}
        	topics={this.state.topics} />; 

	   	 }
	   


	  render () {
	  return (
	  		<div className="App">
	        <Header message={this.pageHeader()} />
	        {this.currentContent()}
	        
	      </div>
	  );
	  }
	   }


export default App; 