import { extendTheme } from "@chakra-ui/core"

const theme = extendTheme({
  components: {
    Text: {
      // 1. We can update the base styles
      baseStyle: {
        color: "white", // Normally, it's "semibold"
      },
    },
    Heading: {
      baseStyle: {
        color: "green.50"
      }
    },
  },
})

export default theme