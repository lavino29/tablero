import { createTheme } from "@mui/material";
const palette = {
    BG: '#12181b',
    ORANGE: '#ff9800',
    WHITE: '#fff'
}
export const Theme = createTheme({
    palette:{
        mode: 'dark',
        background: {
            default: palette.BG,
        },
        primary: {
            main: palette.ORANGE
        }
    },
  components:{
    MuiButton: {
        defaultProps:{
            style:{
                color: palette.WHITE
            }
        }
  }
  
       
}
}
)