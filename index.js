function searchRepositories() {
  let searchTerms = $('#searchTerms').val();
  $.get(`https://api.github.com/search/repositories?q=user:${searchTerms}`, function(data) {
    $('#results').html(showRepositories(data));
    console.log(data);
  });
}

function showRepositories(results) {
  console.log(results[0].name);
  results.item.map(
    `<div>
      <h2><a href="${result.html_url}">${result.name}</a></h2>
      <p><a href="#" data-repository="${result.name}" data-owner="${result.owner.login}" onclick="showCommits(this)">Show Commits</a></p>
      <p>${result.description}</p>
    </div>
    <hr>`
  )
}

$(document).ready(function (){
});
