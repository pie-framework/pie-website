export default ({ router }) => {
  router.addRoutes([
    { path: '/', redirect: '/'},
    { path: '/examples', redirect: '/'},
    { path: '/examples-next', redirect: '/examples-next/pie-categorize'},
    { path: '/examples-next/', redirect: '/examples-next/pie-categorize'},
    { path: '/changes', redirect: '/changes/introduction.html' },
    { path: '/changelogs', redirect: '/changelogs/introduction.html' },
  ])
}