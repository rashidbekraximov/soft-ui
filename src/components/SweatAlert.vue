<template>
  <div>

  </div>
</template>

<script>
export default {
  name: "SweatAlert",
  props: {
    title: {
      type: String,
      default: "Are you sure?",
    },
    text: {
      type: String,
      default: "You won't be able to revert this!",
    },
    color: {
      type: String,
      default: "success",
    },
    icon: {
      type: String,
      default: "",
    },
    dismissible: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>

</style>