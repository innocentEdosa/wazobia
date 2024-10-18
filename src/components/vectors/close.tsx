import { SVGProps } from "react"
const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="feather feather-x"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
)
export default CloseIcon
