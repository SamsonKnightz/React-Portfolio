import React from "react"
import "../../src/styles/Footer.css"

const styles = {
    footerStyles: {
        background: 'black',
        color: "white",

    },
};

function Footer() {
    return (
        <footer style={styles.footerStyles} class="bg-black text-center text-white">
            <div class="text-center p-3" >
                © 2023 Copyright
                <br></br>
                <a class="text-white" href="https://mdbootstrap.com/">Samson J Vang</a>
            </div>
        </footer>
    );
}

export default Footer;