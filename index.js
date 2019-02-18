function searchRepositories() {
  let searchTerms = $('#searchTerms').val();
  $.get(`https://api.github.com/search/repositories?q=user:${searchTerms}`, function(data) {
    console.log(data.items[0]);
    $('#results').html(data.items[0]);
  });
}

$(document).ready(function (){
});
