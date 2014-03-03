function loadJSON(){
   var data_file = "js/data.json";
   var http_request = new XMLHttpRequest();
   try{
      // Opera 8.0+, Firefox, Chrome, Safari
      http_request = new XMLHttpRequest();
   }catch (e){
      // Internet Explorer Browsers
      try{
         http_request = new ActiveXObject("Msxml2.XMLHTTP");
      }catch (e) {
         try{
            http_request = new ActiveXObject("Microsoft.XMLHTTP");
         }catch (e){
            // Something went wrong
            alert("Your browser may not support AJAX, or refresh cause something went wrong");
            return false;
         }
      }
   }
   http_request.onreadystatechange  = function(){

      // readyState == 4 means the request was successful
      if (http_request.readyState == 4  ){
        // Javascript function JSON.parse to parse JSON data
        var jsonObj = JSON.parse(http_request.responseText);

        // My Entire JSON Object from data.json
        //console.log(jsonObj);
		
		var feedWrapper = document.getElementById('article-feed');
		
		for(var key in jsonObj){
			
			//create the articles
			var wrap = document.createElement("article");
			wrap.className = "wrap";		
			
			//create the title
			var title = document.createElement("h1");
			title.innerHTML = jsonObj[key].title;	
			wrap.appendChild(title);
			
			//creative the images
			var img = document.createElement("img");
			img.setAttribute('src', jsonObj[key].imageUrl);	
			img.setAttribute('alt', jsonObj[key].imageAlt);			
			wrap.appendChild(img);			
			
			//create the author
			var author = document.createElement("h2");
			author.innerHTML = jsonObj[key].author;	
			wrap.appendChild(author);
			
			//create descrtiption
			var description = document.createElement("p");
			description.innerHTML = jsonObj[key].description;	
			wrap.appendChild(description);
			
			//append the divs into the main one
			feedWrapper.appendChild(wrap);
		}
		
		

		
		
      }

   }
   http_request.open("GET", data_file, true);
   http_request.send();
}

//auto load loadJSON();