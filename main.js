const countBE = 60;
const hour = 60;
const day = 1440;
const week = 10080;

if (countBE / week >= 1) {
  const ramainingWeeks = countBE / week;
  const ramainngDaysInMinutes = countBE % week;
  console.log(
    `${Math.floor(ramainingWeeks)}w ${Math.floor(ramainngDaysInMinutes / day)}d`
  );
} else if (countBE / day >=1) {
	const remainingDays = countBE / day
	const remainingHoursTransform = countBE % day
	console.log(`${Math.floor(remainingDays)}d ${Math.floor(remainingHoursTransform / hour)}h `)
} else if (countBE / hour >= 1) {
	const remainigHours = countBE / hour
	const remainingMinutesTransform = countBE % hour
	console.log(`${Math.floor(remainigHours)}h ${remainingMinutesTransform}m`)
} else if (countBE <= 59) {
	console.log(`0h ${countBE}m`)
}
