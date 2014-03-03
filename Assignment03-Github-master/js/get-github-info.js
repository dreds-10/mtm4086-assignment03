
$('#save').click(function () {
    // add loading image to div
    $('#loading').html('<img src="preloader.gif"> loading...');
	
	//clean the div before putting content
	$('#loaded').empty();
	
    
    // run ajax request
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "https://api.github.com/users/dreds-10",
        success: function (data) {
            console.log(data);
            setTimeout(function () {
				
				var d = new Date(data.created_at);
				var userDate = $.datepicker.formatDate('d M, y', d);
				
				var d2 = new Date(data.updated_at);
				var userUpdate = $.datepicker.formatDate('d M,y', d2);
				
				
				//hide the loading icon after content is loaded
				$('#loading').empty();				
				
				
                $('#loaded').html('<img src="' + data.avatar_url + '" id="avatar"><br>'  + "<div id='header'><h2>" + data.login + " (" + data.name + ")" + "</h2>" + '<a href="' + data.html_url + '">' +data.html_url + '</a>' + "</div>" + "<div class='stats-wrap clearfix'>" +"<div class='stats no'>" + "<span>" + data.public_repos + "</span>" + 'Public repos' + "</div>" + "<div class='stats'>" + "<span>" + data.followers + "</span>" + 'Followers' + "</div>" + "<div class='stats'>" + "<span>" + data.following + "</span>" + 'Following' + "</div>" + "<div class='stats no'>" + "<span>" + userDate + "</span>" + 'Created Account' + "</div>" + "<div class='stats'>" + "<span>" + userUpdate + "</span>" + 'Last Updated' + "</div>" + "<div class='stats'>" + "<span>" + data.type + "</span>" + 'Account Type' + "</div>"+ "</div>");
				
            }, 2000);
        }
    });
});




$('#save2').click(function () {
    // add loading image to div
    $('#loading').html('<img src="preloader.gif"> loading...');
	
	//clean the div before putting content
	$('#loaded').empty();
	
    
    // run ajax request
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "https://api.github.com/users/brandonbrule",
        success: function (data) {
            console.log(data);
            setTimeout(function () {
				
				var d = new Date(data.created_at);
				var userDate = $.datepicker.formatDate('d M, y', d);
				
				var d2 = new Date(data.updated_at);
				var userUpdate = $.datepicker.formatDate('d M,y', d2);
				
				
				//hide the loading icon before the content is loaded
				$('#loading').empty();				
				
				
                $('#loaded').html('<img src="' + data.avatar_url + '" id="avatar"><br>'  + "<div id='header'><h2>" + data.login + " (" + data.name + ")" + "</h2>" + '<a href="' + data.html_url + '">' +data.html_url + '</a>' + "</div>" + "<div class='stats-wrap clearfix'>" +"<div class='stats no'>" + "<span>" + data.public_repos + "</span>" + 'Public repos' + "</div>" + "<div class='stats'>" + "<span>" + data.followers + "</span>" + 'Followers' + "</div>" + "<div class='stats'>" + "<span>" + data.following + "</span>" + 'Following' + "</div>" + "<div class='stats no'>" + "<span>" + userDate + "</span>" + 'Created Account' + "</div>" + "<div class='stats'>" + "<span>" + userUpdate + "</span>" + 'Last Updated' + "</div>" + "<div class='stats'>" + "<span>" + data.type + "</span>" + 'Account Type' + "</div>"+ "</div>");
				
            }, 2000);
        }
    });
});

