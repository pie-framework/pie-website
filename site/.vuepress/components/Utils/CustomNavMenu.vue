<template>
    <div class="custom-nav-menu">
        <div class="nav-menu" ref="navMenu">
            <a href="/">
                <img src="/homepage/header/pie_logo.svg"/>
            </a>
            <NavLinks></NavLinks>
            <i
                    class="fa fa-bars"
                    @click="menuIconClicked()"
            />
        </div>
    </div>
</template>

<script>
  import ResizeObserver from 'resize-observer-polyfill';
  import NavLinks from '../../../../node_modules/vuepress/lib/default-theme/NavLinks.vue'

  export default {
    props: {
      onMenuIconClick: {
        required: true
      }
    },

    components: { NavLinks },

    data() {
      return {};
    },

    methods: {
      menuIconClicked() {
        this.onMenuIconClick();
      }
    }
  }
</script>

<style lang="stylus">
    .custom-nav-menu
        background-color #3f51b5
        height 65px
        .nav-menu
            align-items center
            box-sizing border-box
            display flex
            height 65px
            justify-content space-between
            left 0
            padding 0 20px
            position absolute
            top 10px
            width 100%
            z-index 2
            i
                color #fff
                display none
            .nav-links
                .nav-item
                    a
                        color #ffffff
                        font-size 14px
                        font-weight 900
                        letter-spacing 0.7px
                        text-align center
        .pie-side-menu
            display none

    @media (max-width: 1200px)
        .custom-nav-menu
            .nav-menu
                box-sizing border-box
                left 0
                width 100%
                .nav-links
                    display none
                img
                    width 182.2px
                i
                    display block
            .pie-side-menu
                display block

    @media (max-width: 750px)
        .custom-nav-menu
            .nav-menu
                .nav-links
                    display none
                i
                    color #fff
                    cursor pointer
                    display block
                    font-size 21px
            .pie-side-menu
                display block

</style>