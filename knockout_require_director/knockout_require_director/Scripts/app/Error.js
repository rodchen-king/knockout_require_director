define( function () {
	function init() {
		//alert("this is init method");
	}

	var controllers = {
		'/' : function(){
			//alert(" this is the controller code");
		}
	}

	function afterRender() {
		//alert(123);
		//alert("this is atferrender");
	}

	return {
		init : init,
		controllers: controllers,
		afterRender: afterRender
	}
});
