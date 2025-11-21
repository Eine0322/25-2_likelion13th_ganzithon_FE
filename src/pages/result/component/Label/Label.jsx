import { Icon } from '../../../../components/Icon/Icon'

export default function Label({ state }) {
  const icon_name =
    state === '높음'
      ? 'label-bad'
      : state === '평균'
      ? 'label-normal'
      : state === '낮음'
      ? 'label-good'
      : ''
  return <Icon name={icon_name} width={49} height={17} />
}
