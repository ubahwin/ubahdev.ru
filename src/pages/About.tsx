import '@styles/About.scss'
import photo from '@assets/me.jpg'
import vkLogo from '@assets/logo/vk.svg'
import tgLogo from '@assets/logo/telegram.svg'
import ghLogo from '@assets/logo/github.svg'
import IconLink from '@components/IconLink.tsx'

const About = () => {
  return (
    <>
      <h1>Ivan Vdovin</h1>
      <div className="about-container-separator">
        <div className="about-container-text">
          <p>
            Enthusiast iOS developer from St. Petersburg, 21 years old. I love SwiftUI and reactive approaches in application development.
          </p>
          <p>
            I am studying in the third year of Information Security at the Admiral Makarov State University of Maritime and Inland Shipping.
          </p>
        </div>
        <div className="about-container-photo">
          <img src={photo} alt="Photo" className="about-photo"/>
          <div className="links">
            <IconLink iconUrl={ghLogo} alt="GitHub" href="https://github.com/ubahwin"/>
            <IconLink iconUrl={tgLogo} alt="Telegram" href="https://t.me/ubahwin"/>
            <IconLink iconUrl={vkLogo} alt="VK" href="https://vk.com/ivan03_vdovin"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
