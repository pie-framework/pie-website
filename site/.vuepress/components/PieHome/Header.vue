<template>
    <div class="header">
        <div class="nav-menu">
            <img src="/homepage/header/pie_logo.svg" />
            <NavLinks></NavLinks>
        </div>

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
  import NavLinks from '../../../../node_modules/vuepress/lib/default-theme/NavLinks.vue'

  export default {
    components: { NavLinks }
  }
</script>

<style lang="stylus">
    .header
        align-items: center;
        background-color #1d3095
        display flex
        height 700px
        justify-content: center;
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
            align-items center
            display flex
            height 65px
            justify-content space-between
            left 180px
            position absolute
            top 10px
            width calc(100% - 360px)
            z-index 2
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

            &::after
                display none
            .nav-menu
                box-sizing border-box
                left 0
                padding 0 30px
                width 100%
            .header-content
                align-items center
                max-width 800px
                .wave-header
                    display none
                .header-info
                    left 50px
                    top 140px
                    height 250px
                    margin-right 70px
                    width 300px
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
</style>