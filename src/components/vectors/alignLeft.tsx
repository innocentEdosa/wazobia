import { SVGProps } from "react"
const AlignLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="feather feather-align-left"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M17 10H3M21 6H3M21 14H3M17 18H3" />
  </svg>
)
export default AlignLeft
