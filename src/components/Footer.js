import React, { Component } from "react"
import styled, { ThemeProvider } from "styled-components"
import theme from "styled-theming"

const footerBackground = theme("background", {
  white: "#fff",
  red: "#F30247",
})

const footerColor = theme("foreground", {
  white: "#fff",
  red: "#F30247",
})

const FooterUser = styled.footer`
  background-color: ${footerBackground};
  color: ${footerColor};
  padding: 20px;
  font-size: 15px;
  a {
    color: white;
  }
`

class Footer2 extends Component {
  render() {
    return (
      <ThemeProvider theme={{ background: "red", foreground: "white" }}>
        <FooterUser>
          <p> &copy;2020 ARulity</p>
        </FooterUser>
      </ThemeProvider>
    )
  }
}

export default Footer2
