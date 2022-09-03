import React from 'react'
import { NotebookContainer } from './styles'

const Notebook = (props: any) => {

    const { color = '#60f' } = props

    return (
        <NotebookContainer>
            <svg width="34.437mm" height="42.72mm" version="1.1" viewBox="0 0 34.437 42.72" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="a" x1="126.33" x2="84.562" y1="124.83" y2="55.347" gradientUnits="userSpaceOnUse">
                        <stop stop-opacity=".21395" offset="0" />
                        <stop stop-opacity=".082353" offset=".77006" />
                        <stop stop-color="#fff" stop-opacity=".077987" offset="1" />
                    </linearGradient>
                </defs>
                <g transform="translate(-81.814 -61.017)">
                    <rect transform="rotate(3.5411)" x="86.635" y="73.744" width="5.485" height="1.0793" rx=".52917" ry=".52917" fill="#4d4d4d" />
                    <rect transform="rotate(3.5411)" x="87.03" y="80.118" width="5.485" height="1.0793" rx=".52917" ry=".52917" fill="#4d4d4d" />
                    <rect transform="rotate(3.5411)" x="87.429" y="86.561" width="5.485" height="1.0793" rx=".52917" ry=".52917" fill="#4d4d4d" />
                    <rect transform="rotate(3.5411)" x="87.823" y="92.935" width="5.485" height="1.0793" rx=".52917" ry=".52917" fill="#4d4d4d" />
                    <rect transform="rotate(3.5411)" x="86.237" y="67.301" width="5.485" height="1.0793" rx=".52917" ry=".52917" fill="#4d4d4d" />
                    <rect transform="rotate(3.5411)" x="85.842" y="60.927" width="5.485" height="1.0793" rx=".52917" ry=".52917" fill="#4d4d4d" />
                    <rect x="84.725" y="61.017" width="31.526" height="42.72" rx=".52917" ry=".52917" fill={color} />
                    <rect x="85.267" y="61.562" width="30.442" height="41.629" rx=".51097" ry=".51566" fill="url(#a)" />
                    <ellipse cx="86.834" cy="66.342" rx=".90785" ry=".87626" fill="#1a1a1a" fill-opacity=".58352" />
                    <ellipse cx="86.834" cy="72.729" rx=".90785" ry=".87626" fill="#1a1a1a" fill-opacity=".58352" />
                    <ellipse cx="86.834" cy="79.184" rx=".90785" ry=".87626" fill="#1a1a1a" fill-opacity=".58352" />
                    <ellipse cx="86.834" cy="85.57" rx=".90785" ry=".87626" fill="#1a1a1a" fill-opacity=".58352" />
                    <ellipse cx="86.834" cy="92.026" rx=".90785" ry=".87626" fill="#1a1a1a" fill-opacity=".58352" />
                    <ellipse cx="86.834" cy="98.412" rx=".90785" ry=".87626" fill="#1a1a1a" fill-opacity=".58352" />
                    <rect transform="matrix(.99809 -.061765 -.061765 -.99809 0 0)" x="77.542" y="-72.117" width="5.485" height="1.0793" rx=".52917" ry=".52917" fill="#999" />
                    <rect transform="matrix(.99809 -.061765 -.061765 -.99809 0 0)" x="77.148" y="-78.491" width="5.485" height="1.0793" rx=".52917" ry=".52917" fill="#999" />
                    <rect transform="matrix(.99809 -.061765 -.061765 -.99809 0 0)" x="76.749" y="-84.935" width="5.485" height="1.0793" rx=".52917" ry=".52917" fill="#999" />
                    <rect transform="matrix(.99809 -.061765 -.061765 -.99809 0 0)" x="76.355" y="-91.308" width="5.485" height="1.0793" rx=".52917" ry=".52917" fill="#999" />
                    <rect transform="matrix(.99809 -.061765 -.061765 -.99809 0 0)" x="75.956" y="-97.752" width="5.485" height="1.0793" rx=".52917" ry=".52917" fill="#999" />
                    <rect transform="matrix(.99809 -.061765 -.061765 -.99809 0 0)" x="75.562" y="-104.13" width="5.485" height="1.0793" rx=".52917" ry=".52917" fill="#999" />
                    <rect x="93.17" y="90.293" width="14.636" height="8.6795" rx=".49358" ry=".35853" fill="#fff" fill-opacity=".83546" stroke="#fff" stroke-dashoffset="7.717" stroke-opacity=".39934" stroke-width=".67096" />
                    <rect x="94.315" y="95.184" width="12.346" height=".14489" fill="#fff" fill-opacity=".84891" />
                    <rect x="94.315" y="92.202" width="12.346" height=".14489" fill="#fff" fill-opacity=".84891" />
                    <rect x="94.315" y="93.693" width="12.346" height=".14489" fill="#fff" fill-opacity=".84891" />
                </g>
            </svg>

        </NotebookContainer>
    )
}

export default Notebook
