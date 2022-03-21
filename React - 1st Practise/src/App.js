
import {Starter} from './components/Starter'
import {WeaterApp} from './components/WeaterApp'
import {Button} from './components/WeaterApp'
import {BannerPage} from './components/WeaterApp'
import {LightSwitch} from './components/WeaterApp'
import {List} from './components/WeaterApp'
import {Counter} from './components/WeaterApp'
import {Addname} from './components/WeaterApp'


function App() {
  return <div>
        <WeaterApp/>
        <Button buttonText="Click Alert!"/>
        <LightSwitch on={true} />
        <List ListItem={["Happy", "Sad", "Angry"]}/>
        <Counter/>
        <Addname/>

        <BannerPage titleText="Title" description="Description Text"/>
        <Starter/>
    </div>
}

export default App;
