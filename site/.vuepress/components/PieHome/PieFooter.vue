<template>
    <div class="pie-footer">
        <div class="copyright-area">
            <img src="/homepage/header/pie_logo.svg" alt="PIE framework" />
            <span>
                Copyright @ 2022
            </span>
        </div>
        <div>
          Sponsored by
          <img src="/homepage/renaissance/renaissance_learning_logo.svg" alt="Renaissance Learning" />
        </div>
        <!--div class="footer-sections">
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
        <div class="footer-content">
            <div class="first-section">
                <div class="section-content">
                    <span>
                    Keep in touch
                </span>
                    <div class="info-icon">
                        <i class="fa fa-envelope"></i>
                        <span>
                        contact@pie-framework.com
                    </span>
                    </div>
                    <div class="info-icon">
                        <i class="fa fa-phone"></i>
                        <span>
                        831-343-547
                    </span>
                    </div>
                    <div class="links">
                        <i class="fa fa-facebook"></i>
                        <i class="fa fa-twitter"></i>
                        <i class="fa fa-instagram"></i>
                    </div>
                </div>
            </div>
            <div class="second-section">
                <div class="section-content">
                    <div class="section-info">
                        <img src="/homepage/header/pie_logo.svg"/>
                        <div class="terms">
                            <div>
                                Terms & Conditions
                            </div>
                            <div>
                                Private Policy
                            </div>
                        </div>
                        <span>
                            Copyright @ 2019
                        </span>
                    </div>
                </div>
            </div>
        </div-->
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
        .footer-content
            display none
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

    @media (max-width: 750px)
        .pie-footer
            align-items center
            background-color #3f51b5
            height 400px
            flex-direction column
            padding 0
            .copyright-area
                display none
            .footer-sections
                display none
            .footer-content
                display block
                width 100%
                .section-content
                    align-items center
                    display flex
                    flex-direction column
                    height 100%
                    max-width 375px
                .first-section
                    align-items center
                    background-color #15257e
                    box-sizing border-box
                    color #fff
                    display flex
                    height 225px
                    justify-content center
                    padding 40px 46px
                    width 100%
                    .section-content
                        align-items flex-start
                        & > *
                            margin-bottom 20px
                            &:last-child
                                margin-bottom 0
                        span
                            display: block;
                            font-size 14px
                        .info-icon
                            align-items center
                            display flex
                            i
                                font-size 16px
                                margin-right 15px
                            span
                                font-size 18px
                        .links
                            align-items center
                            display flex
                            i
                                font-size 24px
                                margin-right 15px
                                &:last-child
                                    margin-right 0
                .second-section
                    align-items center
                    background-color #3f51b5
                    display flex
                    height 172px
                    justify-content center
                    width 100%
                    .section-content
                        .section-info
                            align-items flex-start
                            color #fff
                            display flex
                            flex-direction column
                            height 100%
                            justify-content space-evenly
                            img
                                width 240px
                        .terms
                            display flex
                            font-size 14px
                            div
                                &:first-child
                                    margin-right 15px
                        span
                            font-size 14px
</style>
