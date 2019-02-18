$(document).ready(function (){
});

function searchRepositories() {
  name = document.getElementById('searchTerms').value;
  req.addEventListener('load', showRepositories);
  req = $.get('https://api.github.com/search/repositories?q=user:' + name);
  console.log(JSON.parse(result));
}

function showRepositories(result) {
  return `
    <div>
      <h2><a href="${result.html_url}">${result.name}</a></h2>
      <p><a href="#" data-repository="${result.name}" data-owner="${result.owner.login}" onclick="showCommits(this)">Show Commits</a></p>
      <p>${result.description}</p>
    </div>
    <hr>
  `
}