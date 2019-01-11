<template>
    <div class="theme-container"
         @touchstart="onTouchStart"
         @touchend="onTouchEnd">
        <div class="element-container" v-html="rawHtml"></div>
    </div>
</template>

<script>
  import Vue from 'vue'

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
            "multiple-choice@2.4.5",
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
      setupPie(this.$page.frontmatter.model, this.$page.frontmatter.configure);
    },

    updated () {
      setupPie(this.$page.frontmatter.model, this.$page.frontmatter.configure);
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
