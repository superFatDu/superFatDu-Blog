<template>
	<div class="management">
		<p class="topTitle">文章管理/MANAGE</p>
		<div class="search-nav">
			<div class="inCategory">
				<span>按类别：</span>
				<el-select v-model="value" clearable placeholder="万千世界，等你探索……" @change="handleSeriesValue">
	        <el-option
	          v-for="item in options"
	          :key="item.value"
	          :label="item.label"
	          :value="item.value">
	        </el-option>
	      </el-select>
			</div>
			<div class="inTime">
				<div class="block">
			    <span>按日期：</span>
			    <el-date-picker
			      v-model="value1"
			      type="date"
			      placeholder="选择日期"
            value-format="yyyy-MM-dd"
            @change="handleTimePicker"
          >
			    </el-date-picker>
			  </div>
			</div>
			<div class="search">
				<el-button type="primary" icon="el-icon-search" @click="conditionSearch">搜索</el-button>
			</div>
		</div>
		<div class="manage-table">
			<el-table
		    :data="tableData"
		    border
		    stripe
		    style="width: 100%">
        <el-table-column
          label="标题">
          <template slot-scope="scope">
            <i class="el-icon-document"></i>
            <span style="margin-left: 10px">{{ scope.row.article_name }}</span>
          </template>
        </el-table-column>

        <el-table-column
          label="类别">
          <template slot-scope="scope">
            <i class="el-icon-news"></i>
            <span style="margin-left: 10px">{{ scope.row.category }}</span>
          </template>
        </el-table-column>

        <el-table-column
          label="作者"
        >
          <template slot-scope="scope">
            <i class="el-icon-edit"></i>
            <span style="margin-left: 10px">{{ scope.row.author }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="阅读量">
          <template slot-scope="scope">
            <i class="el-icon-view"></i>
            <span style="margin-left: 10px">{{ scope.row.read_num }}</span>
          </template>
        </el-table-column>

		    <el-table-column
		      label="日期">
		      <template slot-scope="scope">
		        <i class="el-icon-time"></i>
		        <span style="margin-left: 10px">{{ scope.row.time }}</span>
		      </template>
		    </el-table-column>

		    <el-table-column label="操作">
		      <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              icon="el-icon-setting"
              @click="handleEdit(scope.$index, scope.row)"></el-button>
            <el-button
		          size="mini"
		          type="danger"
              icon="el-icon-delete"
		          @click="handleDelete(scope.$index, scope.row)"></el-button>
            <!-- <el-button :plain="true" @click="handleEdit(scope.$index, scope.row)"></el-button> -->
		      </template>
		    </el-table-column>
		  </el-table>
		</div>
    <div class="pagination">
        <manage-pagination :count="article_count" @handlePage="handlePage"></manage-pagination>
      </div>
	</div>
</template>

<script>
import ManagePagination from './Pagination'
export default {
  name: 'AdminManagement',
  components: {
    ManagePagination
  },
	data () {
		return {
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
      SeriesValue: '',
      value1: '',
      tableData: [],
      article_count: 0,
      conditions: []
		}
	},
	methods: {
		handleSeriesValue (value) {
      for(var items of this.options){
        if(items.value == value){
          this.SeriesValue = items.label;
        }
      }
      console.log(`SeriesValue: ${this.SeriesValue};time: ${this.value1}`)
    },
    handleEdit(index, row) {
      console.log(index, row);
      this.$message({
        showClose: true,
        message: '抢修中，博主很懒，其实就是没做 ʅ(‾◡◝)ʃ ',
        type: 'error'
      })
    },
    handleDelete(index, row) {
      console.log(index, row._id);
      this.tableData.splice(index,1);
      this.axios.post('/editor/deleteArticle',{
        id: row._id
      }).then((response)=>{
        let res = response.data;
        if(res.status == '0'){
          this.$message({
            type: 'success',
            message: '陛下，文章已经拖出去斩首了!'
          });
        }else{
          console.log(res.msg)
        }
      })
    },
    handleTimePicker (val) {
      console.log("日期："+val)
    },
    getArticleInfo () {
      this.axios.get('/editor/getArticleInfo').then((response)=>{
        let res = response.data;
        if(res.status == '0'){
          for(let i = 0;i < 15;i++){
            var temp = [];
            this.tableData.push(res.result.list[i]);
          }
          this.article_count = res.result.count;
        }else{
          console.log(res.msg);
        }
      })
    },
    conditionSearch () {
      if(this.SeriesValue == ''&&this.value1 ==''){
        this.$message({
          type: 'error',
          message: '陛下，至少选一个吧!'
        });
        return;
      }
      this.axios.post('/editor/conditionSearch',{
        category: this.SeriesValue,
        time: this.value1
      }).then((response)=>{
        let res = response.data;
        if(res.status == '0'){
          if(res.result.count == 0){
            this.tableData = [];
            this.$message({
              type: 'warning',
              message: '陛下，翻箱倒柜也没有找到啊!'
            });
          }else{
            this.tableData = res.result.list;
            this.article_count = res.result.count;
          }
        }else{
          console.log(res.msg)
        }
      })
    },
    handlePage(index) {
      console.log("当前页码："+index);
      this.axios.post('/editor/getHandlePage',{
        pageNum: index,
        category: this.SeriesValue,
        time: this.value1
      }).then((response)=>{
        let res = response.data;
        if(res.status == '0'){
          this.tableData = res.result.list;
        }else{
          console.log(res.msg)
        }
      })
    }
	},
  created () {
    this.getArticleInfo();
  }
}
</script>

<style lang="stylus" scoped>
	.management
		margin-top 100px
		padding 0 50px
		.topTitle
			font-size .32rem
			font-weight 600
			text-align center
			padding-bottom 30px
		.search-nav
			display flex
			margin-bottom 20px
			.inCategory
			.inTime
				margin-right 20px  
		.manage-table
			margin-bottom 20px     
</style>
