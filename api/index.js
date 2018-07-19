import express from 'express';

import data from '../src/testData';

const router = express.Router();

const topics = data.topics.reduce((obj, topic) => {
   	obj[topic.id] = topic;
   	return obj; 
   	}, {}); 

router.get('/topics/', (req, res) => {
  res.send({
   topics: topics
   });
});

router.get('/topics/:topicId', (req, res) => {
  let topic = topics[req.params.topicId];
  topic.description = 'I think I need some lorem ips here';

  res.send(topic);
});

export default router;