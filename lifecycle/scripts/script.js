const app = new Vue({
    el:'#app',
    data:{
        mensaje: 'soy el ciclo de vida de Vue'
    },
    beforeCreate() {
      console.log('beforeCreate')  
    }
});