$(document).ready(function (){
});

function searchRepositories() {
  let searchTerms = $('#searchTerms').val();
  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, function(data) {
    $('#results').html(renderSearchResults(data));
  });
}

function renderSearchResults(data) {
  let results = data.items.map(result => {
    return
    `${result.name}`
  });
  console.log(results);
}
