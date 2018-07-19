

import React from 'react'; 
import ReactDOMServer from 'react-dom/server'; 

import App from './src/App'
import config from './config';

import axios from 'axios'; 

const getApiUrl = topicId => {

	if (topicId) { 
		return `${config.serverUrl}/api/topics/${topicId}`; 
	}
	return `${config.serverUrl}/api/topics`;
};


const getInitialData = (topicId, apiData) => {
if (topicId) {
	return {
		currenttopicId: apiData.id,
		topics: {
			[apiData.id]: apiData 
		}
	};

}

return {
	topics: apiData.topics
};

};




const serverRender = (topicId) => 
axios.get(getApiUrl(topicId))
	.then(resp => {
		const initialData = getInitialData(topicId, resp.data);
		return { 
			initialMarkup: ReactDOMServer.renderToString(
			<App initialData={initialData} />
			),
			initialData
			 };

	});

	export default serverRender;  