const BaseUrl = 'https://staging5.koyal.pk/api/v2/web/';

const APIS = {
  content: (page, limit) =>
    `${BaseUrl}content/intro?content_type=Home&page=${page}&limit=${limit}`,
};

export default APIS;
