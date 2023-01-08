import { memo, FC } from 'react'
import clsx from 'clsx'

import { StyledIcon } from './styled'

interface IconProps {
  src: FC<any>
  classes?: string
  size?: number
}

const Icon: FC<IconProps> = ({ size = 20, classes, src, ...props }) => {
  const Component: any = src
  return (
    <StyledIcon className={clsx(classes)} {...props}>
      <Component size={size} />
    </StyledIcon>
  )
}

export default memo(Icon)
