const params = {
  header:{
    'Accept':'application/json',
    'Content Type':'application/json',
  }
}

const URL='http://localhost:3001/api'

function getNews(subject) {
  return fetch(`${URL}/${subject}`,params).then(response=>response.json()).catch(err=>{
    console.error('Ocorreu um err', err);
  })  
}

function getNewsById(subject,id) {
  return fetch(`${URL}/${subject}/${id}`,params).then(response=>response.json()).catch(err=>{
    console.error('Ocorreu um err', err);
  })  
}

export default {
  getNews,getNewsById
};