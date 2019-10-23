GET: $(document).ready(
		function(){
			// GET REQUEST
			$("#accessportal").click(function(event){
				event.preventDefault();
				ajaxGet();
		});

		function ajaxGet(){
			$.ajax({
				url:"http://localhost:8080/greet",
			    success : function(result){
				$("#apiResponse").html(result);
			    }
			});
			}
		})
		