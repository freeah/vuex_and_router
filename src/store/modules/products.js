
 var state = {
	all:[] //获取的商品
}

 var mutations = {
 	
	receive_product:function(state,products){
		console.log(products)
		state.all = products;
	},

	add_to_cart: function(state,productInfo){
		console.log(productInfo);
		console.log(state.all);
		state.all.find(function(p){
			console.log(p);
			return p.id === productInfo.id;
		}).inventory --;
	},

	delete_cart_product:function(state,productInfo){

		state.all.find(function(p){
		  return p.id === productInfo.id;
		}).inventory ++
	}
}




export default {
  state,
  mutations
}