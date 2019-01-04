<template>
	<div class="admin">
		<admin-header @handleNavShow="handleNavShow"></admin-header>
		<div class="admin-editor-box" v-show="editorBox">
			<admin-editor></admin-editor>
		</div>
		<div class="admin-management-box" v-show="managementBox">
			<admin-management></admin-management>
		</div>
	</div>
</template>

<script>
import AdminHeader from './component/Header'
import AdminEditor from './component/Editor'
import AdminManagement from './component/Management'
export default {
	name: 'AdminIndex',
	components: {
		AdminHeader,
		AdminEditor,
		AdminManagement
	},
	data () {
		return {
			editorBox: false,
			managementBox: true
		}
	},
	methods: {
		handleNavShow (e) {
			if(e == 0){
				this.editorBox = false;
				this.managementBox = true;
			}else if(e == 1){
				this.editorBox = true;
				this.managementBox = false;
			}else{
				console.log("err")
			}
		},
		handleAdmin () {
			if(this.$store.state.name != "superFatDu" || this.$store.state.name == ''){
				this.$router.push({'path':'/'});
			}
		}
	},
	created () {
		this.handleAdmin();
	}
}
</script>

<style lang="stylus" scoped>
	
</style>