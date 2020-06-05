import axios from 'axios'

const searchPhotos = (text) => {
  return axios.get('https://pixabay.com/api', {
    params: {
      key: '11513693-0c13f72a6c719a7b58dfc274d',
      q: text
    }
  })
}

export {
  searchPhotos
}