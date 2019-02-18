$(document).ready(function (){
});

function searchRepositories() {
  name = document.getElementById('searchTerms').value;
  req.addEventListener('load', showRepositories);
  req = $.get('https://api.github.com/search/repositories?q=user:' + name);
  console.log(JSON.parse(result));
}
