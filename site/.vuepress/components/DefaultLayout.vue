<template>
    <div
            class="theme-container"
            :class="pageClasses"
            @touchstart="onTouchStart"
            @touchend="onTouchEnd"
    >
        <div
                class="sidebar-mask"
                @click="toggleSidebar(false)"
        ></div>

        <div
                class="sidebar-container"
        >
            <div class="search-box-container">
                <SearchBox placeholder="Search" />
            </div>
            <Sidebar
                    :items="sidebarItems"
                    @toggle-sidebar="toggleSidebar"
            >
                <slot
                        name="sidebar-top"
                        slot="top"
                />
                <slot
                        name="sidebar-bottom"
                        slot="bottom"
                />
            </Sidebar>
            <div class="download-pdf-container">
                <i class="fa fa-download" />
                <div class="text-container">
                    <div class="title">
                        Download PDF
                    </div>
                    <div class="info">
                        <span>{{ pdfVersion }}</span>  •  Last Update: <span>{{ lastUpdatePDF }}</span>
                    </div>
                </div>
            </div>
        </div>

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
  import nprogress from 'nprogress'
  import Home from '../../../node_modules/vuepress/lib/default-theme/Home.vue'
  import SearchBox from './SearchBox.vue'
  import Page from '../../../node_modules/vuepress/lib/default-theme/Page.vue'
  import Sidebar from '../../../node_modules/vuepress/lib/default-theme/Sidebar.vue'
  import SWUpdatePopup from '../../../node_modules/vuepress/lib/default-theme/SWUpdatePopup.vue'
  import { resolveSidebarItems } from '../../../node_modules/vuepress/lib/default-theme/util'
  import dateformat from 'dateformat';

  export default {
    components: { Home, Page, Sidebar, SearchBox, SWUpdatePopup },

    data () {
      return {
        isSidebarOpen: false,
        swUpdateEvent: null,
        pdfVersion: 'v1.2.3'
      }
    },

    computed: {
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
            'no-navbar': !this.shouldShowNavbar,
            'sidebar-open': this.isSidebarOpen,
            'force-sidebar': this.shouldShowSidebar
          },
          userPageClass
        ]
      },
      lastUpdatePDF () {
        const date = new Date();

        return dateformat(date, "mmm dd, yyyy");
      }
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

<style src="prismjs/themes/prism-tomorrow.css"></style>
<style src="../../../node_modules/vuepress/lib/default-theme/styles/theme.styl" lang="stylus"></style>