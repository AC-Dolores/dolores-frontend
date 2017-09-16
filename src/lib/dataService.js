export const extractTopicData = (data) => ({
  id: data.id || '',
  title: data.title || '',
  summary: data.summary || '',
  order: data.order || ''
});

export const extractNewsData = (data) => ({
  id: data.id || '',
  source: data.siteName || '',
  summary: data.summary ||'',
  title: data.title || '',
  url: data.url || '',
  editor: data.authorName || ''
});

