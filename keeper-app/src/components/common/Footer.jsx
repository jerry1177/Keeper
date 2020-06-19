import React from 'react'
function Footer(props) {
return <footer style={props.style}><p> &copy; Copyright BeastyTech  {new Date().getFullYear()}</p></footer>
}
export default Footer;