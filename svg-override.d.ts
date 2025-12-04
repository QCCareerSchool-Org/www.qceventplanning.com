declare module '*.svg' {

  interface IconProps extends React.SVGProps<SVGSVGElement> {
    title?: string;
  }

  const content: React.FC<IconProps>;

  export default content;
}
