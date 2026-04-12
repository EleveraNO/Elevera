export interface Location {
  slug: string;
  name: string;
  region: string;
  distance: string;
  localRef: string;
  marketNote: string;
}

export const molde: Location = {
  slug: "molde",
  name: "Molde",
  region: "Romsdal",
  distance: "ca. 1 time fra Ålesund",
  localRef: "Rosenes by ved Romsdalsfjorden",
  marketNote: "Molde er en by i vekst med et aktivt næringsliv innen turisme, industri og offentlig sektor. Mange bedrifter konkurrerer om synlighet lokalt.",
};

export const kristiansund: Location = {
  slug: "kristiansund",
  name: "Kristiansund",
  region: "Nordmøre",
  distance: "ca. 1.5 time fra Ålesund",
  localRef: "Olje- og klippfiskbyen på Nordmøre",
  marketNote: "Kristiansund har et sterkt næringsgrunnlag fra olje, fisk og maritim industri. Konkurransen om digitale kunder er lavere enn i større byer — det gir muligheter.",
};
