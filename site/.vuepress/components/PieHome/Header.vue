<template>
    <div class="header">
        <CustomNavMenu :onMenuIconClick="toggleSideMenu" />
        <SideMenu :open="shouldShowSideMenu" :closeSideMenu="toggleSideMenu"/>

        <div class="header-content">
            <img src="/homepage/header/wave_header.svg" class="wave-header" />
            <img src="/homepage/header/graphic_header.svg" class="graphic-header" />

            <div class="header-info">
                <h1>
                    Next Generation
                    Assessment
                </h1>
                <div class="description">
                    PIE is an Open Source software framework for creating,
                    using and sharing interactive assessments.
                </div>
                <div class="bottom-content">
                    <div class="start-button">
                        <span>Start Development</span>
                    </div>
                    <div class="jump-button">
                        <i class="fa fa-arrow-down"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import CustomNavMenu from '../Utils/CustomNavMenu.vue';
  import SideMenu from '../Utils/SideMenu.vue';

  export default {
    components: { CustomNavMenu, SideMenu },

    data() {
      return {
        sideMenuVisible: false
      };
    },

    computed: {
      shouldShowSideMenu() {
        return this.sideMenuVisible;
      }
    },

    methods: {
      toggleSideMenu() {
        this.sideMenuVisible = !this.sideMenuVisible;
      }
    }
  }
</script>

<style lang="stylus">
    @import "../../navMenu.styl";

    .header
        align-items: center;
        background-color #1d3095
        display flex
        height 700px
        justify-content: center;
        position relative
        width 100%
        .pie-side-menu
            display none
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
        .header-content
            align-items flex-end
            display flex
            flex 1
            flex-direction row-reverse
            height 100%
            justify-content center
            max-width 1440px
            position relative
            .wave-header
                bottom 0
                height 100%
                position absolute
                right 0
                width 756px
                z-index 1
            .graphic-header
                bottom 45px
                left 175px
                position relative
                width 650px
                z-index 2
            .header-info
                color #fff
                height 526px
                overflow hidden
                width 400px
                z-index 1
                h1
                    font-size 48px
                .description
                    color: #c8deff
                    font-size 24px
                    letter-spacing -1.4px
                    line-height 1.5
                .bottom-content
                    margin-top 30px
                    display flex
                    flex-direction column
                    width 276px
                    .start-button
                        background-image linear-gradient(to left, #ffa644, #ff5c10)
                        border-radius 4px
                        box-shadow 0 5px 0 0 rgba(136, 55, 16, 0.52)
                        height 69px
                        line-height 69px
                        text-align center
                        text-transform uppercase
                        width 267px
                        span
                            color #ffffff
                            font-size 18px
                            font-weight bold
                            letter-spacing 1px
                    .jump-button
                        align-self center
                        background-color #f6fafc
                        border-radius 40px
                        height 80px
                        margin-top 74px
                        width 80px
                        i
                            color #3f51b5
                            font-size 25px
                            margin 26px

    @media (max-width: 1250px)
        .header
            background-image linear-gradient(to left, #3f51b5, #1d3095)
            height 504px

            .pie-side-menu
                &.open
                    display block

            &::after
                display none
            .header-content
                align-items center
                height 410px
                max-width 800px
                .wave-header
                    display none
                .header-info
                    bottom 0
                    left 0
                    right 0
                    top 0
                    height 250px
                    margin-right 0
                    width 315px
                    h1
                        font-size 28px
                    .description
                        font-size 14px
                        letter-spacing 0.6px
                    .bottom-content
                        .jump-button
                            display none
                        .start-button
                            height 46px
                            line-height 46px
                            width 198px
                            span
                                font-size 14px
                                letter-spacing 0.5px
                .graphic-header
                    bottom 0
                    height 192px
                    left 0
                    right 0
                    top 0
                    width 300px

    @media (max-width: 750px)
        .header
            background-image linear-gradient(to left, #3f51b5, #1d3095)
            height 570px

            &::after
                display none
            .header-content
                flex-direction column
                max-width 375px
                .wave-header
                    display none
                .header-info
                    height 250px
                    margin-right 0
                    width 300px
                    h1
                        font-size 18px
                        text-align center
                    .description
                        font-size 14px
                        letter-spacing 0.6px
                    .bottom-content
                        align-items center
                        justify-content center
                        .jump-button
                            display none
                        .start-button
                            height 44px
                            line-height 44px
                            width 175px
                            span
                                text-shadow: 0 1px 2px rgba(0, 0, 0, 0.24);
                                font-size: 12px;

        .graphic-header
                    bottom 0
                    height 192px
                    left 0
                    margin-bottom 30px
                    right 0
                    top 0
                    width 300px
</style>