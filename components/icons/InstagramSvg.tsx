import React from 'react'


interface Props {
  className?: string
}


const InstagramSvg: React.FC<Props> = (props) => {
  return (
    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" className={props.className}>
      <path d="M21.429 15a6.428 6.428 0 11-12.857 0 6.428 6.428 0 0112.857 0z" fill="#fff" /><path d="M29.263 4.209a5.67 5.67 0 00-1.368-2.104A5.666 5.666 0 0025.79.737c-.645-.25-1.613-.549-3.397-.63C20.464.019 19.886 0 15 0S9.536.018 7.607.106c-1.784.082-2.753.38-3.397.63a5.661 5.661 0 00-2.104 1.37 5.672 5.672 0 00-1.37 2.103c-.25.645-.548 1.614-.629 3.398C.019 9.536 0 10.114 0 15c0 4.886.019 5.464.107 7.394.081 1.784.38 2.752.63 3.397.293.795.76 1.514 1.368 2.104a5.666 5.666 0 002.104 1.368c.645.251 1.614.55 3.398.63C9.536 29.982 10.114 30 15 30c4.886 0 5.465-.018 7.393-.107 1.784-.08 2.753-.379 3.398-.63a6.059 6.059 0 003.472-3.472c.25-.645.549-1.613.63-3.397.088-1.93.107-2.508.107-7.394s-.018-5.464-.107-7.393c-.08-1.784-.379-2.753-.63-3.398zM15 24.395a9.395 9.395 0 110-18.79A9.395 9.395 0 0124.396 15 9.395 9.395 0 0115 24.395zM24.767 7.43a2.196 2.196 0 110-4.392 2.196 2.196 0 010 4.392z" />
    </svg>
  )
}


InstagramSvg.defaultProps = {
  className: 'w-8 h-8 stroke-current text-black'
}


export default InstagramSvg;