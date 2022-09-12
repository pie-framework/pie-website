<template>
    <div class="pie-home">
        <Header></Header>
        <Details></Details>
        <!--CoreSpring></CoreSpring-->
        <!--Community></Community-->
        <!--Renaissance></Renaissance-->
        <!--Contact></Contact-->
        <img src="../public/homepage/footer/wave_footer.svg" class="wave-footer" />
        <PieFooter></PieFooter>
    </div>
</template>

<script>
  import Header from './PieHome/Header.vue'
  import Details from './PieHome/Details.vue'
  import CoreSpring from './PieHome/CoreSpring.vue'
  import Community from './PieHome/Community.vue'
  import Renaissance from './PieHome/Renaissance.vue'
  import Contact from './PieHome/Contact.vue'
  import PieFooter from './PieHome/PieFooter.vue'

  export default {
    components: { Header, Details, CoreSpring, Community, Renaissance, Contact, PieFooter },

    computed: {
      data () {
        return this.$page.frontmatter
      }
    }
  }
</script>

<style lang="stylus">
    @import '../../../node_modules/vuepress/lib/default-theme/styles/config.styl'

    .pie-home
        display flex
        flex-direction column
        overflow hidden
        padding 0
        margin 0
        max-width none

        & > *
            box-sizing border-box

        .wave-footer
            background-color #f6fafc
            margin-left -5px
            padding 0
            width calc(100% + 10px)
            z-index 1

        @media (max-width: 1250px)
            .wave-footer
                display none

</style>
