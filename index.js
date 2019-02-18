$(document).ready(function (){
});

function searchRepositories() {
  let searchTerms = $('#searchTerms').val();
  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, function(data) {
    console.log(data.items[0].name)
    $('#results').html(renderSearchResults(data));
  });
}

function renderSearchResults(data) {
  data.items.map(r => {
    `<li>${r.name}</li>`
  });
}

function renderSearchResults(data) {
  data.items.map( result => renderSearchResult(result))
}