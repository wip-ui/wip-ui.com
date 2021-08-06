import * as React from "react"
import Logo from '../images/wip-ui.svg'

// styles
const pageStyles = {
  color: "#232129",
  paddingTop: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  textAlign: 'center',
}
const headingStyles = {
  marginTop: 32,
  marginBottom: 64,
}
const paragraphStyles = {
  marginBottom: 48,
}
const linkStyle = {
  color: "#8F56FF",
  fontWeight: "bold",
  fontSize: 24,
  verticalAlign: "5%",
}
const logoStyle = {
  width: '80%',
  maxWidth: 500,
  minWidth: 300,
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <img
        alt="Gatsby G Logo"
        style={logoStyle}
        src={Logo}
      />
      <h1 style={headingStyles}>
        Coming soon
        <br /><br />
        <a href="mailto:contact@sergeylukin.com?subject=wip-ui.com" style={linkStyle}>contact@sergeylukin.com</a>
        <br /><br />
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>
      <p style={paragraphStyles}>
        <span role="img" aria-label="Sunglasses smiley emoji">
          😎
        </span>
      </p>
    </main>
  )
}

export default IndexPage
