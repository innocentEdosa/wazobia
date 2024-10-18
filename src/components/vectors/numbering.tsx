import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="feather feather-menu"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M3 12h18M3 6h18M3 18h18" />
  </svg>
)
export default SvgComponent
