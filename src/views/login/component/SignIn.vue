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
					<span class="iconfont pwd-icon" :class="{pwdIconBlue:pwdBlue}">&#xe65e;</span><input type="password" name="pwd" v-model="password" placeholder="input your password" autocomplete="off" @focus="pwdIconBlue" @blur="pwdIconNormal">
				</div>
			</div>
			<div class="submit">
				<p class="in" @click="goToIndex">SIGN IN</p>
				<p class="up" @click="createAccount">SIGN UP</p>
			</div>
			<p class="err" :class="{'el-icon-remove':warningShow}">{{err}}</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'LoginSignin',
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
		goToIndex () {
			if(this.name == "" || this.password == ""){
				this.err = " Both account and password can't be empty,plz refill.";
				this.warningShow = true;
			}else{
				this.axios.post('/users/signIn',{
					name: this.name,
					password: this.password
				}).then((response)=>{
					var res = response.data;
					if(res.status == '0'){
						if(res.result.count){
							/*this.$store.dispatch('loginName',this.name);*/
							this.$store.dispatch("loginName",this.name);
							var article_path = sessionStorage['articlePath'];
							if(res.result.list[0].role == 0){
								if(article_path){
									this.$router.push({'path':article_path});
								}else{
									this.$router.push({'path':'/index'});
								}
								
							}else{
								if(article_path){
									this.$router.push({'path':article_path});
								}else{
									this.$router.push({'path':'/'});
								}
							}
						}else{
							this.err = " plz check your account and password and retry.";
							this.warningShow = true;
						}
					}else{
						
					}
				})
			}
		},
		createAccount () {
			this.$emit("turnSignIn");
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
				width 8.1rem
				text-align center
				display flex
				justify-content space-between
				p
					width 3.95rem
					line-height .7rem
					font-size .3rem 
					text-align center
					background #2872d8
					color #fff
					border-radius .1rem
					cursor pointer
				.up
					color #2872d8
					background #f2f4f8
					transition all .5s
				.up:hover
					color #fff
					background #2872d8
			.err
				display block
				width 100%
				margin-top .35rem
				text-align center
				font-size .25rem
				color #F31818
</style>