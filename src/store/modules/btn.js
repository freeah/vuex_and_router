
 var state = {
	//all:[] //获取的商品
	count1:0
}

 var mutations = {
	add_count1:function(){
		console.log(state.count1);
		state.count1++
	},
	reduct_count1:function(){
		console.log(state.count1)
		state.count1--
	}
}




export default {
  state,
  mutations
}