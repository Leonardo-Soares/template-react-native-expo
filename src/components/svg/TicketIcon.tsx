import React from 'react'
import Svg, { Path } from 'react-native-svg'

export default function TicketIcon({ active }: { active: boolean }) {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M7.93476 2.62971C7.50488 3.05959 7.52803 3.75511 7.78265 4.30844C8.04861 4.88739 8.13092 5.53391 8.01849 6.16103C7.90607 6.78816 7.60431 7.36582 7.1538 7.81634C6.70328 8.26685 6.12562 8.56861 5.4985 8.68103C4.87137 8.79345 4.22486 8.71115 3.6459 8.44518C3.09257 8.19166 2.39705 8.16741 1.96718 8.59729L1.32126 9.24321C1.11462 9.44991 0.998535 9.73022 0.998535 10.0225C0.998535 10.3148 1.11462 10.5951 1.32126 10.8018L12.9897 22.4702C13.1964 22.6768 13.4767 22.7929 13.769 22.7929C14.0612 22.7929 14.3415 22.6768 14.5483 22.4702L15.1942 21.8243C15.624 21.3944 15.6009 20.6989 15.3463 20.1456C15.0803 19.5666 14.998 18.9201 15.1104 18.293C15.2229 17.6658 15.5246 17.0882 15.9751 16.6377C16.4256 16.1872 17.0033 15.8854 17.6304 15.773C18.2576 15.6605 18.9041 15.7429 19.483 16.0088C20.0364 16.2623 20.7319 16.2866 21.1618 15.8567L21.8077 15.2108C22.0143 15.0041 22.1304 14.7238 22.1304 14.4315C22.1304 14.1392 22.0143 13.8589 21.8077 13.6522L10.1393 1.9838C9.93255 1.77716 9.65224 1.66107 9.35996 1.66107C9.06769 1.66107 8.78738 1.77716 8.58067 1.9838L7.93476 2.62971V2.62971Z" stroke={!active ? "#6F8790" : "#D94540"} strokeWidth="1.88957" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>

  )
}
