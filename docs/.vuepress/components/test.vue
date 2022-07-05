<template>
  <!-- <component v-if="dynamicComponent" :is="dynamicComponent"></component> -->
  <div>
    {{shuzi}}
    <span ref="chang"></span>
    <ClientOnly>
        <span ref="chang"></span>
    </ClientOnly>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dynamicComponent: null,
      shuzi:0,
      counter: null
    }
  },
  mounted () {
    console.log('妈的');
    import('countup.js').then(module => {
      this.shuzi = 5
      console.log('qwe');
      this.$nextTick(()=>{
                    this.counter = new module.CountUp(this.$refs.chang,2022,{
                        startVal:0,
                        decimalPlaces:0,
                        duration:2
                    })

                    setTimeout(()=>{
                        this.counter.start()
                    },0)
                })
    })
  }
}
</script>
