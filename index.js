function searchRepositories() {
  let searchTerms = $('#searchTerms').val();
  $.get(`https://api.github.com/search/repositories?q=user:${searchTerms}`, function(data) {
    console.log(data[0]);
    $('#results').html(data);
  });
}

$(document).ready(function (){
});
