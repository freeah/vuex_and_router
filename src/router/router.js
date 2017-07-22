import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home'
import News from '../components/news'
import NewDetail from '../components/newDetail'

Vue.use(VueRouter)

const routes=[
	{
		path:'/',
		component:Home
	},
	{
		path:'/news',
		component:News,
		children:[
			{
				path:'newdetial',
				component:NewDetail
			}
		]
	}
]

export default new VueRouter({
	routes
})
