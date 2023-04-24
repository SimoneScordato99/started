const { createApp } = Vue

createApp({
data() {
    return {
    
        

    }
},
created(){
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((mario)=>{
        console.log(mario)
    })
},
methods:{
    

}
}).mount('#app')