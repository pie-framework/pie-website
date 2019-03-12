export default ({ router }) => {
  router.addRoutes([
    { path: '/changes', redirect: '/changes/introduction.html' },
    { path: '/changelogs', redirect: '/changelogs/introduction.html' },
  ])
}