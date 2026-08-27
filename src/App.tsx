import { SiteLayout } from './layouts/SiteLayout'
import { About } from './sections/About/About'
import { Contact } from './sections/Contact/Contact'
import { Education } from './sections/Education/Education'
import { Experience } from './sections/Experience/Experience'
import { Hero } from './sections/Hero/Hero'
import { Projects } from './sections/Projects/Projects'
import { Stack } from './sections/Stack/Stack'

function App() {
  return (
    <SiteLayout>
      <Hero />
      <About />
      <Stack />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </SiteLayout>
  )
}

export default App
