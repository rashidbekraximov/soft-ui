<template>
  <div class="m-2 container-fluid">
    <div class="row">
      <div class="col-md-3 mb-4">
        <mini-statistics-card
            title="Nasos"
            id="0"
            value="100000"
            :percentage="{
            value: '+505%',
            color: 'text-success',
          }"
            :icon="{
            component: 'ni ni-money-coins',
            background: iconBackground,
          }"
            direction-reverse
        />
      </div>
    </div>
  </div>
</template>

<script>
import MiniStatisticsCard from "@/examples/Cards/MiniStatisticsCard.vue";

export default {
  name: "NasosDashboard",
  components:{
    MiniStatisticsCard
  },
  data(){
    return {
      iconBackground: "bg-gradient-success",
    }
  }
}
</script>

<style scoped>

</style>