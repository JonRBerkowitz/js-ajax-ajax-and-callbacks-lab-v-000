$(document).ready(function (){
});

function searchRepositories() {
  let searchTerms = $('#searchTerms').val();
  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, function(data) {
    $('#results').html(renderSearchResults(data));
  });
}

function renderSearchResults(data) {
  console.log(data.items);
  let results = data.items.map(r => {
    console.log(r.name);
    r.name
  });
  console.log(results);
}
