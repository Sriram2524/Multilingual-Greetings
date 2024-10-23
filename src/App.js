import {Component} from 'react'
import GreetingButton from './components/GreetingButton'
import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {activeId: languageGreetingsList[0].imageAltText}

  clickButton = id => {
    this.setState({activeId: id})
  }

  render() {
    const {activeId} = this.state
    const filter = languageGreetingsList.filter(
      each => each.imageAltText === activeId,
    )

    return (
      <div className="bg-container">
        <h1 className="heading">Multilingual Greetings</h1>
        <ul className="unordered-list">
          {languageGreetingsList.map(each => (
            <GreetingButton
              clickButton={this.clickButton}
              isTrue={activeId === each.imageAltText}
              eachButton={each}
              key={each.id}
            />
          ))}
        </ul>
        <img
          className="img"
          src={filter[0].imageUrl}
          alt={filter[0].imageAltText}
        />
      </div>
    )
  }
}

export default App
