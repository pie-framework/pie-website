<template>
    <div class="home">
        <div class="header">
            <div class="nav-menu">
                <img src="../public/homepage/header/pie_logo.svg" />
                <NavLinks />
            </div>

            <div class="header-content">
                <img src="../public/homepage/header/wave_header.svg" class="wave-header" />
                <img src="../public/homepage/header/graphic_header.svg" class="graphic-header" />

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
        <div class="details">
            <img src="../public/homepage/details/wave_details.svg" class="wave-details" />
            <div class="details-content">
                <div class="section">
                    <div class="image-section">
                        <img src="../public/homepage/details/graphic_details_01.svg" />
                    </div>
                    <div class="info-section">
                        <div class="info-title">
                            Create Content
                        </div>
                        <div class="info-content">
                            Drop-in our Open Source assessment authoring components into
                            your product to provide content authoring capability.
                        </div>
                        <div class="info-link">
                            <span>
                                Learn More
                            </span>
                            <i class="fa fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
                <div class="section">
                    <div class="image-section">
                        <img src="../public/homepage/details/graphic_details_02.svg" />
                    </div>
                    <div class="info-section">
                        <div class="info-title">
                            Use Content
                        </div>
                        <div class="info-content">
                            Plug-in the Assessment Item Player component to your app to
                            render content to your students.
                        </div>
                        <div class="info-link">
                            <span>
                                Learn More
                            </span>
                            <i class="fa fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
                <div class="section">
                    <div class="image-section">
                        <img src="../public/homepage/details/graphic_details_03.svg" />
                    </div>
                    <div class="info-section">
                        <div class="info-title">
                            Share Content
                        </div>
                        <div class="info-content">
                            Share content in the non-proprietary PIE Format, and it can
                            be rendered to students exactly as the content author intended.
                        </div>
                        <div class="info-link">
                            <span>
                                Learn More
                            </span>
                            <i class="fa fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="corespring">
            <img src="../public/homepage/corespring/wave_corespring.svg" class="wave-corespring" />
            <div class="corespring-content">
                <img src="../public/homepage/corespring/graphic_corespring.svg" class="graphic-corespring" />
                <div class="corespring-info">
                    <div class="image-container">
                        <img src="../public/homepage/corespring/corespring_logo.svg" />
                    </div>
                    <div class="text-container">
                        <span class="first-text">
                            The PIE Framework was developed and contributed to the community as Open Source software by CoreSpring Inc,
                            based on years of experience serving many millions of assessments to students.
                        </span>
                        <span class="second-text">
                            Continued work is supported by Illuminate Education, as part of its mission to make the best tools
                            available to educators and students everywhere.
                        </span>
                    </div>
                    <div class="info-link">
                        <span>
                            Learn More
                        </span>
                        <i class="fa fa-arrow-right"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="community">
            <div class="community-content">
                <img src="../public/homepage/community/Path.svg" class="wave-community" />
                <div class="community-info">
                    <div class="info-top">
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
                <img src="../public/homepage/community/graphic_community.svg" class="graphic-community" />
            </div>
        </div>
        <div class="illuminate">
            <img src="../public/homepage/illuminate/illuminate_education_logo.svg" />
            <div class="partner-button">
                <span>
                    Become a partner
                </span>
            </div>
        </div>
        <div class="contact">
            <img src="../public/homepage/contact/wave_conntact.svg" class="wave-contact" />
            <div class="contact-content">
                <div class="contact-info">
                    <h1>
                        We’d love to
                        hear from you.
                    </h1>
                    <input type="text" name="name" title="name" placeholder="Full Name">
                    <input type="text" name="email" title="email" placeholder="Email">
                    <textarea title="message" name="message" placeholder="Your message"></textarea>
                    <div class="send-button">
                        <span>Send</span>
                    </div>
                </div>
                <img src="../public/homepage/contact/graphic_contact.svg" class="graphic-contact" />
            </div>
        </div>
        <img src="../public/homepage/footer/wave_footer.svg" class="wave-footer" />
        <div class="pie-footer">

        </div>
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

@media (min-width: 1250px)
    .home
        display flex
        flex-direction column
        overflow hidden
        padding 0
        margin 0
        max-width none

        & > *
            box-sizing border-box
            padding 0 180px

        .header
            align-items: center;
            background-color #1d3095
            display flex
            height 700px
            justify-content: center;
            padding 0 !important
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
            .header-content
                flex 1
                height 100%
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
                    bottom 44px
                    position absolute
                    right 50px
                    z-index 2
                    width 580px
                .header-info
                    color #fff
                    height 526px
                    left 180px
                    overflow hidden
                    position absolute
                    top 176px
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

        .details
            align-items center
            background-color #f6fafc
            display flex
            height 800px
            justify-content center
            position relative
            width 100%
            .wave-details
                bottom 0
                position absolute
                right 0
                top 0
                width 100%
                z-index 1
            .details-content
                align-items center
                display flex
                height 100%
                justify-content space-between
                max-width 1440px
                .section
                    background-color #ffffff
                    border-radius 10px
                    display flex
                    flex-direction column
                    height: 574px;
                    justify-content center
                    margin-right 40px
                    width 330px
                    z-index 2
                    .image-section
                        background-image linear-gradient(to bottom, #ffffff, #fafafa)
                        align-items center
                        display flex
                        height 215px
                        margin-top 35px
                        overflow hidden
                        img
                            width 330px
                    .info-section
                        align-items center
                        display flex
                        flex-direction column
                        justify-content space-evenly
                        height 324px
                        .info-title
                            font-size 24px
                            font-weight bold
                            letter-spacing 1px
                            color #000000
                        .info-content
                            color rgba(0, 0, 0, 0.7)
                            font-size: 16px
                            font-weight 300
                            letter-spacing -0.5px
                            line-height 1.5
                            padding 0 30px
                            text-align justify

        .corespring
            align-items center
            background-color #f6fafc
            display flex
            height 800px
            justify-content center
            position relative
            width 100%
            .wave-corespring
                bottom 0
                height 100%
                position absolute
                right 0
                z-index 1
            .corespring-content
                align-items center
                display flex
                justify-content center
                max-width 1440px
                width 100%
                .graphic-corespring
                    height 600px
                    width 600px
                    z-index 2
                    margin-right 50px
                .corespring-info
                    color rgba(0, 0, 0, 0.7)
                    display flex
                    height 440px
                    flex-direction column
                    font-size: 16px
                    font-weight: 300
                    letter-spacing 0.8px
                    line-height 1.5
                    text-align justify
                    width 400px
                    z-index 2
                    .image-container
                        height 105px
                        margin-bottom 40px
                        overflow none
                        img
                            width 400px
                    .text-container
                        display flex
                        flex-direction column
                        margin-bottom 40px
                        .first-text
                            margin-bottom 20px

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
                        display flex
                        .block
                            background-color #eeeeee
                            height 36px
                            margin-right 10px
                            width 36px
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

        .illuminate
            align-items center
            background-color #15257e
            display flex
            height 190px
            justify-content center
            width 100%
            img
                height 43px
                object-fit contain
                margin-right 100px
                width 300px
            .partner-button
                border-radius 4px
                border 2px solid #FFA644
                border-image linear-gradient(to right, #FFA644, #FF5D11)
                border-image-slice 1
                height 69px
                line-height 69px
                text-align center
                width 252px
                span
                    color #ffffff
                    font-size 18px
                    font-weight bold
                    letter-spacing 1px
                    text-transform uppercase
        .contact
            align-items center
            background-color #f6fafc
            display flex
            height 750px
            justify-content center
            position relative
            width 100%
            .wave-contact
                bottom 0
                right 0
                position absolute
                z-index 1
            .contact-content
                align-items center
                display flex
                height 100%
                justify-content center
                max-width 1440px
                position relative
                width 100%
                .contact-info
                    align-items flex-start
                    display flex
                    flex-direction column
                    width 400px
                    h1
                        color #000000
                        font-size 48px
                        font-weight bold
                        line-height 1.25
                        width 320px
                    input
                        background-color #ffffff
                        border none !important
                        border-radius 6px
                        box-sizing border-box
                        height 60px
                        margin-bottom 20px
                        padding-left 20px
                        width 100%
                    textarea
                        border none !important
                        border-radius 6px
                        box-sizing border-box
                        height 180px
                        margin-bottom 20px
                        padding 20px
                        width 100%
                    .send-button
                        background-image linear-gradient(to left, #ffa644, #ff5c10)
                        border-radius 4px
                        box-shadow 0 5px 0 0 rgba(136, 55, 16, 0.15)
                        height 69px
                        line-height 69px
                        text-align center
                        text-transform uppercase
                        width 130px
                        span
                            color #ffffff
                            font-size 18px
                            font-weight bold
                            letter-spacing 1px
                            text-shadow 0 1px 2px rgba(0, 0, 0, 0.24)
                .graphic-contact
                    z-index 2
        .wave-footer
            background-color #f6fafc
            margin-left -5px
            padding 0
            width calc(100% + 10px)
            z-index 1
        .pie-footer
            background-image linear-gradient(to bottom, #3f51b5, #1d3095)
            display flex
            flex-direction column
            min-height 230px
            padding 0 !important
            position relative
            width 100%

        .info-link
            display flex
            span
                color #3f51b5
                text-transform uppercase
                margin-right 10px
                font-size 14px
                font-weight bold
            i
                color #3f51b5
</style>
