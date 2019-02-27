const APICodes = {
  successful_login: "Connexion réussie.",
  bad_credentials: "Identifiants incorrects."
};
  
export default new Proxy(APICodes, {
  get: (obj, prop) => (prop in obj ? obj[prop] : prop)
});
