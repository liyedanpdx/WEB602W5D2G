Vue.component('card-item',{
    props:['li'],
    template:'<li class="card-item"><span>{{li.value}}</span> {{li.attribute}}</li>'
})


const app = new Vue({
    el:'#card-list',
    data:{
        plan:'gold',
        lis:[
        {'value':'50GB','attribute':'Storage'},
        {'value':'50','attribute':'Emails'},
        {'value':'50','attribute':'Domains'},
        {'value':'Endless','attribute':'Support'}
        ],
        styleobj:{
            'padding': '8px 16px',
            'border-bottom': '1px solid #ddd'
        },
        stylebtn:{
            'color': '#fff',
            'background-color': '#4CAF50',
            'padding': '12px 24px',
            'cursor': 'pointer'
        }
    },
    computed:{
        plan_type: function(){
            return this.plan.toUpperCase();
        }
    },
    methods:{
        hover_effect: function(hover_state){
            // if (hover_state){
            //     this.$set(this.stylebtn, 'backgroundColor', 'red');
            // }else{
            //     this.$set(this.stylebtn, 'backgroundColor', '#4CAF50');
            // }
            if (hover_state) {
                this.stylebtn['background-color'] = 'red';
            } else {
                this.stylebtn['background-color'] = '#4CAF50';
            }
        }
    }    
})