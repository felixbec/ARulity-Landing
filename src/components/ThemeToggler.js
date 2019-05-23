import React, { Component } from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

class Theme extends Component {
  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label>
            <input
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
              checked={theme === "dark"}
            />{" "}
            Dark mode
          </label>
        )}
      </ThemeToggler>
    )
  }
}
export default Theme
