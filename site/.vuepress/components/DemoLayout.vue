<template>
    <div class="theme-container"
         @touchstart="onTouchStart"
         @touchend="onTouchEnd">
        <div class="element-container" v-html="rawHtml"></div>
    </div>
</template>

<script>
  import Vue from 'vue'

  function setupPie(model) {
    const pieDemo = document.getElementById("demo");

    if (pieDemo) {
      pieDemo.model = model;

      if (pieDemo.loadPies) {
        if (!window['pie']) {
          const packages = [
            "text-entry",
            "select-text",
            "multiple-choice",
            "number-line",
            "function-entry",
            "inline-choice",
            "x-categorize",
            "x-calculator",
            "x-ruler",
            "graph-lines",
            "placement-ordering",
            "extended-text-entry",
            "protractor",
            "match",
            "point-intercept"
          ];
          const names = packages.slice(0, 7).join('+');
          const packagesName = `@pie-element/${packages.slice(0, 7).join('+@pie-element/')}`.replace(/x-/g, '');

          pieDemo.loadPies({
            [names]: packagesName
          });
        }
      } else {
        setTimeout(() => setupPie(model), 200);
      }
    }
  }

  export default {
    data () {
      return {}
    },

    computed: {
      rawHtml () {
        console.log(this.$page.frontmatter.pie);

        return `
            <pie-demo id="demo" load="false" editor="true" pie="${this.$page.frontmatter.pie}"></pie-demo>
        `;
      }
    },

    mounted () {
      window.addEventListener('scroll', this.onScroll)
      setupPie(this.$page.frontmatter.model);
    },

    updated () {
      setupPie(this.$page.frontmatter.model);
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
      }
    }
  }
</script>

<style src="prismjs/themes/prism-tomorrow.css"></style>
<style src="../../../node_modules/vuepress/lib/default-theme/styles/theme.styl" lang="stylus"></style>
