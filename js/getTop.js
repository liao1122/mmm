$(function () {
  $.ajax({
    url: "http://193.112.55.79:9090/api/getbaicaijiatitle",
    type: "get",
    dataType: "json",
    success: function (res) {
      var htmlStr = template("daoHan", {
        data: res.result
      })
      $("#top ul").html(htmlStr);
    }
  })
})

$('#top ').on('click', 'li', function (e) {
  // console.log(e.target);
  titleid = $(e.target).attr('data-id');
  // console.log(titleid);

  $.get("http://193.112.55.79:9090/api/getbaicaijiaproduct", 'titleid=' + titleid,
    function (res) {    
      $('.goods').html(
        template('goodsTmp', {
            res: res.result
          })
      )
    },
    "json"
  );
})


var titleid = 0;
$.get("http://193.112.55.79:9090/api/getbaicaijiaproduct", 'titleid=' + titleid,
    function (res) {    
      $('.goods').html(
        template('goodsTmp', {
            res: res.result
          })
      )
    },
    "json"
  );