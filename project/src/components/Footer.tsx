import React from 'react'
import * as URL from '../constants/url'
import './Footer.scss'

const footerLinks = [
    { title: 'SKKRYPTO Official Site', link: URL.SKKRYPTO_HOMEPAGE, imageURL:",,/assets/images/skkrypto.png" },
    { title: 'SKKRYPTO Facebook', link: URL.SKKRYPTO_FACEBOOK, imageURL: "../assets/images/facebook.png"},
    { title: 'SKKRYPTO Instagram', link: URL.SKKRYPTO_INSTAGRAM, imageURL: "../assets/images/instagram.png"},
    { title: 'SKKRYPTO Brunch', link: URL.SKKRYPTO_BRUNCH, imageURL: "../assets/images/instagram.png"},
    { title: 'SKKRYPTO Email', link: URL.SKKRYPTO_EMAIL, imageURL: "../assets/images/instagram.png"},
]

const Footer = () => (
    <footer className="Footer">
        <div className="Footer__inner">
            <ul className="Footer__linkBox">
                {
                    footerLinks.map(({ title, link, imageURL }) => (
                        <li className="Footer__link" key={title}>
                            <a
                                href={link}
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                {title}
                            </a>
                        </li>
                    ))
                }
            </ul>
            <div className="Footer__copyright">&copy; SKKRYPTO </div>
        </div>
    </footer>
)

export default Footer
