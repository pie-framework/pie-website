export default ({ router }) => {
  router.addRoute(
    {path: '/', redirect: '/'}, 
    { path: '/examples', redirect: '/'},
    { path: '/changes', redirect: '/changes/introduction.html' },
    { path: '/changelogs', redirect: '/changelogs/introduction.html' }
  )
}