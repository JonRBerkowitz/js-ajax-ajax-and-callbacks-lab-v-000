$(document).ready(function (){
});

function searchRepositories() {
  let searchTerms = $('#searchTerms').val();
  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, function(data) {
    $('#results').html(renderSearchResults(data));
  });
}

function renderSearchResults(data) {
  data.map(r => {
    console.log(r.name);
    `<li>a:${r.name}</li>`
  });
}
