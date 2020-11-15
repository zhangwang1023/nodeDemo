<template>
  <div>
    <div @click="get">点击获取</div>
    <div v-if="data">{{data}}</div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      data:''
    }
  },
  methods:{
    get(){
      this.axios.get('/api/getUser').then(res=>{
        this.data=res.data
        console.log(res)
      })
    }
  }
}
</script>

<style>

</style>