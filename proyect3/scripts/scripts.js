const app=new Vue({
    el: "#app",
    data:{
        mensaje: 'Hello'
    },
    computed:{
        invertido(){
            return this.mensaje.split('').reverse().join('');
        }
    }


});