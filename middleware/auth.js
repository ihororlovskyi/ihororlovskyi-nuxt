export default function ({ store, redirect, error }) {
  if (!store.state.authUser) {
    return redirect('/login')
    error({
      message: 'You are not connected',
      statusCode: 403
    })
  }
}
