declare module '*.svg' {

  interface IconProps extends React.SVGProps<SVGSVGElement> {
    title?: string;
    // alt?: never;
  }

  const content: React.FC<IconProps>;

  export default content;
}
