import { SVGProps } from "react"
const AlignRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="feather feather-align-right"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M21 10H7M21 6H3M21 14H3M21 18H7" />
  </svg>
)
export default AlignRight
