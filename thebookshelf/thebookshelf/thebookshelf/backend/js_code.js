

$(document).ready(function () {
    $('#video-section-banner').click(function () {
        console.log('Video section clicked.');
        $('#video-section-content').slideToggle('fast');
        
    });
    console.log('Action taken');

                   

    $('#fetcher').click(function () {
        console.log('Data fetch requested');
        //Send a request to the server;
        var requestString = 'http://localhost:5555/videos';

        $.get(requestString, function (data, status) {
            console.log(data[0])
            console.log(data[0].videoLink)

            data.forEach(function (entry) {
                console.log(entry)
                videoContent = entry.videoLink
                console.log(videoContent)
                document.getElementById('video-section-content').innerHTML += '<div class="col-6"><div id="vidFrame"><iframe id =responsiveIframe src = ' + videoContent + 'frameborder = "0" allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen = ""></iframe></div></div>'              
            });                
        });
    });

    //$.post(postString, event
      //      function (data, status, jqXHR) {// success callback;
       //     $('p').append('status: ' + status + ', data: ' + data);
        //});
   // $('#sender').on("submit",function () {
   //     event.preventDefault();
     //   console.log('submit!');
      //  var youtubeLink = $("#videoInput").val();
      //  console.log('submitted link', youtubeLink);
       // var postString = 'http://localhost:5555/videos';
        //$("#videoInput").submit();
        //return true;
    //});

   
    //$('#sender').click(function () {
    //    console.log($('#videoInput').serialize());
      //  $.post('http://localhost:5555/videos', $('#videoInput').serialize(), function (data) {
            // ... do something with response from server
       // },
         //   'json' // I expect a JSON response
       // );
    //});

    $('#sender').click(function () {
        $.ajax({
            url: 'http://localhost:5555/videos',
            type: 'post',
            dataType: 'json',
            data: $('#videoInput').serialize(),
            success: function (data) {
                console.log('this is the data', data)
            }
        });
    });
    
   

    $('.toggleImg').mouseenter(function () {
        $(".imgDetails").finish().slideToggle(400);
    });

    $('.toggleImg').mouseleave(function () {
        $(".imgDetails").finish().slideToggle(400);
    });


});
    
 
    
