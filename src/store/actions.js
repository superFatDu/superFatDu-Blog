export default {
     loginName (ctx,name){
     	console.log(name);
      ctx.commit("loginName",name)
    }
}