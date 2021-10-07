<script>
import HomePage from '@/components/views/home-page/Home'
export default {
  name: 'index',
  head() {
    return {
      title: `Demo - Home`,
    }
  },
  render: h => <HomePage />,
}
</script>
