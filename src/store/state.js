let accountName = ''
try {
  if(sessionStorage.name){
    accountName = sessionStorage.name
  }
}catch (e) {}

export default{
    name: accountName
}