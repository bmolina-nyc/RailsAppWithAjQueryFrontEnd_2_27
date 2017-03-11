
    $(function () {
  $(".js-next").on('click', function() {
    event.stopPropagation()
    var nextId = parseInt($(".js-next").attr("data-id")) + 1;

    $.get("/users/<%=@user.id%>/posts/" + nextId + ".json", function(data) {
      var post_data = data

      $('.postName').text(post_data['title']);
      $('#body').text(post_data['description'])
      $(".js-next").attr("data-id", post_data["id"]);
    });
  });
});
