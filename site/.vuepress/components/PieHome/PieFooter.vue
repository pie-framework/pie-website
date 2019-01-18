<template>
    <div class="pie-footer">
        <div class="copyright-area">
            <img src="/homepage/header/pie_logo.svg" />
            <span>
                    Copyright @ 2019
                </span>
        </div>
        <div class="footer-sections">
            <div class="footer-section">
                    <span class="title">
                        Navigate
                    </span>
                <span>
                        Developers
                    </span>
                <span>
                        Examples
                    </span>
                <span>
                        About
                    </span>
            </div>
            <div class="footer-section">
                    <span class="title">
                        Legal
                    </span>
                <span>
                        Terms & Conditions
                    </span>
                <span>
                        Private Policy
                    </span>
            </div>
            <div class="footer-section">
                    <span class="title">
                        Keep in touch
                    </span>
                <span>
                        contact@pie-framework.com
                    </span>
                <span>
                        831-343-547
                    </span>
            </div>
            <div class="footer-section">
                    <span class="title">
                        Follow Us
                    </span>
                <span>
                        Facebook
                    </span>
                <span>
                        Twitter
                    </span>
                <span>
                        Instagram
                    </span>
            </div>
        </div>
    </div>
</template>

<style lang="stylus">
    .pie-footer
        align-items flex-start
        background-image linear-gradient(to bottom, #3f51b5, #1d3095)
        display flex
        justify-content center
        min-height 230px
        box-sizing border-box
        padding 60px 0 0 0
        position relative
        width 100%
        .copyright-area
            display flex
            flex-direction column
            margin-right 220px
            width 260px
            img
                margin-bottom 15px
            span
                color rgba(255, 255, 255, 0.7)
                font-size 14px
        .footer-sections
            align-items flex-start
            display flex
            justify-content space-between
            .footer-section
                display flex
                flex-direction column
                margin-right 40px
                span
                    color rgba(255, 255, 255, 0.7)
                    font-size 14px
                    margin-bottom 15px
                .title
                    color #fff
                    font-weight bold

    @media (max-width: 1250px)
        .pie-footer
            background-color #3f51b5
            height 284px
            flex-direction column-reverse
            padding 50px
            .copyright-area
                flex-direction row
                justify-content space-between
                margin 0
                width 100%
                img
                    margin 0
                    width 225px
            .footer-sections
                margin-bottom 50px
                width 100%
                .footer-section
                    &:last-child
                        margin 0
</style>