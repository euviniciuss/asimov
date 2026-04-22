import Link from 'next/link'
import { Typography } from '@components/ui/typography'
import { ICustomLinkProps } from './types'

export function CustomLink({ href, children }: ICustomLinkProps) {
  return (
    <Link href={href} className="cursor-pointer">
      <Typography
        as="p"
        variant="p"
        className="text-black"
      >
        {children}
      </Typography>
    </Link>
  )
}