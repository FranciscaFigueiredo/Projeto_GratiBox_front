const api = process.env.NODE_ENV === 'production' ? 'https://gratibox-francisca.herokuapp.com' : 'http://localhost:4000';
console.log(api)
export {
  api,
};
