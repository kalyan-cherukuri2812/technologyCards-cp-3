import './index.css'

const Carditem = props => {
  const {listDetails} = props
  const {description, title, imgUrl, className} = listDetails
  return (
    <li className={`li ${className}`}>
      <h1 className="h">{title}</h1>
      <p className="p">{description}</p>
      <img className="img" src={imgUrl} alt={title} />
    </li>
  )
}
export default Carditem
