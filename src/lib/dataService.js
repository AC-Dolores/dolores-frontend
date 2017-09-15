export const extractTopicData = (data) => ({
  id: data.id || '',
  title: data.title || '',
  summary: data.summary || '',
  order: data.order || ''
});
