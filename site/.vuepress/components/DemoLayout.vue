<template>
    <div class="pie-demo">
        <CustomNavMenu :onMenuIconClick="toggleSideMenu" />
        <SideMenu :open="shouldShowSideMenu" :closeSideMenu="toggleSideMenu"/>
        <div class="element-container" v-html="rawHtml"></div>
    </div>
</template>

<script>
  import Vue from 'vue'
  import CustomNavMenu from './Utils/CustomNavMenu.vue'
  import SideMenu from './Utils/SideMenu.vue';

  function setupPie(model, configure) {
    const pieDemo = document.getElementById("demo");

    if (pieDemo) {
      pieDemo.model = model;
      pieDemo.configure = configure;

      if (pieDemo.loadPies) {
        if (!window['pie']) {
          const packages = [
            "x-calculator@2.0.4",
            "x-categorize@2.7.4",
            "extended-text-entry@3.3.3",
            "function-entry@3.0.4",
            "graph-lines@1.1.5",
            "inline-choice@2.0.5",
            "x-match@1.5.1",
            "math-inline@0.0.10",
            "multiple-choice@2.4.6",
            "number-line@3.0.9",
            "placement-ordering@3.2.2",
            "point-intercept@3.1.5",
            "x-protractor@2.0.1",
            "x-ruler@3.0.5",
            "select-text@3.3.4",
            "text-entry@3.1.3"
          ];
          const elementNumber = 16;
          const names = packages.slice(0, elementNumber).join('+');
          const packagesName = `@pie-element/${packages.slice(0, elementNumber).join('+@pie-element/')}`.replace(/x-/g, '');

          pieDemo.loadPies({
            [names]: packagesName
          });
        }
      } else {
        setTimeout(() => setupPie(model, configure), 200);
      }
    }
  }

  export default {
    components: { CustomNavMenu, SideMenu },

    data () {
      return {
        sideMenuVisible: false,
        observer: null
      };
    },

    computed: {
      navRef() {
        return this.$refs.navMenu;
      },

      rawHtml () {
        console.log(this.$page.frontmatter.pie);

        return `
            <pie-demo id="demo" load="false" editor="true" pie="${this.$page.frontmatter.pie}"></pie-demo>
        `;
      },

      shouldShowSideMenu() {
        return this.sideMenuVisible;
      },
    },

    mounted () {
      window.addEventListener('scroll', this.onScroll);

      setupPie(this.$page.frontmatter.model, this.$page.frontmatter.configure);

      this.observer = new ResizeObserver(() => {
        if (this.navRef.offsetWidth > 750) {
          this.sideMenuVisible = false;
        }
      });

      if (this.navRef) {
        this.observer.observe(this.navRef);
      }
    },

    beforeDestroy() {
      if (this.observer && this.navRef) {
        this.observer.unobserve(this.navRef);
      }
    },

    updated () {
      setupPie(this.$page.frontmatter.model, this.$page.frontmatter.configure);
    },

    methods: {
      toggleSideMenu() {
        this.sideMenuVisible = !this.sideMenuVisible;
      },
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
      }
    }
  }
</script>

<style lang="stylus">
    @import "../variables.styl";
    @import "../navMenu.styl";

    .customDemoPage
        height 100%

        .custom-layout
            height 100%
            padding-top 0

            .theme-container
                height 100%

    .customHomePage
        display flex
        flex-direction column
        height 100%

    .pie-demo
        height 100%
        .custom-nav-menu
            .nav-menu
                position initial
        .element-container
            box-sizing border-box
            height calc(100% - 65px)
            padding 0 0 0 220px
            width 100%
        .pie-side-menu
            background #fff
            right initial
            top 65px
            width 220px
            .pie-menu-content
                position relative
                width 220px
                .menu-header
                    display none
                & > .nav-links
                    display none
                .search-box-container
                    display flex
                    justify-content flex-start
                    .search-box
                        width 100%
                        input
                            margin 0 20px
                            width calc(100% - 40px)
                        .suggestions
                            z-index 99
                .sidebar
                    display block !important
                    .nav-links
                        display none
                    .sidebar-links
                        display block

    @media (max-width: 1200px)
        .customDemoPage
            padding 0

            .sidebar
                display none !important

        .pie-demo
            height 100%
            .pie-side-menu
                background-color rgba(0, 0, 0, 0.2)
                display none
                width 100%
                &.open
                    display block
                    left initial
                    right 0
                    top 0
                .pie-menu-content
                    position absolute
                    width 300px
                    .menu-header
                        display flex
                        margin 0
                    & > .nav-links
                        display block
                        .nav-item
                            display block
            .element-container
                padding 0

</style>
<style src="prismjs/themes/prism-tomorrow.css"></style>
<style src="../../../node_modules/vuepress/lib/default-theme/styles/theme.styl" lang="stylus"></style>
