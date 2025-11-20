export function formatPercent(value) {
  if (value == null) return null
  if (value > 0) return `+${value}`
  return `${value}`
}

export function formatIntPercent(value) {
  if (typeof value !== 'number') return value

  const rounded = Math.round(value) // 정수 자리 반올림
  const sign = rounded > 0 ? '+' : ''

  return sign + rounded
}

export function formatExtra(avg, user) {
  const extra = user - avg
  if (extra >= 0) return `평균보다 처방 일수가 ${extra}일 추가됐어요`
  else return `평균보다 ${avg - user}일 덜 처방했어요`
}

export function formatMoney(value) {
  if (value == null) return ''
  return value.toLocaleString('ko-KR')
}
