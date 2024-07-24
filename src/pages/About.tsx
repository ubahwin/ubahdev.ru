import '@styles/About.scss'
import photo from '@assets/green.jpg'
import favicon from '@assets/favicon.png'
import vkLogo from '@assets/logo/vk.svg'
import tgLogo from '@assets/logo/telegram.svg'
import ghLogo from '@assets/logo/github.svg'
import IconLink from '@components/IconLink.tsx'
import { Helmet } from 'react-helmet-async'

const calculateAge = (birthDate: Date): number => {
  const today = new Date()
  let age = today.getFullYear() - birthDate.getFullYear()
  const monthDifference = today.getMonth() - birthDate.getMonth()
  const dayDifference = today.getDate() - birthDate.getDate()

  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    age--
  }

  return age
}

const About = () => {
  const birthDate = new Date(2003, 2, 16)
  const age = calculateAge(birthDate)

  const title = 'Ivan Vdovin'
  const description = 'Личный сайт Ивана Вдовина, визитная карточка и статьи о программировании и разработке'

  return (
    <>
      <Helmet
        meta={[
          {'property': 'og:title', 'content': title},
          {'property': 'og:type', 'content': 'profile'},
          {'property': 'og:site_name', 'content': 'ubahdev'},
          {'property': 'og:url', 'content': 'https://ubahdev.ru/'},
          {'property': 'og:description', 'content': description},
          {'property': 'og:image', 'content': photo}
        ]}
      />

      <h1>Ivan Vdovin</h1>
      <div className="about-container-separator">
        <div className="about-container-text">
          <p>
            Software engineer from St. Petersburg, {age} years old. I am engaged iOS and Web development, I love
            reactive approaches in application development.
          </p>
          <p>
            I am studying in the fourth year of Information Security at the Admiral Makarov State University of Maritime
            and Inland Shipping.
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
