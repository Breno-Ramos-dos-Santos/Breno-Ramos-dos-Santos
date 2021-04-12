let url = 'https://api.sheety.co/261223dbaf0090e81038dd075ff86f00/mokaro/página1';
fetch(url)
.then((response) => response.json())
.then(json => {
  // Do something with the data
  console.log(json.página1S);
});