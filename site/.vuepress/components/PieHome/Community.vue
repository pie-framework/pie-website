<template>
    <div class="community">
        <div class="community-content">
            <img src="/homepage/community/Path.svg" class="wave-community" />
            <div class="community-info">
                <div class="info-top">
                    <span class="block"></span>
                    <span>
                            Community
                        </span>
                </div>
                <div class="info-middle">
                        <span>
                            PIE Framework is an Open Source project and we welcome contributions and input
                            in both technical and non-technical area. If you’re a developer see the developers section.
                            If you’re not a developer but want to contribute or partner with us
                        </span>
                </div>
                <div class="contact-button">
                        <span>
                            Contact Us
                        </span>
                    <i class="fa fa-angle-double-down"></i>
                </div>
            </div>
            <img src="/homepage/community/graphic_community.svg" class="graphic-community" />
        </div>
    </div>
</template>

<style lang="stylus">
    .community
        align-items center
        background-color #1d3095
        display flex
        height 800px
        justify-content center
        position relative
        width 100%
        &::before
            background-color #1d3095
            border-left 100vw solid transparent
            border-top 135px solid #f6fafc
            content ''
            display block
            height 0
            left 0
            position absolute
            top 0
            width 0
        .community-content
            align-items center
            display flex
            height 100%
            justify-content center
            max-width 1440px
            position relative
            width 100%
            .wave-community
                right 0
                position absolute
                top 0
                z-index 1
            .graphic-community
                z-index 2
            .community-info
                display flex
                flex-direction column
                height 320px
                justify-content space-between
                width 450px
                z-index 2
                .info-top
                    align-items center
                    display flex
                    .block
                        background transparent
                        border 11px solid #eee
                        height 10px
                        margin-right 20px
                        opacity 0.7
                        width 10px
                    span
                        color #ffffff
                        font-size 48px
                        font-weight bold
                        line-height 1.25
                .info-middle
                    span
                        color #ffffff
                        font-size 16px
                        font-weight 300
                        letter-spacing 1px
                        line-height 1.5
                        text-align justify
                .contact-button
                    background-image linear-gradient(to left, #ffa644, #ff5c10)
                    border-radius 4px
                    box-shadow 0 5px 0 0 rgba(136, 55, 16, 0.52)
                    color #fff
                    height 69px
                    line-height 69px
                    text-align center
                    width 217px
                    span
                        color #ffffff
                        text-transform uppercase
                        font-size 18px
                        font-weight bold
                        letter-spacing 1px
                        margin-right 20px

    @media (max-width: 1250px)
        .community
            height 388px
            &::before
                display none
            .wave-community
                display none
            .graphic-community
                width 300px
            .community-content
                .community-info
                    margin-right 86px
                    width 300px
                    .info-top
                        span
                            font-size 28px
                    .info-middle
                        span
                            font-size 14px
                    .contact-button
                        height 46px
                        line-height 46px
                        width 168px
                        span
                            font-size 14px
</style>