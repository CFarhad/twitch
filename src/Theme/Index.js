import {extendTheme} from '@chakra-ui/react'
import Colors from './Colors'

const Menu = {
  parts: ["menu", "item","list"],
  baseStyle: {
    list:{
      bg: Colors.grey['grey-2'],
      borderColor: "transparent",
      boxShadow: "0 4px 8px rgba(0,0,0,0.4), 0 0px 4px rgba(0,0,0,0.4)",
      color: Colors.grey['grey-5'],
      px: "2",
      overflow: "auto",
    },
    button:{
      fontSize: "1.5rem",
      borderRadius: "3px",
      px: "0.2rem",
      _hover:{
        bg: Colors.grey['grey-6']
      }
    },
    item: {
      fontWeight: "medium",
      margin: "5px 0",
      lineHeight: "normal",
      borderRadius: "3px",
      color: Colors.default,
      _hover:{
        bg: "#FFFFFF26"
      },
      _focus:{
        bg: "#FFFFFF36"
      },
      _active:{
        bg: "#FFFFFF36"
      }
    },
  },
  sizes: {
    sm: {
      item: {
        fontSize: "0.75rem",
        px: 2,
        py: 1,
      },
    },
    md: {
      item: {
        fontSize: "0.80rem",
        px: 2,
        py: 2,
      },
    },
  },
  defaultProps: {
    size: "md",
  },
}

const Index = extendTheme({
  styles:{
    global:{
      body:{
        bg: Colors.bg,
        color: Colors.default
      },
      a:{
        color: Colors.default,
        _hover:{
          color: Colors.primary.purple
        }
      }
    },
  },
  components: {
    Menu,
  }
})

export default Index