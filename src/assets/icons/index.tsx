import React from "react";

export const BellIcon = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M19 10C19 5.94082 16.7616 3.1235 13.8654 2.27771C13.7605 2.00636 13.5948 1.7541 13.3695 1.54243C12.5997 0.81919 11.4003 0.81919 10.6305 1.54243C10.4057 1.75364 10.2402 2.00525 10.1353 2.27592C7.23535 3.11803 5 5.92919 5 10C5 12.6339 4.46898 14.1098 3.48596 15.1793C3.32161 15.3582 2.87632 15.7678 2.57468 16.0453L2.57465 16.0453L2.57465 16.0453L2.5745 16.0454C2.43187 16.1766 2.32138 16.2783 2.28796 16.3119L2 16.604V20.0141H8.08798C8.29384 21.0761 8.87009 21.7867 9.9122 22.4226C11.1941 23.2049 12.8059 23.2049 14.0878 22.4226C15.0075 21.8614 15.6241 20.9989 15.8743 20.0141H22V16.604L21.712 16.3119C21.6817 16.2812 21.5757 16.1834 21.437 16.0555C21.1363 15.7781 20.6823 15.3592 20.5154 15.1769C19.5317 14.1024 19 12.6246 19 10ZM13.7367 20.0141H10.1786C10.3199 20.2769 10.5607 20.4754 10.954 20.7154C11.5963 21.1073 12.4037 21.1073 13.046 20.7154C13.3434 20.5339 13.5758 20.2937 13.7367 20.0141ZM19.0402 16.5274C19.2506 16.7573 19.7016 17.1774 20 17.4519V18.0141H4V17.4524C4.29607 17.1811 4.74843 16.7613 4.95849 16.5327C6.29422 15.0794 7 13.1178 7 10C7 6.21989 9.33277 4.01238 12 4.01238C14.6597 4.01238 17 6.23129 17 10C17 13.1078 17.706 15.07 19.0402 16.5274Z"
                  fill="black"/>
        </svg>
    )
}

export const BucketIcon = ({size = 24, color = "black"}: { size?: number; color?: string }) => {
    return (
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M7.03361 6C7.3276 3.81519 9.51097 2 12 2C14.4891 2 16.6724 3.81519 16.9664 6H19.847C20.9516 6 21.847 6.89543 21.847 8C21.847 8.09464 21.8403 8.18916 21.8269 8.28284L20.1126 20.2828C19.9719 21.2681 19.128 22 18.1327 22H5.86731C4.87201 22 4.02817 21.2681 3.88741 20.2828L2.17313 8.28284C2.01692 7.18937 2.77671 6.17631 3.87018 6.0201C3.96387 6.00672 4.05839 6 4.15303 6H7.03361ZM14.9279 6C14.6239 4.93808 13.398 4 12 4C10.602 4 9.37613 4.93808 9.07214 6H14.9279ZM4.15303 8H7.00002V10H9.00002V8H15V10H17V8H19.847L18.1327 20H5.86731L4.15303 8Z"
                  fill={color}/>
        </svg>
    )
}

export const LikeIcon = () => {
    const [liked, setLiked] = React.useState(false); // Like bo'lsa true, aks holda false

    const toggleLike = () => {
        setLiked(!liked);
    };

    return liked ? (<svg
                onClick={toggleLike}
                width="22"
                height="21"
                viewBox="0 0 22 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{cursor: 'pointer'}}
            >
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M12.1027 0.696073C13.1724 0.172464 14.1056 -1.53839e-06 15.5532 1.61018e-05C19.2579 0.0153583 22 3.13984 22 7.11988C22 10.1578 20.3062 13.0923 17.1512 15.9299C15.4951 17.4193 13.3807 18.8933 11.8664 19.6775L11 20.1261L10.1336 19.6775C8.61932 18.8933 6.50489 17.4193 4.84884 15.9299C1.69383 13.0923 0 10.1578 0 7.11988C0 3.09727 2.71644 0 6.45455 0C7.85028 0 8.83132 0.188775 9.92181 0.728134C10.3015 0.915918 10.6582 1.13866 10.99 1.39576C11.335 1.12339 11.7066 0.88993 12.1027 0.696073Z"
                      fill="#D8143A"/>
            </svg>
        )
        :
        (<svg
            onClick={toggleLike}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{cursor: 'pointer'}}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.5532 2.00002C15.1056 2 14.1724 2.17246 13.1027 2.69607C12.7066 2.88993 12.335 3.12339 11.99 3.39576C11.6582 3.13866 11.3015 2.91592 10.9218 2.72813C9.83132 2.18878 8.85028 2 7.45455 2C3.71644 2 1 5.09727 1 9.11988C1 12.1578 2.69383 15.0923 5.84884 17.9299C7.50489 19.4193 9.61932 20.8933 11.1336 21.6775L12 22.1261L12.8664 21.6775C14.3807 20.8933 16.4951 19.4193 18.1512 17.9299C21.3062 15.0923 23 12.1578 23 9.11988C23 5.13984 20.2579 2.01536 16.5532 2.00002ZM21 9.11988C21 11.4999 19.5862 13.9493 16.8137 16.4429C15.3022 17.8023 13.359 19.1609 12 19.8737C10.641 19.1609 8.69782 17.8023 7.18628 16.4429C4.41382 13.9493 3 11.4999 3 9.11988C3 6.14772 4.88364 4 7.45455 4C8.56428 4 9.24813 4.13159 10.0351 4.52084C10.5 4.75077 10.9109 5.05437 11.2665 5.43377L12.0023 6.2187L12.7315 5.42755C13.0951 5.03295 13.512 4.72244 13.9819 4.49243C14.7459 4.11849 15.387 4 16.5491 4.00001C19.0882 4.01053 21 6.18896 21 9.11988Z"
                fill={"black"}
            />
        </svg>)
}

export const SearchIcon = () => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M19 18.9999L14.65 14.6499" stroke="black" strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round"/>
        </svg>
    )
}

export const MenuIcon = () => {
    return (
        <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 7H8" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21 1H0.999999" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21 13H0.999999" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export const ArrowLeftIcon = () => {
    return (
        <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M0.292893 7.29289C-0.0976314 7.68342 -0.0976315 8.31658 0.292892 8.7071L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34314C8.46159 1.95262 8.46159 1.31946 8.07107 0.928931C7.68054 0.538406 7.04738 0.538406 6.65686 0.928931L0.292893 7.29289ZM19 7L1 7L1 9L19 9L19 7Z"
                fill="black"/>
        </svg>
    )
}

export const ArrowRightIcon = () => {
    return (
        <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12.3536 4.35355C12.5488 4.15829 12.5488 3.84171 12.3536 3.64645L9.17157 0.464467C8.97631 0.269205 8.65973 0.269205 8.46447 0.464467C8.2692 0.659729 8.2692 0.976312 8.46447 1.17157L11.2929 4L8.46447 6.82843C8.2692 7.02369 8.2692 7.34027 8.46447 7.53553C8.65973 7.7308 8.97631 7.7308 9.17157 7.53554L12.3536 4.35355ZM-6.31387e-08 4.5L12 4.5L12 3.5L6.31387e-08 3.5L-6.31387e-08 4.5Z"
                fill="black"/>
        </svg>
    )
}

export const ExitIcon = () => {
    return (
        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M7.33496 19.8823H3.33496C2.80453 19.8823 2.29582 19.6716 1.92075 19.2965C1.54567 18.9215 1.33496 18.4128 1.33496 17.8823V3.88232C1.33496 3.35189 1.54567 2.84318 1.92075 2.46811C2.29582 2.09304 2.80453 1.88232 3.33496 1.88232H7.33496"
                stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14.335 15.8823L19.335 10.8823L14.335 5.88232" stroke="white" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M19.335 10.8823H7.33496" stroke="white" strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round"/>
        </svg>
    )
}


export const FullViewIcon = () => {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="18" height="18" fill="black"/>
        </svg>
    )
}


export const GridViewIcon = () => {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.7" y="0.7" width="6.6" height="6.6" stroke="black" strokeWidth="1.4"/>
            <rect x="0.7" y="10.7" width="6.6" height="6.6" stroke="black" strokeWidth="1.4"/>
            <rect x="10.7" y="0.7" width="6.6" height="6.6" stroke="black" strokeWidth="1.4"/>
            <rect x="10.7" y="10.7" width="6.6" height="6.6" stroke="black" strokeWidth="1.4"/>
        </svg>
    )
}

export const SortToolIcon = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M13 11C11.1362 11 9.57006 9.72523 9.12602 8H2V6H9.12602C9.57006 4.27477 11.1362 3 13 3C15.2091 3 17 4.79086 17 7C17 9.20914 15.2091 11 13 11ZM19 6H22V8H19V6ZM8 21C6.13616 21 4.57006 19.7252 4.12602 18H2V16H4.12602C4.57006 14.2748 6.13616 13 8 13C10.2091 13 12 14.7909 12 17C12 19.2091 10.2091 21 8 21ZM14 18H22V16H14V18ZM10 17C10 18.1046 9.10457 19 8 19C6.89543 19 6 18.1046 6 17C6 15.8954 6.89543 15 8 15C9.10457 15 10 15.8954 10 17ZM15 7C15 8.10457 14.1046 9 13 9C11.8954 9 11 8.10457 11 7C11 5.89543 11.8954 5 13 5C14.1046 5 15 5.89543 15 7Z"
                  fill="black"/>
        </svg>
    )
}

export const UploadIcon = ({size = 16}: { size?: number }) => {
    return (
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
                  d={`M10 14.4142V3.82843L13.2929 7.12132L14.7071 5.70711L9 0L3.29289 5.70711L4.70711 7.12132L8 3.82843V14.4142H10ZM18 18.4142V9.41421H16V18.4142H2V9.41421H0V18.4142C0 19.5188 0.89543 20.4142 2 20.4142H16C17.1046 20.4142 18 19.5188 18 18.4142Z`}
                  fill="black"/>
        </svg>
    )
}

export const DismissIcon = () => {
    return (
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M11 1.1L9.9 0L5.5 4.4L1.1 0L0 1.1L4.4 5.5L0 9.9L1.1 11L5.5 6.6L9.9 11L11 9.9L6.6 5.5L11 1.1Z"
                  fill="#A2A2A2"/>
        </svg>
    )
}

export const TruckIcon = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M16.382 7L18.2243 10.6847L21 12.5352V16H19.8293C19.4175 14.8348 18.3062 14 17 14C15.6938 14 14.5825 14.8348 14.1707 16H9.82929C9.41746 14.8348 8.30622 14 7 14C5.69378 14 4.58254 14.8348 4.17071 16H3V7H16.382ZM21 18H19.8293C19.4175 19.1652 18.3062 20 17 20C15.6938 20 14.5825 19.1652 14.1707 18H9.82929C9.41746 19.1652 8.30622 20 7 20C5.69378 20 4.58254 19.1652 4.17071 18H3C1.89543 18 1 17.1046 1 16V7C1 5.89543 1.89543 5 3 5H16.382C17.1395 5 17.832 5.428 18.1708 6.10557L19.7757 9.31526L23 11.4648V16C23 17.1046 22.1046 18 21 18ZM8 17C8 17.5523 7.55228 18 7 18C6.44772 18 6 17.5523 6 17C6 16.4477 6.44772 16 7 16C7.55228 16 8 16.4477 8 17ZM18 17C18 17.5523 17.5523 18 17 18C16.4477 18 16 17.5523 16 17C16 16.4477 16.4477 16 17 16C17.5523 16 18 16.4477 18 17Z"
                  fill="white"/>
        </svg>
    )
}

export const CheckIcon = ({size = 11}: { size?: number }) => {
    return (
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M3.8778 6.46975L1.48289 4L0.454529 5.0605L3.8778 8.59075L10.9374 1.3105L9.90907 0.25L3.8778 6.46975Z"
                fill="white"/>
        </svg>

    )
}

export const TakePhotoIcon = () => {
    return (
        <svg width="36" height="31" viewBox="0 0 36 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M29 22C29 22.5304 28.7893 23.0391 28.4142 23.4142C28.0391 23.7893 27.5304 24 27 24H9C8.46957 24 7.96086 23.7893 7.58579 23.4142C7.21071 23.0391 7 22.5304 7 22V11C7 10.4696 7.21071 9.96086 7.58579 9.58579C7.96086 9.21071 8.46957 9 9 9H13L15 6H21L23 9H27C27.5304 9 28.0391 9.21071 28.4142 9.58579C28.7893 9.96086 29 10.4696 29 11V22Z"
                stroke="#9586A8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path
                d="M18 20C20.2091 20 22 18.2091 22 16C22 13.7909 20.2091 12 18 12C15.7909 12 14 13.7909 14 16C14 18.2091 15.7909 20 18 20Z"
                stroke="#9586A8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path
                d="M1 8V3.5C1 2.39543 1.89543 1.5 3 1.5H7.5M1 23V27.5C1 28.6046 1.89543 29.5 3 29.5H7.5M35 7.5V3C35 1.89543 34.1046 1 33 1H28.5M35 23.5V28C35 29.1046 34.1046 30 33 30H28.5"
                stroke="#9586A8" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
    )
}
