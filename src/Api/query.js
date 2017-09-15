import api from './api';
import { READHUBENDPOINT } from '../config';
import { extractTopicData } from '../lib/dataService'

export const getTopics = (lastCursor = 0) => {
  const params = lastCursor ? `?lastCursor=${lastCursor}&pageSize=10` : `?pageSize=10`;
  const path = `${READHUBENDPOINT}/topic` + params;
  return api(path).then(resp => resp.data.map(item => extractTopicData(item)))
};
