<template>
    <div class="illuminate">
        <img src="/homepage/illuminate/illuminate_education_logo.svg" />
        <div class="partner-button">
                <span>
                    Become a partner
                </span>
        </div>
    </div>
</template>

<style lang="stylus">
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

    @media (max-width: 1250px)
        .illuminate
            .partner-button
                height 69px
                width 252px
</style>