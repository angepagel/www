const APICodes = {

};
  
export default new Proxy(APICodes, {
  get: (obj, prop) => (prop in obj ? obj[prop] : prop)
});
