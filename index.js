$(document).ready(function (){
});

function searchRepositories() {
  name = document.getElementById('searchTerms').value;
  cosole.log(name);
  result = $.get('https://api.github.com/search/repositories?q=user:' + name);
  console.log(result);
}
