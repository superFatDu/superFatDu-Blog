<template>
	<div class="form">
		<div class="form-content">
			<div class="title">
				<span>Long time no see,how have you been?</span>
			</div>
			<div class="inp">
				<div class="userName">
					<span class="iconfont userName-icon" :class="{userIconBlue:userBlue}">&#xe6a3;</span><input type="text" name="userName" v-model="name" placeholder="input your account" autocomplete="off" @focus="userIconBlue" @blur="userIconNormal">
				</div>
				<div class="pwd">
					<span class="iconfont pwd-icon" :class="{pwdIconBlue:pwdBlue}">&#xe65e;</span><input type="text" name="pwd" v-model="password" placeholder="input your password" autocomplete="off" @focus="pwdIconBlue" @blur="pwdIconNormal">
				</div>
			</div>
			<div class="submit">
				<p @click="showSignUp">CREATE AN ACCOUNT</p>
				<span :class="{'el-icon-remove':warningShow}">{{err}}</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'LoginSignup',
	data () {
		return {
			name: '',
			password: '',
			err: '',
			userBlue: false,
			pwdBlue: false,
			warningShow: false
		}
	},
	methods: {
		showSignUp () {
			if(this.name == "" || this.password == ""){
				this.warningShow = true;
				this.err = " Both account and password can't be empty,plz refill.";
			}else{
				this.axios.post('/users/signUpCheck',{
					account: this.name
				}).then((response)=>{
					let res = response.data;
					if(res.status == '0'){
						if(res.result.count == 0){
								this.axios.post('/users/signUp',{
									Account: this.name,
									Password: this.password
								}).then((response)=>{
									let res = response.data;
									if(res.status == '0'){
										this.$emit("turnSignUp");
									}else{
										console.log(res.msg);
									}
								})
						}else{
							this.warningShow = true;
							this.err=" This account has already existed,plz refill."
						}
					}else{
						console.log(res.msg);
					}
				})
			}
		},
		userIconBlue () {
			this.userBlue = true;
		},
		userIconNormal () {
			this.userBlue = false;
		},
		pwdIconBlue () {
			this.pwdBlue = true;
		},
		pwdIconNormal () {
			this.pwdBlue = false;
		}
	}
}
</script>

<style lang="stylus" scoped>
	.form
		.form-content
			width 8.1rem
			margin 0 auto
			.title
				text-align center
				font-size .3rem
				line-height .6rem
				letter-spacing .05rem
				margin-bottom .6rem
			.userName,.pwd
				box-sizing border-box
				line-height .6rem
				font-size .3rem
				padding .05rem .2rem
				background #f2f4f8
				border-radius .1rem
				display flex
				.userName-icon,.pwd-icon
					font-size .35rem
					color #333
					padding 0 .1rem 0 0;
				.userIconBlue
					color #2872d8	
				.pwdIconBlue
					color #2872d8	
				input 
					flex 1
					padding 0 0 0 .2rem
					background #f2f4f8
			.pwd
				margin .25rem 0 .65rem 0
			.submit
				text-align center
				p
					width 8.1rem
					line-height .7rem
					font-size .3rem 
					text-align center
					background #2872d8
					color #fff
					border-radius .1rem
					cursor pointer
				span
					display inline-block
					margin-top .35rem
					font-size .25rem
					color #F31818
</style>