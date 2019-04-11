<template>
    <div
            class="pie-demo pie-changes"
            @touchstart="onTouchStart"
            @touchend="onTouchEnd"
    >
        <CustomNavMenu :onMenuIconClick="toggleSideMenu" />
        <SideMenu
                :open="shouldShowSideMenu"
                :closeSideMenu="toggleSideMenu"
        />

        <Page
                :sidebar-items="sidebarItems"
        >
            <slot
                    name="page-top"
                    slot="top"
            />
            <slot
                    name="page-bottom"
                    slot="bottom"
            />
        </Page>
    </div>
</template>

<script>
  import Vue from 'vue'
  import CustomNavMenu from './Utils/CustomNavMenu.vue'
  import SideMenu from './Utils/SideMenu.vue'
  import nprogress from 'nprogress'
  import Home from '../../../node_modules/vuepress/lib/default-theme/Home.vue'
  import SearchBox from './SearchBox.vue'
  import Page from '../../../node_modules/vuepress/lib/default-theme/Page.vue'
  import Sidebar from '../../../node_modules/vuepress/lib/default-theme/Sidebar.vue'
  import SWUpdatePopup from '../../../node_modules/vuepress/lib/default-theme/SWUpdatePopup.vue'
  import { resolveSidebarItems } from '../../../node_modules/vuepress/lib/default-theme/util'
  import dateformat from 'dateformat';

  export default {
    components: { CustomNavMenu, SideMenu, Home, Page, Sidebar, SearchBox, SWUpdatePopup },

    data () {
      return {
        isSidebarOpen: false,
        swUpdateEvent: null,
        pdfVersion: 'v1.2.3'
      }
    },

    computed: {
      shouldShowSearchBox () {
        const { frontmatter } = this.$page

        return !frontmatter.noSearchBox;
      },

      shouldShowNavbar () {
        const { themeConfig } = this.$site
        const { frontmatter } = this.$page
        if (
          frontmatter.navbar === false ||
          themeConfig.navbar === false) {
          return false
        }
        return (
          this.$title ||
          themeConfig.logo ||
          themeConfig.repo ||
          themeConfig.nav ||
          this.$themeLocaleConfig.nav
        )
      },

      shouldShowSidebar () {
        const { frontmatter } = this.$page
        return (
          !frontmatter.home &&
          this.sidebarItems.length
        )
      },

      sidebarItems () {
        return resolveSidebarItems(
          this.$page,
          this.$route,
          this.$site,
          this.$localePath
        )
      },

      pageClasses () {
        const userPageClass = this.$page.frontmatter.pageClass
        return [
          {
            'sidebar-open': this.isSidebarOpen,
            'force-sidebar': this.shouldShowSidebar
          },
          userPageClass
        ]
      },

      lastUpdatePDF () {
        const date = new Date();

        return dateformat(date, "mmm dd, yyyy");
      },

      shouldShowSideMenu() {
        return this.sideMenuVisible;
      },
    },

    mounted () { 
      window.addEventListener('scroll', this.onScroll)

      // configure progress bar
      nprogress.configure({ showSpinner: false })

      this.$router.beforeEach((to, from, next) => {
        if (to.path !== from.path && !Vue.component(to.name)) {
          nprogress.start()
        }
        next()
      })

      this.$router.afterEach(() => {
        nprogress.done()
        this.isSidebarOpen = false
      })

      this.$on('sw-updated', this.onSWUpdated)
    },

    methods: {
      toggleSidebar (to) {
        this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
      },

      toggleSideMenu() {
        this.sideMenuVisible = !this.sideMenuVisible;
      },

      // side swipe
      onTouchStart (e) {
        this.touchStart = {
          x: e.changedTouches[0].clientX,
          y: e.changedTouches[0].clientY
        }
      },

      onTouchEnd (e) {
        const dx = e.changedTouches[0].clientX - this.touchStart.x
        const dy = e.changedTouches[0].clientY - this.touchStart.y
        if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
          if (dx > 0 && this.touchStart.x <= 80) {
            this.toggleSidebar(true)
          } else {
            this.toggleSidebar(false)
          }
        }
      },

      onSWUpdated (e) {
        this.swUpdateEvent = e
      }
    }
  }
</script>


<style src="prismjs/themes/prism-tomorrow.css" lang="css"></style>
<style lang="stylus">
    @import "./DefaultLayout/style.styl";
    @import "./DefaultLayout/pie-demo.styl";
    @import "../navMenu.styl";

    .customDefaultPage
        & > .navbar
            display none
        .custom-layout
            padding-top 3em
        .pie-changes
            .custom-nav-menu
                left 0
                position fixed
                right 0
                top 0

            .page
                .content
                    padding 0

            .pie-side-menu
                .pie-menu-content
                    .sidebar
                        height calc(100% - 75px)
                        top 0
</style>
<style src="../../../node_modules/vuepress/lib/default-theme/styles/theme.styl" lang="stylus"></style>