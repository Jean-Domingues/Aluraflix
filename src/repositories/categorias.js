import URL from '../config';

const URL_EMBED = `${URL}/categorias?_embed=videos`;

function getAllWithVideos() {
  return fetch(URL_EMBED)
    .then(async (res) => {
      if (res.ok) {
        const resposta = await res.json();
        return resposta;
      }

      throw new Error('Não foi possivel obter os dados: (');
    });
}

export default {
  getAllWithVideos,
};
