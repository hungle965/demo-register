<script>
import Login from '@/components/views/login-page/Login'
export default {
  name: 'login',
  head() {
    return {
      title: `Demo - Login`,
    }
  },
  render: h => <Login />,
}
</script>
