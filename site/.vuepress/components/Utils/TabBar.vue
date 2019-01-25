<template>
    <div class="pie-tab-bar">
        <div class="tabs">
            <div
                    v-for="(tab, index) in tabs"
                    class="tab"
                    :class="{ selected: selected === index }"
                    @click="selectTab(index)"
            >
                {{ tab.title }}
            </div>
        </div>
        <span class="selected-line" :style="styleLineObject" />
        <div class="tab-content" :is="content">
        </div>
    </div>
</template>

<script>
  export default {
    props: {
      tabs: {
        required: true
      },
    },

    data() {
      return {
        selected: 0
      }
    },

    computed: {
      content() {
        const selectedTab = this.tabs[this.selected];

        if (selectedTab) {
          return selectedTab.content;
        }

        return null;
      },
      styleLineObject() {
        return {
          left: `${this.selected * 100}px`
        };
      }
    },

    methods: {
      selectTab(index) {
        this.selected = index;
      }
    }
  }
</script>

<style lang="stylus">
    .pie-tab-bar
        display flex
        flex-direction column
        position relative
        .tabs
            border-bottom 4px solid #eeeeee
            display flex
            flex-direction row
            height 48px
            justify-content flex-start
            .tab
                cursor pointer
                min-width 100px
                height 48px
                line-height 48px
                text-align center
    .selected-line
        background-color #3f51b5
        bottom:4px
        height 4px
        position absolute
        top 48px
        transition all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms
        width 100px
    .tab-content
        height 78px

</style>