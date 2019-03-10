const APICodes = {
  successful_login: "Connexion réussie.",
  bad_credentials: "Identifiants incorrects.",
  files_uploaded: "Fichiers mis en ligne.",
  post_created: "Article de blog créé.",
  post_updated: "Article de blog mis à jour.",
  post_deleted: "Article de blog supprimé."
};
  
export default new Proxy(APICodes, {
  get: (obj, prop) => (prop in obj ? obj[prop] : prop)
});
