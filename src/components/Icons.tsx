import React, { FC } from "react"
import styled, { CSSProperties } from "styled-components"

const Icons: any = {
  clock: (
    <g transform="matrix(1.25,0,0,1.25,0,0)">
      <path d="M 12,1.5c5.799,0,10.5,4.701,10.5,10.5S17.799,22.5,12,22.5S1.5,17.799,1.5,12S6.201,1.5,12,1.5z"></path>
      <path d="M 12,12V8.25"></path>
      <path d="M 12,12l4.687,4.688"></path>
    </g>
  ),
  presentation: (
    <g>
      <path d="M 2.25,1.5h19.5c0.414,0,0.75,0.336,0.75,0.75v1.5c0,0.414-0.336,0.75-0.75,0.75H2.25 C1.836,4.5,1.5,4.164,1.5,3.75v-1.5C1.5,1.836,1.836,1.5,2.25,1.5z "></path>
      <path d="M 3,4.5h18V18H3V4.5z "></path>
      <path d="M 12,21.5V18 "></path>
      <path d="M 1.5,18h21 "></path>
      <path d="M 15,9h3 "></path>
      <path d="M 15,12h3 "></path>
      <path d="M 9,7.5c1.657,0,3,1.343,3,3s-1.343,3-3,3s-3-1.343-3-3S7.343,7.5,9,7.5z "></path>
      <path d="M 13.5,22.5c0-0.553-0.672-1-1.5-1s-1.5,0.447-1.5,1"></path>
    </g>
  ),
  task: (
    <g>
      <path d="M 5.25,10.511h5.25 "></path>
      <path d="M 5.25,14.261h3 "></path>
      <path d="M 5.25,18.011h3 "></path>
      <path d="M 9.75,23.261h-7.5c-0.828,0-1.5-0.672-1.5-1.5V6.011 c0-0.828,0.672-1.5,1.5-1.5H6c0-2.071,1.679-3.75,3.75-3.75s3.75,1.679,3.75,3.75h3.75c0.828,0,1.5,0.672,1.5,1.5v2.25 "></path>
      <path d="M 9.75,3.761 c0.207,0,0.375,0.168,0.375,0.375c0,0.207-0.168,0.375-0.375,0.375S9.375,4.343,9.375,4.136c0,0,0,0,0,0 C9.375,3.929,9.543,3.761,9.75,3.761 "></path>
      <path d="M 17.25,11.261c3.314,0,6,2.686,6,6s-2.686,6-6,6s-6-2.686-6-6S13.936,11.261,17.25,11.261z "></path>
      <path d="M 19.924,15.516l-2.905,3.874c-0.249,0.332-0.72,0.398-1.052,0.149c-0.028-0.021-0.055-0.044-0.079-0.069l-1.5-1.5"></path>
    </g>
  ),
  sun: (
    <g>
      <path d="M 12,7.5c2.485,0,4.5,2.015,4.5,4.5s-2.015,4.5-4.5,4.5S7.5,14.485,7.5,12S9.515,7.5,12,7.5z "></path>
      <path d="M 12,0.75V4.5 "></path>
      <path d="M 12,19.5v3.75 "></path>
      <path d="M 23.25,12H19.5 "></path>
      <path d="M 4.5,12H0.75 "></path>
      <path d="M 20.25,3.75l-3,3 "></path>
      <path d="M 6.75,17.25l-3,3 "></path>
      <path d="M 20.25,20.25l-3-3 "></path>
      <path d="M 6.75,6.75l-3-3"></path>
    </g>
  ),
  sunrise: (
    <g>
      <path d="M 11.728,21.457v-9.75 "></path>
      <path d="M 13.978,13.957l-2.25-2.25l-2.25,2.25 "></path>
      <path d="M 14.728,16.957h8.25 "></path>
      <path d="M 1.228,16.957h7.5 "></path>
      <path d="M 11.728,3.457v-1.5 "></path>
      <path d="M 18.092,6.093l1.06-1.061 "></path>
      <path d="M 20.728,12.457h1.5 "></path>
      <path d="M 5.364,6.093L4.303,5.032 "></path>
      <path d="M 2.728,12.457h-1.5 "></path>
      <path d="M 14.728,16.957 h0.93c2.504-2.171,2.774-5.96,0.603-8.464S10.301,5.72,7.797,7.89s-2.774,5.96-0.603,8.464c0.186,0.215,0.388,0.416,0.603,0.603 h0.931"></path>
    </g>
  ),
  sunset: (
    <g>
      <path d="M 11.65,12.207v9.75 "></path>
      <path d="M 9.4,19.707l2.25,2.25l2.25-2.25 "></path>
      <path d="M 14.65,17.457h8.25 "></path>
      <path d="M 1.15,17.457h7.5 "></path>
      <path d="M 11.65,3.957v-1.5 "></path>
      <path d="M 18.014,6.593l1.061-1.061 "></path>
      <path d="M 20.65,12.957h1.5 "></path>
      <path d="M 5.286,6.593L4.225,5.532 "></path>
      <path d="M 2.65,12.957h-1.5 "></path>
      <path d="M 14.65,17.457h0.931 c2.503-2.171,2.773-5.96,0.602-8.464s-5.96-2.773-8.464-0.602s-2.773,5.96-0.602,8.464c0.186,0.215,0.387,0.416,0.602,0.602H8.65"></path>
    </g>
  ),
  logout: (
    <g>
      <path d="M 20.249,18.754v1.5c0,0.828-0.672,1.5-1.5,1.5h-4.5 "></path>
      <path d="M 14.249,3.754h4.5c0.828,0,1.5,0.672,1.5,1.5v1.5 "></path>
      <path d="M 10.393,23.246l-9-1.286c-0.369-0.053-0.644-0.369-0.644-0.742V3.725c0-0.354,0.247-0.66,0.593-0.734l9-2.221 c0.405-0.087,0.804,0.171,0.89,0.576c0.011,0.052,0.017,0.105,0.017,0.158v21c0,0.414-0.336,0.75-0.75,0.75 C10.463,23.254,10.428,23.251,10.393,23.246z "></path>
      <path d="M 20.249,9.753l3,3h-8.25 "></path>
      <path d="M 20.25,15.753l3-3 "></path>
      <path d="M 7.874,11.629 c-0.207,0-0.375,0.168-0.375,0.375s0.168,0.375,0.375,0.375s0.375-0.168,0.375-0.375c0-0.001,0-0.003,0-0.004 c0.001-0.207-0.166-0.374-0.373-0.375c-0.001,0-0.001,0-0.002,0l0,0"></path>
    </g>
  ),
  arrow: (
    <g>
      <path d="M 0.75,10c0-0.828,0.672-1.5,1.5-1.5H16.5V5.011c0-0.272,0.163-0.343,0.362-0.158l6.149,6.1 c0.304,0.282,0.322,0.756,0.04,1.06c-0.013,0.014-0.026,0.027-0.04,0.04l-6.149,6.1c-0.2,0.185-0.362,0.114-0.362-0.158V14.5H2.25 c-0.828,0-1.5-0.672-1.5-1.5V10z"></path>
    </g>
  ),
  emailSend: (
    <g>
      <path d="M 1.4,3.743C0.996,3.02,1.254,2.106,1.978,1.702C2.409,1.461,2.93,1.448,3.373,1.666l19.014,9.659 c0.369,0.188,0.516,0.639,0.328,1.009c-0.072,0.142-0.187,0.257-0.328,0.328L3.373,22.334c-0.743,0.367-1.642,0.061-2.009-0.682 C1.146,21.21,1.159,20.688,1.4,20.257l5.058-8.264L1.4,3.743z "></path>
      <path d="M 22.797,11.993H6.453"></path>
    </g>
  ),
  github: (
    <g>
      <path d="M 14.41,22.35c0,0.276,0.224,0.5,0.5,0.5c0.047,0,0.095-0.007,0.14-0.02c5.969-1.723,9.412-7.959,7.689-13.929 C21.016,2.932,14.779-0.511,8.81,1.213s-9.412,7.959-7.689,13.929c1.072,3.714,3.975,6.617,7.689,7.689 c0.265,0.077,0.543-0.075,0.62-0.34c0.013-0.045,0.02-0.093,0.02-0.14V20C8.026,20.43,6.513,19.676,6,18.28 C5.72,17.429,5.256,16.65,4.64,16c2.85,0.69,2.9,2.54,4.84,1.67c0.059-0.649,0.275-1.274,0.63-1.82c-2.2-0.25-4.52-0.6-4.52-4.4 c-0.019-0.982,0.339-1.934,1-2.66c-0.301-0.854-0.265-1.791,0.1-2.62c0,0,0.83-0.27,2.73,1c1.636-0.452,3.364-0.452,5,0 c1.89-1.28,2.72-1,2.72-1c0.365,0.829,0.401,1.766,0.1,2.62c0.662,0.726,1.02,1.678,1,2.66c0,3.81-2.32,4.15-4.53,4.39 c0.473,0.682,0.712,1.5,0.68,2.33L14.41,22.35z"></path>
    </g>
  ),
  twitter: (
    <g>
      <path d="M 23.18,6.71l-2.1-0.9l1.1-2.4l-2.56,0.85c-0.815-0.76-1.885-1.188-3-1.2c-2.483,0.005-4.495,2.017-4.5,4.5v1 c-3.54,0.73-6.63-1.2-9.5-4.5c-0.5,2.667,0,4.667,1.5,6l-3.29-0.5c0.262,2.186,2.052,3.871,4.25,4l-2.75,1c1,2,2.82,2.31,5.25,2.5 c-1.986,1.355-4.346,2.054-6.75,2c12.76,5.67,20.25-2.66,20.25-10V8.23L23.18,6.71z"></path>
    </g>
  ),
  linkedIn: (
    <g>
      <path d="M 5.67,22.63H0.81V8.7h4.86V22.63z "></path>
      <path d="M 15.76,13.24c-1.182,0-2.14,0.958-2.14,2.14l0,0v7.25H8.51V8.7h5.11v1.59 c1.198-1.014,2.711-1.58,4.28-1.6c3.17,0,5.37,2.35,5.37,6.81v7.13H17.9v-7.25c0.006-1.182-0.948-2.144-2.13-2.15 c-0.003,0-0.007,0-0.01,0V13.24z "></path>
      <path d="M 5.76,3.88c0,1.381-1.119,2.5-2.5,2.5s-2.5-1.119-2.5-2.5s1.119-2.5,2.5-2.5 c1.373,0.011,2.48,1.127,2.48,2.5L5.76,3.88z"></path>
    </g>
  ),
  instagram: (
    <g>
      <path d="M 6.74,0.75h10.5c3.314,0,6,2.686,6,6v10.5c0,3.314-2.686,6-6,6H6.74c-3.314,0-6-2.686-6-6V6.75 C0.74,3.436,3.426,0.75,6.74,0.75z "></path>
      <path d="M 11.99,7c2.761,0,5,2.239,5,5s-2.239,5-5,5s-5-2.239-5-5S9.229,7,11.99,7z "></path>
      <path d="M 19.34,5.15 c0,0.276-0.224,0.5-0.5,0.5s-0.5-0.224-0.5-0.5 "></path>
      <path d="M 18.34,5.15c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5"></path>
    </g>
  ),
  checkMark: (
    <g>
      <path d="M 6,13.223L8.45,16.7c0.322,0.481,0.974,0.61,1.455,0.288c0.096-0.065,0.182-0.145,0.252-0.237L18,6.828 "></path>
      <path d="M 12,0.749c6.213,0,11.25,5.037,11.25,11.25S18.213,23.249,12,23.249S0.75,18.212,0.75,11.999S5.787,0.749,12,0.749z"></path>
    </g>
  ),
  heart: (
    <g>
      <path d="M23.3,5.076a6.582,6.582,0,0,0-10.446-1.71L12,4.147l-.827-.753A6.522,6.522,0,0,0,5.485,1.588,6.472,6.472,0,0,0,.7,5.075,6.4,6.4,0,0,0,1.91,12.544L11.283,22.2a1,1,0,0,0,1.434,0l9.36-9.638A6.414,6.414,0,0,0,23.3,5.076Z"></path>
    </g>
  ),
  tag: (
    <g>
      <path d="M22.291,16.12a3,3,0,0,0,0-4.242l-11-11A2.978,2.978,0,0,0,9.169,0H2A2,2,0,0,0,0,2V9.17a2.978,2.978,0,0,0,.879,2.122l11,11a3,3,0,0,0,4.242,0Zm-1.414-1.414-6.172,6.172a1.025,1.025,0,0,1-1.414,0l-11-11A1,1,0,0,1,2,9.17V2.5A.5.5,0,0,1,2.5,2H9.169a1,1,0,0,1,.708.293l11,11a1,1,0,0,1,0,1.414Z"></path>
      <path d="M4.498 5.999 A1.500 1.500 0 1 0 7.498 5.999 A1.500 1.500 0 1 0 4.498 5.999 Z"></path>
    </g>
  ),
  pdf: (
    <g>
      <path d="M8.451,12.322c-.105-.046-.326-.048-.326.164v3.978a.238.238,0,0,0,.327.21,2.375,2.375,0,0,0,0-4.352Z"></path>
      <path d="M4,12.123H3.377a.252.252,0,0,0-.252.252v1.246a.252.252,0,0,0,.252.252H4a.875.875,0,0,0,0-1.75Z"></path>
      <path d="M18,19V10a1,1,0,0,0-1-1H1a1,1,0,0,0-1,1v9a1,1,0,0,0,1,1H17A1,1,0,0,0,18,19ZM4,15.123H3.377a.252.252,0,0,0-.252.252V17.5a.625.625,0,0,1-1.25,0v-6a.625.625,0,0,1,.625-.625H4a2.125,2.125,0,0,1,0,4.25Zm3.5,3a.625.625,0,0,1-.625-.625v-6a.625.625,0,0,1,.625-.625,3.625,3.625,0,0,1,0,7.25Zm8-6h-2a.375.375,0,0,0-.375.375v1.123a.252.252,0,0,0,.252.252H14.5a.625.625,0,0,1,0,1.25H13.377a.252.252,0,0,0-.252.252V17.5a.625.625,0,0,1-1.25,0v-5A1.627,1.627,0,0,1,13.5,10.873h2a.625.625,0,0,1,0,1.25Z"></path>
      <path d="M23.707,5.705,18.293.291A1,1,0,0,0,17.585,0H6A2,2,0,0,0,4,2v5.75A.25.25,0,0,0,4.25,8h1.5A.25.25,0,0,0,6,7.748V2.5A.5.5,0,0,1,6.5,2H16.75a.25.25,0,0,1,.25.25V5a2,2,0,0,0,2,2h2.75a.25.25,0,0,1,.25.25V21.5a.5.5,0,0,1-.5.5H6.25a.25.25,0,0,1-.25-.25v-.5A.248.248,0,0,0,5.751,21H4.25a.25.25,0,0,0-.25.25V22a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2V6.412A1,1,0,0,0,23.707,5.705Z"></path>
    </g>
  ),
  check: (
    <g>
      <path d="M23.374.287a1.5,1.5,0,0,0-2.093.345L7.246,20.2,2.561,15.511A1.5,1.5,0,1,0,.439,17.632l5.935,5.934a1.525,1.525,0,0,0,2.279-.186l15.066-21A1.5,1.5,0,0,0,23.374.287Z"></path>
    </g>
  ),
  android: (
    <g>
      <path d="M6.462,22.876H17.538a1.222,1.222,0,0,0,1.212-1.228V11.626a.75.75,0,0,0-.75-.75H6a.75.75,0,0,0-.75.75V21.648A1.222,1.222,0,0,0,6.462,22.876Z" />
      <path d="M5.22,8.3a1,1,0,0,0,.944,1.329H17.833A1,1,0,0,0,18.776,8.3a6.863,6.863,0,0,0-3.384-3.867.248.248,0,0,1-.119-.313l.633-1.626a1,1,0,1,0-1.863-.726l-.7,1.788a.25.25,0,0,1-.269.156,7.406,7.406,0,0,0-1.071-.081,7.653,7.653,0,0,0-1.079.081.249.249,0,0,1-.269-.157L9.971,1.767A1,1,0,1,0,8.1,2.485L8.73,4.112a.25.25,0,0,1-.12.313A6.806,6.806,0,0,0,5.22,8.3Zm9.03-2.171a.75.75,0,1,1-.75.75A.75.75,0,0,1,14.25,6.126Zm-4.5,0a.75.75,0,1,1-.75.75A.75.75,0,0,1,9.75,6.126Z" />
      <path d="M22,19.126v-7a1,1,0,1,0-2,0v7a1,1,0,1,0,2,0Z" />
      <path d="M3,11.126a1,1,0,0,0-1,1v7a1,1,0,0,0,2,0v-7A1,1,0,0,0,3,11.126Z" />
    </g>
  ),
  ios: (
    <g>
      <path d="M17.58,13.29a4.82,4.82,0,0,1,1.94-3.87.5.5,0,0,0,.07-.72A5.16,5.16,0,0,0,16,7h0c-1.69-.16-3.3,1-4.16,1S9.58,7,8.18,7A5.34,5.34,0,0,0,3.67,9.76C1.75,13.1,3.18,18,5,20.74c.91,1.32,2,2.81,3.44,2.76s1.9-.89,3.57-.89,2.14.89,3.6.86S18.08,22.12,19,20.8a12.23,12.23,0,0,0,1.37-2.67.5.5,0,0,0-.23-.61A4.76,4.76,0,0,1,17.58,13.29Z" />
      <path d="M15,4.17a5.24,5.24,0,0,0,1.22-3.09.5.5,0,0,0-.6-.51,5.35,5.35,0,0,0-2.81,1.67,5.07,5.07,0,0,0-1.25,3,.5.5,0,0,0,.55.51A4.48,4.48,0,0,0,15,4.17Z" />
    </g>
  ),
}

interface Props {
  name: string
  fill?: string
  stroke?: string
  width?: string
  height?: string | number
  viewBox?: string
  strokeWidth?: string
  className?: string
}

export const Icon: FC<Props> = ({
  name = "sun",
  height = "50px",
  width = "50px",
  fill = "none",
  stroke = "#333",
  strokeWidth = "1.5",
  viewBox = `0 0 ${30} ${30}`,
  className,
}) => {
  return (
    <SVG
      className={className}
      width={width}
      height={height}
      viewBox={viewBox}
      version="1.1"
      strokeWidth={strokeWidth}
      fill={fill}
      stroke={stroke}
      xmlns="http://www.w3.org/2000/svg">
      {Icons[name]}
    </SVG>
  )
}

const SVG = styled.svg`
  vertical-align: middle;
  margin-right: 5px;
`
