Vue.component('hijo',{

    template: 
    `
        <div class="py-5 bg-warning text-white">
            <h4>Componente hijo</h4>
            <h5>{{numero}}</h5>
        </div>
    
    
    `,
    props: ['numero']
})