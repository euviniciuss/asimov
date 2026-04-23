import { Typography } from '@components/ui/typography'
import { ArrowLink } from '@components/ui/arrow-link'
import { ICaseItemProps } from './types'

export function CaseItem({ description, href }: ICaseItemProps) {
  return (
    <div className="w-full flex flex-col gap-5">
      <Typography as="p" variant="p" className="text-white">
        {description}
      </Typography>

      <ArrowLink.Root href={href} background="green" variant="transparent">
        <ArrowLink.Text text="Learn more" />
        <ArrowLink.Icon />
      </ArrowLink.Root>
    </div>
  )
}