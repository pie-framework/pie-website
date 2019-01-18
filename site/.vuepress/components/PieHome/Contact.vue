<template>
    <div class="contact">
        <img src="/homepage/contact/wave_conntact.svg" class="wave-contact" />
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
            <img src="/homepage/contact/graphic_contact.svg" class="graphic-contact" />
        </div>
    </div>
</template>

<style lang="stylus">
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
                    font-size 16px
                    height 60px
                    margin-bottom 20px
                    padding-left 20px
                    width 100%
                textarea
                    border none !important
                    border-radius 6px
                    box-sizing border-box
                    font-size 16px
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

    @media (max-width: 1250px)
        .contact
            .wave-contact
                display none !important
            .contact-content
                .contact-info
                    width 300px
                    margin-right 70px
                    h1
                        font-size 28px
                        width 184px
                    .send-button
                        height 46px
                        line-height 46px
                        width 79px
                        span
                            font-size 14px
                            letter-spacing 0.8px
                .graphic-contact
                    width 315px
</style>