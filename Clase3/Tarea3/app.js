const fetchBtn = document.getElementById('fetch-btn');
const axiosBtn = document.getElementById('axios-btn');
const dataContainer = document.getElementById('data-container');
const searchInput = document.getElementById('search-input');
const prevPageBtn = document.getElementById('prev-page');
const nextPageBtn = document.getElementById('next-page');
const pageNumberSpan = document.getElementById('page-number');

let currentPage = 1;
let currentSearch = '';
let useAxios = false;

// Función principal para obtener datos
function fetchCharacters(page = 1, name = '', useAxiosMethod = false) {
  const url = `https://rickandmortyapi.com/api/character?page=${page}&name=${name}`;

  const handler = useAxiosMethod ? axios.get(url) : fetch(url).then(res => {
    if (!res.ok) throw new Error('No se encontraron personajes.');
    return res.json();
  });

  handler
    .then(response => {
      const data = useAxiosMethod ? response.data : response;
      renderCharacters(data.results);
      updatePagination(data.info);
    })
    .catch(error => {
      console.error('Error:', error);
      dataContainer.innerHTML = `<p>No se encontraron personajes con ese nombre.</p>`;
    });
}

function renderCharacters(characters) {
  dataContainer.innerHTML = '';
  characters.forEach(character => {
    const charEl = document.createElement('div');
    charEl.classList.add('character');
    charEl.innerHTML = `
      <h3>${character.name}</h3>
      <img src="${character.image}" alt="${character.name}">
      <p><strong>Status:</strong> ${character.status}</p>
      <p><strong>Species:</strong> ${character.species}</p>
      <p><strong>Origin:</strong> ${character.origin.name}</p>
    `;
    dataContainer.appendChild(charEl);
  });
}

function renderCharacters(characters) {
  dataContainer.innerHTML = '';
  characters.forEach(character => {
    const charEl = document.createElement('div');
    charEl.classList.add('character');

    // Crear contenedor HTML básico
    charEl.innerHTML = `
      <h3>${character.name}</h3>
      <img src="${character.image}" alt="${character.name}">
      <p><strong>Status:</strong> ${character.status}</p>
      <p><strong>Species:</strong> ${character.species}</p>
      <p><strong>Origin:</strong> ${character.origin.name}</p>
      <p><strong>Episodios:</strong> Cargando...</p>
    `;

    dataContainer.appendChild(charEl);

    // Obtener episodios (limitamos a los primeros 3 para no saturar)
    const episodeURLs = character.episode.slice(0, 3);

    Promise.all(episodeURLs.map(url => fetch(url).then(res => res.json())))
    //Promise.all(episodeURLs.map(url => axios.get(url).then(res => res.data))) Con axios
      .then(episodes => {
        const episodeNames = episodes.map(ep => ep.name).join(', ');
        charEl.querySelector('p:last-of-type').innerHTML = `<strong>Episodios:</strong> ${episodeNames}`;
      })
      .catch(err => {
        charEl.querySelector('p:last-of-type').innerHTML = `<strong>Episodios:</strong> No disponibles`;
      });
  });
}

function updatePagination(info) {
  pageNumberSpan.textContent = `Página ${currentPage}`;
  prevPageBtn.disabled = !info.prev;
  nextPageBtn.disabled = !info.next;
}

// Eventos

fetchBtn.addEventListener('click', () => {
  useAxios = false;
  currentPage = 1;
  currentSearch = searchInput.value;
  fetchCharacters(currentPage, currentSearch, useAxios);
});

axiosBtn.addEventListener('click', () => {
  useAxios = true;
  currentPage = 1;
  currentSearch = searchInput.value;
  fetchCharacters(currentPage, currentSearch, useAxios);
});

prevPageBtn.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    fetchCharacters(currentPage, currentSearch, useAxios);
  }
});

nextPageBtn.addEventListener('click', () => {
  currentPage++;
  fetchCharacters(currentPage, currentSearch, useAxios);
});
