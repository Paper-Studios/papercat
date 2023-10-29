import Button from '../Shared/Button'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-section'>
        <h3>Paper Cat Games</h3>
        <p>&#169;2023 CA, USA</p>
      </div>
      <div className='footer-section'>
        <a href='/team'>About the Team</a>
        <a href='/featured'>Released Games</a>
        <a href='/blog'>Blog and Updates</a>
      </div>
      <div className='footer-section'>
        <p>Contact Info</p>
        <a href='mailto:email@email.com'>email@email.com</a>
        <p>(123) 456-7890</p>
      </div>
      <div className='footer-section'>
        <p>Download our latest</p>
        <Button icon={'download'} text={'Press Kit'} href={'/presskit'} type={'button'}/>
      </div>
    </div>
  )
}

export default Footer