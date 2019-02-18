$(document).ready(function (){
});

function searchRepositories() {
  name = document.getElementById('searchTerms').value;
  result = $.get('https://api.github.com/search/repositories?q=user:' + name);
  console.log(result);
}
