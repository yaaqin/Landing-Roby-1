import Header from './section/header'
import Publication from './section/publication'
import Studio from './section/studio'
import OurProject from './section/ourProject'
import Banner from './section/banner'

export default function Body() {
  return (
    <div className='w-[1440px] px-[40px] mx-auto'>
      <Header/>
      <Banner/>
      <OurProject/>
      <Studio/>
      <Publication/>
    </div>
  )
}
