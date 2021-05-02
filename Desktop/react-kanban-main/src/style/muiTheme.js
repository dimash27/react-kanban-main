import { createMuiTheme }  from '@material-ui/core/styles'

const muiTheme = createMuiTheme({
    palette: {
      common: {
        white: '#FFFFFF',
        black: '#000000'
      },
      primary: { main: '#0067A3' },
      secondary: {main: '#0079BF'}
    },
  })

export default muiTheme