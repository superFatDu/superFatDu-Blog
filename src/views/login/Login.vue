<template>
	<div class="container">
		<div class="pannel">
			<div class="title">superFatDu</div>
			<login-signin v-show="showSignin" @turnSignIn="turnSignIn"></login-signin>
			<login-signup v-show="showSignup" @turnSignUp="turnSignUp"></login-signup>
		</div>
		<div class="footer">
			<login-copyright></login-copyright>
		</div> 
		<canvas id="myCanvas"></canvas>
	</div>
</template>

<script>
import '@/assets/js/loginBg.js'
import LoginSignin from './component/Signin'
import LoginSignup from './component/Signup'
import LoginCopyright from './component/CopyRight'
export default {
	name: 'Login',
	data () {
		return {
			showSignin: true,
			showSignup: false
		}
	},
	components: {
		LoginSignin,
		LoginSignup,
		LoginCopyright
	},
	methods: {
		turnSignIn () {
			this.showSignin = false;
			this.showSignup = true;
		},
		turnSignUp () {
			this.showSignin = true;
			this.showSignup = false;
		}
	}
}
</script>

<style lang="stylus" scoped>
	.container
		width 100%
		height 100%
		position relative
		.pannel
			width 12.5rem
			height 7rem
			border 1px solid #ddd
			box-shadow 0 10px 60px rgba(0,0,0,.3), 0 0 20px rgba(0,0,0,.1);
			background #fff
			position absolute
			top 50%
			left 50%
			transform translate(-50%,-50%)
			.title
				text-align center
				font-size 1rem
				font-weight 600
				color #2872d8
				padding .45rem 0 .2rem 0
		.footer
			position absolute
			left 50%
			bottom .2rem
			transform translateX(-50%)
</style>