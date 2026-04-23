import { VariantProps } from 'class-variance-authority';
import { TBackgroundCardVariants } from './components/service-card/types';
import { headingVariants } from '@components/ui/heading/styles';
import { TBackgroundVariants } from '@components/ui/arrow-link/types';

interface IImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface IServiceCardContentProps {
  id: string;
  title: string;
  subtitle: string;
  background: TBackgroundCardVariants;
  headingVariant: VariantProps<typeof headingVariants>['variant'];
  href: string;
  backgroundArrowLink: TBackgroundVariants;
  image: IImageProps;
}
