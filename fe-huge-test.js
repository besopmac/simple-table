/**
 * Gets an array of the countries.
 *
 * @return {Promise.<TResult>|*}
 */
function getCountriesList() {
  const endpoint = 'https://restcountries.eu/rest/v2/all';

  return fetch(endpoint)
    .then((res) => res.json());
}

/**
 * Creates DOM as string for the country block element
 *
 * @param {String} name
 * @param {String} flag
 * @param {String} capital
 * @param {String} currency
 * @param {Array} languages
 * @returns {String} DOM as string
 */
function createCountryDOM({ name, flag, capital, languages, currencies, code }) {
  return (`
    <article class="card">
      <header>
      <img class="country-flag rounded" src="${flag}" alt="flag ${name}">
      <h2 class="title">${name}</h2>
      </header>
      <div class="info">
        <p>Capital: ${capital}</p>
        <p>Currency: ${currencies.map((name) => (name.name))}</p>
        <p>Languages: ${languages.map((lang) => (lang.iso639_1)).join(',')}</p>
        <p>Code ISO: </p>
      </div>
    </article>
  `);
};

/**
 * Mounts a list of countries onto a given node.
 *
 * @param {Object} node
 * @param {Array} data Country list
 */
function mountCountryList(node, data) {
  const countriesDOM = data.map(createCountryDOM);

  node.innerHTML = countriesDOM.join('');
}

/**
 * Builds the app.
 *
 * @param {Array} data Country list
 */
function buildApp(data) {
  const nodeToMountCountries = document.querySelector('.mount-content-countries');

  mountCountryList(nodeToMountCountries, data);
}

/**
 * Builds the app once the data has been fetched.
 */
getCountriesList().then(buildApp);
