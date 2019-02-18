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
  let result = []
  result = data.items.map(r => {
    `<div>
      <h2><a href="${result.html_url}">${result.name}</a></h2>
      <p><a href="#" data-repository="${result.name}"  onclick="showCommits(this)">Show Commits</a></p>
      <p>${result.description}</p>
    </div>
    <hr>`
  });
  console.log(result);
  return result;
}
