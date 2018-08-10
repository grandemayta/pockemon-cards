const fetchWrapper = url => fetch(url).then(response => response.json()).then(data => data);

export default fetchWrapper;
