import Alert from './alertTable'
import NotificationsToasts from './notifications'

export default function page() {
  return (
    <div className='lg:mx-32 xl:mx-60 grid grid-cols-1 gap-5'>
      <div><Alert /></div>
      <div><NotificationsToasts /></div>
    </div>
  )
}
