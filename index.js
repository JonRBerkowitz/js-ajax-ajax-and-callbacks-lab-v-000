$(document).ready(function (){
});

function searchRepositories() {
  let searchTerms = $('#searchTerms').val();
  $.get(`https://api.github.com/search/repositories?q=user:${searchTerms}`, function(data) {
    console.log(data.items[0]);
    let r = data.items[0];
    document.getElementById('results').innerHTML = data.items[0];
  });
}
