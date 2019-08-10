const app =new Vue({
    el: '#app',
    data:{
        titulo: 'Hello World with Vue',
        frutas:[
        {nombre:'manzana', cantidad:1},
        {nombre:'pera', cantidad:1},
        {nombre:'banana',cantidad:1},
        {nombre:'kiwi', cantidad:1},
        {nombre:'sandia',cantidad:0}
    
        ],
        nuevaFruta:'',
        total:0
    },
    methods:{
        agregarFruta: function(){
            this.frutas.push({
                nombre: this.nuevaFruta, cantidad:0
            })
            this.nuevaFruta='';
        }
    },
    computed: {
        sumarFrutas(){
            this.total=0;
            for(fruta of this.frutas){
                this.total = this.total + fruta.cantidad;
            }
            return this.total;
        }
    }



})