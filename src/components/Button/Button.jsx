import './Button.css'

export default function Button({ content, onClick }) {
  return (
    <div className='footer'>
      <button className='footer__button' onClick={onClick}>
        {content}
      </button>
    </div>
  )
}
