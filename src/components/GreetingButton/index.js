import './index.css'

const GreetingButton = props => {
  const {eachButton, isTrue, clickButton} = props
  const {buttonText, imageAltText} = eachButton
  const color = isTrue ? 'sri' : 'ram'
  const onClickButton = () => {
    clickButton(imageAltText)
  }
  return (
    <li className='list'>
      <button onClick={onClickButton} type='button' className={color}>
        {buttonText}
      </button>
    </li>
  )
}
export default GreetingButton
