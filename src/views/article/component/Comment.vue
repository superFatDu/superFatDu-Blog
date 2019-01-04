<template>
  <div class="comment-container">
    <div class="wrapper">
    	<div class="comment-title">
    		<p id="eassay-comment"><span class="iconfont">&#xe6e5;</span> 评论</p>
    	</div>
    	<div class="write-comment">
    		<div class="not-login" v-show="LoginShow">
    			<router-link to="/login"><span class="not-login-btn" @click="saveArticleId">登录</span></router-link>&nbsp;&nbsp;说说你的看法
    		</div>
    		<div class="have-login" v-show="commentShow">
    			<div class="have-login-wrapper">
    				<img src="@/assets/img/brain.png" alt=""><div class="comment-word" contenteditable="true" ref="commentWord" @focus="handleFocus" @blur="handleBlur">说说你的看法</div>
    			</div>
    			<div class="enterPess">
    				坚决抵制粗俗言论！ <span @click="submitComment">评论</span>
    			</div>
    		</div>
    	</div>
      <div class="commentList-wrap">
          <div class="commentList" v-for="(item,index) in articleDetail">
              <div class="list-wrapper">
                  <img src="@/assets/img/brain.png" alt=""><div class="commentInfo">
                      <p class="title-name">{{item.comment_name}}</p>
                      <p class="speComment">{{item.comment_content}}</p>
                      <div class="footerInfo">
                          <span class="iconfont">&#xe605;</span><span style="cursor: not-allowed;">暂不支持评论</span>
                          &nbsp;&nbsp;
                          <span class="iconfont">&#xe6e8;</span><span>{{item.comment_time}}</span>
                      </div>
                      <!-- <div class="addComment">asdfa</div> -->
                  </div>
              </div>
          </div>
      </div>
      <div class="edit-time" style="display: none">
        <span ref="timeStamp">{{ new Date() | dateFmt }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'ArticleComment',
  props: {
    articleDetail: Array,
    length: Number
  },
  data () {
  	return {
  		LoginShow: true,
      commentShow: false
  	}
  },
  methods: {
  	handleFocus () {
  		this.$refs.commentWord.innerHTML = ""
  	},
  	handleBlur () {
      if(this.$refs.commentWord.innerText){

      }else{
        this.$refs.commentWord.innerHTML = "说说你的看法"
      }
  	},
    loginCheck () {
        if(this.$store.state.name){
            this.LoginShow = false;
            this.commentShow = true;
        }
    },
    submitComment () {
      var str = this.$route.path;
      var index = str.lastIndexOf("\/");
      var _id = str.substring(index+1,str.length);
      this.axios.post('/editor/submitComment',{
          comment_man: this.$store.state.name,
          comment_content: this.$refs.commentWord.innerText,
          comment_time: this.$refs.timeStamp.innerText,
          id: _id
      }).then((response)=>{
        let res = response.data;
        if(res.status == '0'){
          this.$message({
            type: 'success',
            message: '陛下，评论已经添加到数据库了!'
          });
          setTimeout(function(){
            location.reload();
          },3000)
        }else{
          console.log(res.msg)
        }
      })
    },
    saveArticleId () {
      var str = this.$route.path;
      sessionStorage['articlePath'] = str;
    }
  },
  created () {
    this.loginCheck();
  },
  filters: {
    dateFmt: function(el) {
      return moment(el).format("YYYY-MM-DD h:mm a");
    }
  }
}
</script>

<style lang="stylus" scoped>
  .comment-container
    width 50%
    margin 0px auto
    background #fff
    box-sizing border-box
    padding 20px 50px
    .wrapper
    	.comment-title
    		width 100%
    		text-align center
    		line-height .5rem
    		font-size .36rem
    	.write-comment
    		margin-top 15px
    		.not-login
    			width 100%
    			height 100px
    			background #f1f1f1
    			border-radius 5px
    			display flex
    			justify-content center
    			align-items center
    			.not-login-btn
    				padding 8px 15px
    				border-radius 5px
    				border 1px solid #2872d8
    				color #2872d8
    				font-size .2rem
    		.have-login
    			margin-top 10px
    			width 100%
    			background #f1f1f1
    			border-radius 5px
    			.have-login-wrapper
    				box-sizing border-box
    				padding 15px 20px
    				display flex
    				img
    					width 40px
    					height 40px
    					border-radius 50%
    					padding-right 10px
    				.comment-word
    					flex 1
    					border 1px solid #aaa
    					box-sizing border-box
    					padding 10px 10px
    					height 88px
    					font-size .28rem
    					border-radius 5px
    					background #fff
    			.enterPess
    				box-sizing border-box
    				padding 15px 20px 25px 20px
    				text-align right
    				span 
    					padding 8px 15px
    					color #fff
    					background #2872d8
    					border-radius 5px
    					cursor pointer
    	.commentList
    		.list-wrapper
    			box-sizing border-box
    			padding 15px 0
    			display flex
	    		img
	    			width 30px
	    			height 30px 
	    			border-radius 50%
	    			padding-right 10px
	    		.commentInfo
	    			width calc(100% - 40px)
	    			.title-name
	    				line-height 30px
	    				font-size .3rem
	    				font-weight 600
	    			.speComment
	    				margin-top 5px
	    				line-height 20px
	    			.footerInfo
	    				margin-top 10px
	    				color #bbb         
	    			.addComment
	    				margin-top 15px
	    				border 1px solid #f1f1f1
	    				box-sizing border-box
	    				padding 10px 20px
      .edit-time
        display none     
</style>