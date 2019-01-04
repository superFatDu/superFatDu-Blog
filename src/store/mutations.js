export default {
    loginName (state,name){
      state.name = name;
      try {
        sessionStorage.name = name;
      }catch (e) {

      }
    }
}