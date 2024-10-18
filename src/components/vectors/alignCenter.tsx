import { SVGProps } from "react"
const AlignCenter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="feather feather-align-center"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M18 10H6M21 6H3M21 14H3M18 18H6" />
  </svg>
)
export default AlignCenter
