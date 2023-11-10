<template></template>

<script>
export default {
  mounted() {
    if (this.$route.redirectedFrom !== '/examples-next' || '/examples-next/' || undefined)
    {
      this.$router.push("/examples/pie-categorize.html");
    }
    else {
      this.$router.push("/examples-next/pie-categorize.html");
    }
  }
};
</script>