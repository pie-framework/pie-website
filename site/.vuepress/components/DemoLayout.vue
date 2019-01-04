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
    const hmm = [
      "x-calculator",
      "x-ruler",
      "graph-lines",
      "placement-ordering",
      "extended-text-entry",
      "protractor",
      "match",
      "point-intercept"
    ];

    if (pieDemo) {
      pieDemo.model = model;

      if (pieDemo.loadPies) {
        if (!window['pie']) {
          const packages = [
            "text-entry@3.1.1",
            "select-text@3.3.2",
            "multiple-choice@2.3.6",
            "number-line@3.0.4",
            "function-entry@3.0.3",
            "inline-choice@2.0.4",
            "x-categorize@2.7.2",
            "math-inline@0.0.5",
            "x-calculator@2.0.3",
            "x-ruler@3.0.3",
            "graph-lines@1.1.4",
            "placement-ordering@3.2.0",
            "extended-text-entry@3.3.2",
            "x-protractor@2.0.1",
            "x-match@1.5.0",
            "point-intercept@3.1.3"
          ];
          const elementNumber = 16;
          const names = packages.slice(0, elementNumber).join('+');
          const packagesName = `@pie-element/${packages.slice(0, elementNumber).join('+@pie-element/')}`.replace(/x-/g, '');

          // https://pits-dot-pie-dev-221718.appspot.com/bundles/@pie-element/text-entry@3.1.1+@pie-element/select-text@3.3.2+@pie-element/multiple-choice@2.3.3+@pie-element/number-line@3.0.4+@pie-element/function-entry@3.0.3+@pie-element/inline-choice@2.0.4+@pie-element/categorize@2.7.2+@pie-element/math-inline@0.0.5+@pie-element/calculator@2.0.3+@pie-element/ruler@3.0.3+@pie-element/graph-lines@1.1.4+@pie-element/placement-ordering@3.2.0+@pie-element/extended-text-entry@3.3.2+@pie-element/protractor@2.0.1+@pie-element/match@1.5.0+@pie-element/point-intercept@3.1.3/editor.js
          // https://pits-dot-pie-dev-221718.appspot.com/bundles/@pie-element/text-entry@3.1.1+@pie-element/select-text@3.3.2+@pie-element/multiple-choice@2.3.3+@pie-element/number-line@3.0.4+@pie-element/function-entry@3.0.3+@pie-element/inline-choice@2.0.4+@pie-element/categorize@2.7.2+@pie-element/math-inline@0.0.5+@pie-element/calculator@2.0.3+@pie-element/ruler@3.0.3+@pie-element/graph-lines@1.1.4+@pie-element/placement-ordering@3.2.0+@pie-element/extended-text-entry@3.3.2+@pie-element/protractor@2.0.1+@pie-element/match@1.5.0+@pie-element/point-intercept@3.1.3/editor.js

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
