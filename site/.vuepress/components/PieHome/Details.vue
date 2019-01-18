<template>
    <div class="details">
        <img src="/homepage/details/wave_details.svg" class="wave-details" />
        <div class="details-content">
            <div class="section">
                <div class="image-section">
                    <img src="/homepage/details/graphic_details_01.svg" />
                </div>
                <div class="info-section">
                    <div class="info-title">
                        Create Content
                    </div>
                    <div class="info-content">
                        Drop-in our Open Source assessment authoring components into
                        your product to provide content authoring capability.
                    </div>
                    <InfoLink></InfoLink>
                </div>
            </div>
            <div class="section">
                <div class="image-section">
                    <img src="/homepage/details/graphic_details_02.svg" />
                </div>
                <div class="info-section">
                    <div class="info-title">
                        Use Content
                    </div>
                    <div class="info-content">
                        Plug-in the Assessment Item Player component to your app to
                        render content to your students.
                    </div>
                    <InfoLink></InfoLink>
                </div>
            </div>
            <div class="section">
                <div class="image-section">
                    <img src="/homepage/details/graphic_details_03.svg" />
                </div>
                <div class="info-section">
                    <div class="info-title">
                        Share Content
                    </div>
                    <div class="info-content">
                        Share content in the non-proprietary PIE Format, and it can
                        be rendered to students exactly as the content author intended.
                    </div>
                    <InfoLink></InfoLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import InfoLink from './InfoLink.vue'

  export default {
    components: { InfoLink }
  }
</script>

<style lang="stylus">
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

    @media (max-width: 1250px)
        .details
            height 422px
            .wave-details
                display none
            .details-content
                bottom 53px
                position relative
                .section
                    height 422px
                    margin-right 24px
                    width 220px
                    &:last-child
                        margin-right 0
                    .image-section
                        margin-top 26px
                        img
                            width 220px
                    .info-section
                        .info-title
                            font-size 18px
                        .info-content
                            font-size 14px
                            letter-spacing -1.1px
                            text-align center
</style>