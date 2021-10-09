// => [isLoading: boolean, loading: func, loaded: func]
export const mixLoading = () => {
  return {
    data() {
      return {
        isLoading: false,
      }
    },

    methods: {
      loading() {
        this.isLoading = true
      },

      loaded() {
        this.isLoading = false
      },
    },
  }
}
