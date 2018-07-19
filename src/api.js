

import axios from 'axios'; 

export const fetchTopic = topicId => {
	
	return axios.get(`/api/topics/${topicId}`)
	.then(resp => resp.data); 
};


export const fetchTopicList = () => {
	
	return axios.get(`/api/topics`)
	.then(resp => resp.data.topics); 
};