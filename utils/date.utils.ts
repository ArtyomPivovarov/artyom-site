export function getWorkExperience() {
  return getDateDifferenceInYears(new Date(2019, 6, 1))
}

function getDateDifferenceInYears(startDate: Date, endDate?: Date) {
  const diffInMilliseconds = Math.abs(
    (endDate ?? new Date()).getTime() - startDate.getTime()
  )
  const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25 // accounting for leap years
  const experience = diffInMilliseconds / millisecondsInYear

  return experience.toFixed(1)
}
