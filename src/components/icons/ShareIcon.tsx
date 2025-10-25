import React from "react";

function ShareIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.8808 5.29935C16.9464 5.58095 16.3576 7.62897 16.1144 10.125C9.31758 10.125 3.19922 17.2548 3.19922 25.7028C6.00242 18.0228 12.1592 15.9362 16.1784 15.9362C16.4344 18.189 17.0104 19.994 17.8808 20.25C20.5688 21.0308 28.7992 15.9235 28.7992 12.7746C28.7992 9.62585 20.5688 4.51855 17.8808 5.29935Z"
        stroke="currentColor"
        strokeWidth="1.92"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ShareIcon;
