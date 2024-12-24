import styles from './Event.module.css'
import Image from '../../assets/event.jpg'
import calendar from '../../assets/calendar.svg'
import location from '../../assets/location.svg'
interface Props {
  thumbnailURL?:string;
  Title?:string;
  date?:string;
  venu?:string;
  isFree?:boolean;
  ticketPrice?:number;

}

function EventItem(props: Props) {
  return (
    <div className={styles.eventItemContainer}>
      <img src={Image} className={styles.eventThumbnail}/>
      <div className={styles.eventDetails}>
        <p className={styles.eventName}>SHAAN & SANKA LIVE</p>
        <div className={styles.eventDateTime}>
          <div className={styles.eventDetailsIconContainer}>
            <img src={calendar} className={styles.eventDetailsIcon}/>
          </div>
          <p className={styles.eventDetailsText}>Dec, 24, 2024 : 7.00 am</p>
        </div>
        <div className={styles.venue}>
          <div className={styles.eventDetailsIconContainer}>
            <img src={location} className={styles.eventDetailsIcon}/>
          </div>
          <p className={styles.eventDetailsText}>Hadawila Area</p>
        </div>
        <div className={styles.ticketPrice}>
          <p>1,500 LKR</p>
        </div>
      </div>
      <button className={styles.ticketBuyButton}> Buy Tickets</button>
    </div>
  )
}

export default EventItem;