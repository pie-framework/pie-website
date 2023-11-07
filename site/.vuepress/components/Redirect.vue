<template></template>

<script>
export default {
  mounted() {
    console.log(this.$route.redirectedFrom, "test");
    this.$route.redirectedFrom == '/examples-next' || '/examples-next/' ? this.$router.push("/examples-next/pie-categorize.html") : this.$router.push("/examples/pie-categorize.html");
  }
};
</script>