export interface ButtonProps {
  title: string,
  clickAction: Function,
  size: 'small' | 'medium' | 'large' | undefined
}

export interface NavButtonProps {
  title: string,
  navigateTo: `${'/'}${string}`,
  navigateFrom: 'current-page' | 'root-page',
  size: 'small' | 'medium' | 'large' | undefined
}