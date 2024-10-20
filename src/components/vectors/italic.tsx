import { SVGProps } from "react"
const Italic = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="feather feather-italic"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M19 4h-9M14 20H5M15 4 9 20" />
  </svg>
)
export default Italic
