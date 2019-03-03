const APICodes = {
  successful_login: "Connexion réussie.",
  bad_credentials: "Identifiants incorrects.",
  files_uploaded: "Fichiers mis en ligne."
};
  
export default new Proxy(APICodes, {
  get: (obj, prop) => (prop in obj ? obj[prop] : prop)
});
