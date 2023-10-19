export default ({ router }) => {
  router.addRoutes([
    { path: '/', redirect: '/examples/pie-categorize.html'},
    { path: '/examples-next', redirect: '/examples-next/pie-categorize.html'},
    { path: '/changes', redirect: '/changes/introduction.html' },
    { path: '/changelogs', redirect: '/changelogs/introduction.html' },
  ])
}