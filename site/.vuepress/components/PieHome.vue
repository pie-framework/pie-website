<template>
    <div class="home">
        <div class="header">
            <img src="../public/homepage/wave_header.svg" class="wave-header" />
            <img src="../public/homepage/graphic_header.svg" class="graphic-header" />

            <div class="nav-menu">
                <img src="../public/homepage/pie_logo.svg" />
                <NavLinks />
            </div>
            <div class="header-content">
                <h1>
                    Next Generation
                    Assessment
                </h1>
                <div class="description">
                    PIE is an Open Source software framework for creating,
                    using and sharing interactive assessments.
                </div>
            </div>
        </div>
        <div class="details"></div>
        <div class="corespring"></div>
        <div class="community"></div>
        <div class="illuminate"></div>
        <div class="contact"></div>
        <div class="footer"></div>
    </div>
</template>

<script>
  import NavLinks from '../../../node_modules/vuepress/lib/default-theme/NavLinks.vue'

  export default {
    components: { NavLinks },

    computed: {
      data () {
        return this.$page.frontmatter
      }
    }
  }
</script>

<style lang="stylus">
    @import '../../../node_modules/vuepress/lib/default-theme/styles/config.styl'

    .home
        display flex
        flex-direction column
        padding 0
        margin 0
        max-width none

        & > *
            box-sizing border-box
            padding 0 180px

        .header
            background-color #1d3095
            height 700px
            position relative
            width 100%
            &::after
                background-color #1d3095
                border-bottom 135px solid #f6fafc
                border-left 100vw solid transparent
                bottom 0
                content ''
                display block
                height 0
                left 0
                position absolute
                width 0
            .nav-menu
                display flex
                height 65px
                justify-content space-between
                left 180px
                position absolute
                top 10px
                width calc(100% - 360px)
                z-index 2
            .wave-header
                bottom 0
                height 100%
                position absolute
                right 0
                z-index 1
            .graphic-header
                bottom 2em
                position absolute
                right 3em
                z-index 2
            .header-content
                color #fff
                height calc(100% - 165px)
                left 180px
                overflow hidden
                position absolute
                top 165px
                width 400px
                z-index 1

                h1
                    font-size 48px
                .description
                    color: #c8deff
                    font-size 24px
                    letter-spacing -1.4px
                    line-height 1.5

    .details
            background-color #f6fafc
            height 100px
            width 100%
        .corespring
            background-color #f6fafc
            height 100px
            width 100%
        .community
            background-color #1d3095
            height 100px
            width 100%
        .illuminate
            background-color #15257e
            height 100px
            width 100%
        .contact
            background-color #f6fafc
            height 100px
            width 100%
        .footer
            background-color #1d3095
            height 100px
            width 100%

</style>
