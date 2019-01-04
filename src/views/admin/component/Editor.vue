<template>
	<div class="editor">
    <p class="topTitle">文章录入/TYPING</p>
    <div class="editor-title">
      <span>标题</span>
      <el-input
        placeholder="巴啦啦能量，呼尼拉，魔仙变身……"
        v-model="editorTitle">
      </el-input>
    </div>
    <div class="editor-author">
      <span>作者</span>
      <el-input
        placeholder="我要送你999朵玫瑰花……"
        v-model="editorAuthor">
      </el-input>
    </div>
    <div class="editor-series">
      <span>分类</span>
      <el-select v-model="value" placeholder="万千世界，等你探索……" @change="handleSeriesValue">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div class="editor-abstract">
      <span>概述</span>
      <el-input
        type="textarea"
        :rows="2"
        placeholder="写完文章，再来画个眼睛……"
        v-model="textarea">
      </el-input>
    </div>
		<!-- bidirectional data binding（双向数据绑定） -->
    <div class="editor-box">
      <span>编辑</span>
      <quill-editor v-model="content"
        ref="myQuillEditor"
        :options="editorOption"
        @blur="onEditorBlur($event)"
        @focus="onEditorFocus($event)"
        @ready="onEditorReady($event)"
        @change="onEditorChange($event)"
        >
      </quill-editor>
    </div>
    <div class="edit-time">
      <span ref="timeStamp">{{ new Date() | dateFmt }}</span>
    </div>
	  <div class="editor-submit">
      <span>提交</span> 
      <a href="javascript:void" @click="handleEditor">提交</a>
    </div>
    <div class="footer-copyright">
      <p class="copyright">Page designed by superFatDu</p>
      <p class="copyright">&copy; 2018 In China  <img src="@/assets/img/China.png" alt=""></p>
    </div>
	</div>
</template>

<script>
import moment from 'moment'
export default {
	name: 'AdminEditor',
  data () {
    return {
      content: '<h3>这里是文章编辑器。</h3>',
      editorOption: {
        // some quill options
      },
      editorTitle: '',
      editorAuthor: '',
      textarea: '',
      options: [{
          value: '选项1',
          label: 'HTML'
        }, {
          value: '选项2',
          label: 'CSS'
        }, {
          value: '选项3',
          label: 'JS'
        }, {
          value: '选项4',
          label: '生活杂谈'
        }
      ],
      value: '',
      SeriesValue: ''

    }
  },
  // manually control the data synchronization
  // 如果需要手动控制数据同步，父组件需要显式地处理changed事件
  methods: {
    onEditorBlur(quill) {
      console.log('editor blur!', quill)
    },
    onEditorFocus(quill) {
      console.log('editor focus!', quill)
    },
    onEditorReady(quill) {
      console.log('editor ready!', quill)
    },
    onEditorChange({ quill, html, text }) {
      console.log('editor change!', quill, html, text)
      this.content = html
    },
    handleSeriesValue (value) {
      for(var items of this.options){
        if(items.value == value){
          this.SeriesValue = items.label;
        }
      }
      console.log(`SeriesValue: ${this.SeriesValue};author: ${this.editorAuthor};title: ${this.editorTitle}`)
    },
    handleEditor () {
      this.axios.post("/editor/handleEditors",{
        headerName: this.editorTitle,
        category: this.SeriesValue,
        author: this.editorAuthor,
        content: this.content,
        abstract: this.textarea,
        time: this.$refs.timeStamp.innerText
      }).then((response)=>{
        let res = response.data;
        if(res.status == '0'){
          this.$message({
            type: 'success',
            message: '陛下，文章已经添加到数据库了!'
          });
        }else{
          console.log(res.msg);
        }
      })
    }
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill
    }
  },
  mounted() {
    console.log('this is current quill instance object', this.editor)
  },
  filters: {
    dateFmt: function(el) {
      return moment(el).format("YYYY-MM-DD");
    }
  }
}
</script>
<style lang="stylus" scoped>
  >>> .ql-editor
    height 600px
    overflow-y auto
  >>> .ql-container
    height 601px
  .editor
    margin-top 100px
    padding 0 50px
    .quill-editor
      min-height 600px
      width 100%
      background #fff
    .topTitle
      font-size .32rem
      font-weight 600
      text-align center
      padding-bottom 30px
    .editor-title
      margin-bottom 20px
      display flex
      span
        font-size .28rem
        padding-right 20px
        font-weight 600
        white-space nowrap
        line-height 40px
    .editor-author
      margin-bottom 20px
      display flex
      span
        font-size .28rem
        padding-right 20px
        font-weight 600
        white-space nowrap
        line-height 40px
    .editor-series
      margin-bottom 20px
      display flex
      span
        font-size .28rem
        padding-right 20px
        font-weight 600
        white-space nowrap
        line-height 40px
    .editor-abstract
      margin-bottom 20px
      display flex
      span
        font-size .28rem
        padding-right 20px
        font-weight 600
        white-space nowrap
        line-height 40px
    .editor-box
      margin-bottom 20px
      display flex
      span
        font-size .28rem
        padding-right 20px
        font-weight 600
        white-space nowrap
        line-height 40px
    .edit-time
      display none
    .editor-submit
      margin-bottom 20px
      margin-top 0px
      display flex
      align-items center
      span
        font-size .28rem
        padding-right 20px
        font-weight 600
        white-space nowrap
        line-height 40px
      a
        font-size .28rem
        color #fff
        background #2872d8
        padding 10px 20px
        border-radius 5px
        &:hover
          background #2872d8e3
    .footer-copyright
        width 100%
        .copyright
          width 100%
          text-align center
          line-height 20px
          img
            height .5rem
</style>