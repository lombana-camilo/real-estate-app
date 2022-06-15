const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://bayut.p.rapidapi.com/agencies/list',
  params: {query: 'patriot', hitsPerPage: '25', page: '0', lang: 'en'},
  headers: {
    'X-RapidAPI-Key': 'c76f7136cemsh20b10850c595479p14ab61jsn9404ec113785',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
