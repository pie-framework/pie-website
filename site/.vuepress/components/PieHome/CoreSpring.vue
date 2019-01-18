<template>
    <div class="corespring">
        <img src="/homepage/corespring/wave_corespring.svg" class="wave-corespring" />
        <div class="corespring-content">
            <img src="/homepage/corespring/graphic_corespring.svg" class="graphic-corespring" />
            <div class="corespring-info">
                <div class="image-container">
                    <img src="/homepage/corespring/corespring_logo.svg" />
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
                <InfoLink></InfoLink>
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
                    img
                        width 400px
                .text-container
                    display flex
                    flex-direction column
                    margin-bottom 40px
                    .first-text
                        margin-bottom 20px

    @media (max-width: 1250px)
        .corespring
            height 482px
            .wave-corespring
                display none
            .corespring-content
                .graphic-corespring
                    margin-right 68px
                    width 300px
                .corespring-info
                    width 300px
                    .image-container
                        margin-bottom 20px
                        img
                            width 300px
                    .text-container
                        margin-bottom 20px
                        .first-text
                            font-size 14px
                            letter-spacing 0.5px
                        .second-text
                            font-size 14px
                            letter-spacing 0.5px
</style>