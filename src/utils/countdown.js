const DATE = '2024-11-09' // YYYY-MM-DD
const TIME = '19:30:00' // HH:MM:SS (24h)

const targetDate = new Date(`${DATE}T${TIME}`)

const padNumber = (number) => number.toString().padStart(2, '0')

const getTimeRemaining = (target) => {
  const now = new Date()
  const remaining = target - Number(now)

  const days = Math.floor(remaining / (1000 * 60 * 60 * 24))
  const hours = Math.floor((remaining / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((remaining / (1000 * 60)) % 60)
  const seconds = Math.floor((remaining / 1000) % 60)

  return { days, hours, minutes, seconds }
}

const updateCounter = () => {
  const { days, hours, minutes, seconds } = getTimeRemaining(targetDate)

  const daysLabel = document.getElementById('days')
  const hoursLabel = document.getElementById('hours')
  const minutesLabel = document.getElementById('minutes')
  const secondsLabel = document.getElementById('seconds')

  if (daysLabel) daysLabel.textContent = padNumber(days)
  if (hoursLabel) hoursLabel.textContent = padNumber(hours)
  if (minutesLabel) minutesLabel.textContent = padNumber(minutes)
  if (secondsLabel) secondsLabel.textContent = padNumber(seconds)
}

setInterval(updateCounter, 1000)
updateCounter()
