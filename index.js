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
  return data.items.map(r => {
    `<li>a:${r.name}</li>`
    console.log(r);
  });
}
