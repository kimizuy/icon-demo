import { ReactComponent as Empty } from './icon/mood-empty.svg'
import { ReactComponent as Happy } from './icon/mood-happy.svg'
import { ReactComponent as Sad } from './icon/mood-sad.svg'

const icons = { Empty, Happy, Sad }

type Name = keyof typeof icons

type Props = {
  name: Name
  size?: number
  className?: string
}

const DEFAULT_SIZE = 24

export function Icon({ name, size = DEFAULT_SIZE, className }: Props) {
  const SvgComponent = icons[name]

  return (
    <SvgComponent
      style={{ height: `${size}px`, width: `${size}px` }}
      className={className}
    />
  )
}
