import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "https://keycloak.marvel.xcommerceweb.com.br/",
  realm: "xcommerce",
  clientId: "xcommerce-app-test",
});

export default keycloak;
