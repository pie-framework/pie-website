<template></template>

<script>
export default {
  mounted() {
    console.log(this.$route.redirectedFrom, "test");
    if (this.$route.redirectedFrom !== '/examples-next' || '/examples-next/' )
    {
      this.$router.push("/examples/pie-categorize.html");
    }
    else {
      this.$router.push("/examples-next/pie-categorize.html");
    }
  }
};
</script>