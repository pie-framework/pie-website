<template>
  <div class="pie-side-menu" :class="{ open: shouldShowSideMenu }">
    <div class="pie-menu-content">
      <div class="menu-header">
        <span>Menu</span>
        <i class="fa fa-bars" @click="close()" />
      </div>
      <NavLinks />
      <div class="search-box-container">
        <SearchBox placeholder="Search" :boxAlignment="'left'" />
      </div>
      <div class="sidebar-title" v-if="shouldShowSidebarTitle">
        <span class="text">
          {{ sideBarTitle }}
        </span>
      </div>
      <Sidebar :items="sidebarItems">
        <slot name="sidebar-top" slot="top" />
        <slot name="sidebar-bottom" slot="bottom" />
      </Sidebar>
    </div>
  </div>
</template>

<script>
import NavLinks from "../../../../node_modules/vuepress/lib/default-theme/NavLinks.vue";
import Sidebar from "../../../../node_modules/vuepress/lib/default-theme/Sidebar.vue";
import SearchBox from "../SearchBox.vue";
import { resolveSidebarItems } from "../../../../node_modules/vuepress/lib/default-theme/util";

export default {
  components: { NavLinks, SearchBox, Sidebar },

  data() {
    return {};
  },

  props: {
    open: {
      required: true
    },
    closeSideMenu: {
      required: true
    },
    sideBarTitle: {
      required: false
    }
  },

  computed: {
    shouldShowSidebarTitle() {
      return !!this.sideBarTitle;
    },

    shouldShowSideMenu() {
      return this.open;
    },

    sidebarItems() {
      return resolveSidebarItems(
        this.$page,
        this.$route,
        this.$site,
        this.$localePath
      );
    }
  },

  methods: {
    close() {
      this.closeSideMenu();
    }
  },

  watch: {
    open: {
      handler: val => {
        if (val) {
          document.querySelector("#app").style.overflow = "hidden";
        } else {
          document.querySelector("#app").style.overflow = "";
        }
      },
      deep: true
    }
  },

  beforeDestroy() {
    document.querySelector("#app").style.overflow = "";
  }
};
</script>

<style lang="stylus">
@import "../../variables.styl";
@import "../../navMenu.styl";

.pie-side-menu
    background-color rgba(0, 0, 0, 0.2)
    bottom 0
    border 1px solid rgba(0, 0, 0, 0.12)
    left 0
    right 0
    position fixed
    top 0
    z-index 999
    .pie-menu-content
        background-color #ffffff
        bottom 0
        height 100%
        position absolute
        right 0
        top 0
        width 300px
        .menu-header
            align-items center
            border-bottom 4px solid rgba(0, 0, 0, 0.12)
            display flex
            height 60px
            margin-bottom 25px
            position relative
            span
                padding-left 20px
            i
                cursor pointer
                position absolute
                right 18px
                top 18px
        .search-box-container
            align-items center
            background-color #ebebeb
            display none
            height 76px
            justify-content center
            .search-box
                margin 0
                padding 0
                input
                    box-sizing border-box
                    width 100%
        .sidebar-title
            border-bottom 4px solid #3f51b5
            height 47px
            line-height 47px
            .text
                color: #000000;
                font-size: 16px;
                font-weight: 500;
                margin-left 20px
        .sidebar
            display none
            height calc(100% - 127px)
            overflow scroll
            position relative
            transform none
            width 100%
            .nav-links
                border none
                display block
                padding 0
                .nav-item
                    font-size 14px
                    margin 0 0 35px 0
                    padding 0 0 0 20px
                    a
                        margin 0
            .sidebar-links
                display none
                padding 0
                .sidebar-group
                    .sidebar-heading
                        background-color: rgba(63, 81, 181, 0.1);
                        border none
                        box-sizing border-box
                        height 38px
                        line-height 38px
                        margin 0
                        padding 0
                        span
                            font-size 12px
                            font-weight normal
                            margin-left 20px
                    .sidebar-group-items
                        li
                            border-bottom 1px solid rgba(0, 0, 0, 0.12);

                            &:after
                                color rgba(0, 0, 0, 0.4)
                                font-size 10px
                                text-align right

                            .sidebar-link
                                border none !important
                                font-size 14px
                                height 36px
                                padding 10px 20px
                                &.active
                                    background-color $containerBgColor
                                    color #3f51b5 !important
@media (max-width: 900px)
    .pie-side-menu
        bottom 0
        display none
        left 0
        right 0
        top 0
        width 100%
        z-index 9
        &.open
            display block
        .pie-menu-content
            max-width 300px
            width 80%
</style>
