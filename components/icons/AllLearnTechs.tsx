'use client';

import { motion } from 'framer-motion';

const animation = {
  hide: { x: -8, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  }
};

const AllLearningTechs = () => {
  return (
    <>
      <motion.p
        className='text-base text-center lg:text-start mb-2.5 text-gray-400'
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.6 }}
      >
        I am currently learning or interested in learning:
      </motion.p>

      <motion.ul
        className='flex justify-center items-center flex-wrap gap-3.5 text-gray-400'
        initial='hide'
        animate='show'
        transition={{ delayChildren: 0.6, staggerChildren: 0.025 }}
      >

        <motion.li style={{ opacity: 1, transform: 'none' }} variants={animation}>
          <div className='transition duration-200 grayscale hover:grayscale-0'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' width='32px' height='32px' baseProfile='basic' fill='currentColor'>
              <title>MySQL</title>
              <circle cx='24' cy='24' r='20' fill='#216287' /><circle cx='24' cy='24' r='18' fill='#e87912' /><path fill='#216287' d='M29.69,31.95c0,4.35-3.09,7.98-7.19,8.82l-0.55,0.1C13.53,39.87,7,32.7,7,24c0-9.39,7.61-17,17-17 c0.17,0,0.35,0,0.52,0.01c-3.5,1.23-6.02,4.56-6.02,8.49c0,1.49,0.36,2.9,1.01,4.14c0.86,1.66,2.3,2.94,3.97,3.78l1.22,0.61 c1.67,0.84,3.12,2.12,3.98,3.78C29.32,29.05,29.69,30.46,29.69,31.95z' /><path fill='#fff' d='M24,6C14.059,6,6,14.059,6,24c0,8.671,6.132,15.906,14.295,17.614l0.012,0.063l0.159-0.029 C21.609,41.876,22.79,42,24,42c9.941,0,18-8.059,18-18C42,14.059,33.941,6,24,6z M8,24c0-7.935,5.813-14.521,13.4-15.769 C19.309,9.994,18,12.626,18,15.5c0,1.519,0.367,3.029,1.062,4.368c0.865,1.668,2.316,3.051,4.197,3.996l1.219,0.613 c1.691,0.852,2.991,2.084,3.759,3.564c0.63,1.214,0.949,2.528,0.949,3.907c0,3.645-2.35,6.857-5.711,8.024 C14.897,39.693,8,32.645,8,24z M25.905,39.876c2.599-1.721,4.281-4.668,4.281-7.927c0-1.52-0.367-3.029-1.062-4.368 c-0.865-1.668-2.316-3.051-4.197-3.996l-1.219-0.613c-1.692-0.852-2.991-2.083-3.759-3.564C19.319,18.193,19,16.879,19,15.5 c0-3.173,1.781-6.017,4.464-7.473C23.643,8.021,23.819,8,24,8c8.822,0,16,7.178,16,16C40,32.177,33.831,38.93,25.905,39.876z' /><path fill='#fff' d='M38.458,27.528c-0.776-0.927-2.018-1.829-2.809-3.135c-0.111-0.184-0.053-0.407,0.135-0.507 C36.799,23.342,36.978,23.441,38,23c-1-1-2.037-1.36-3.681-1.774c-0.322-0.067-0.507-0.337-0.561-0.634 c-0.088-0.323-0.275-0.87-0.471-1.307c-1.421-2.871-3.192-6.625-6.786-6.907c-0.237-0.003-0.463-0.099-0.62-0.257 c-0.453-0.432-1.087-0.967-1.67-1.055c-0.115,0.011-0.057-0.028-0.146,0.054c-0.233,0.273-0.186,0.283-0.026,0.63 c0.216,0.369,0.628,0.791,1.033,1.208c0.411,0.531,0.126,1.308,0.396,1.904c0.111,0.423,0.344,0.923,0.603,1.229 c0.125,0.161,0.163,0.365,0.124,0.55c-0.288,1.377-0.491,2.862-0.212,4.241c0.006,0.147,0.15,0.202,0.256,0.149 c0.033-0.026,0.032-0.008,0.16-0.233C26.556,20.448,27.675,18.307,28,19c0.473,1.538,1.13,4.53,2.522,5.455 c0.059,0.025,0.013,0.122-0.045,0.089c-1.454-0.751-2.631-2.682-2.978-3.984c-0.27,0.023-0.512,0.242-0.648,0.493 c-0.205,0.719-1.26,0.756-1.449-0.013c-0.076-0.298-0.138-0.6-0.167-0.905c-0.111-1.11-0.041-2.753,0.211-3.582 c-0.704-0.76-1.098-2.227-1.005-2.995c-0.413-0.418-0.847-0.829-1.17-1.344c-0.608-0.774-0.076-2.132,0.967-2.083 c0.924,0.077,1.672,0.707,2.33,1.301c0.729-0.065,2.173,0.444,2.982,0.991c1.834,1.191,2.799,3.236,3.847,5.078 c0.409,0.836,1.142,2.25,1.123,2.924c1.866,0.578,3.975,1.277,5.039,3.046c0.019,0.035,0.001,0.08-0.038,0.091 c0,0-2.9,0.91-2.9,0.91l1.921,3C38.575,27.522,38.495,27.584,38.458,27.528L38.458,27.528z' /><path fill='#fff' d='M27.046,13.688l0.833,1.189C27.879,14.878,28.83,13.53,27.046,13.688z' /><g><path fill='#fff' d='M9.762,20.071c0.776,0.927,2.018,1.829,2.809,3.135c0.111,0.184,0.053,0.407-0.135,0.507 c-1.015,0.543-1.193,0.444-2.215,0.886c1,1,2.037,1.36,3.681,1.774c0.322,0.067,0.507,0.337,0.561,0.634 c0.088,0.323,0.275,0.87,0.471,1.307c1.421,2.871,3.192,6.625,6.786,6.907c0.237,0.003,0.463,0.099,0.62,0.257 c0.453,0.432,1.087,0.967,1.67,1.055c0.115-0.011,0.057,0.028,0.146-0.054c0.233-0.273,0.186-0.283,0.026-0.63 c-0.216-0.369-0.628-0.791-1.033-1.208c-0.411-0.531-0.126-1.308-0.396-1.904c-0.111-0.423-0.344-0.923-0.603-1.229 c-0.125-0.161-0.163-0.365-0.124-0.55c0.288-1.377,0.491-2.862,0.212-4.241c-0.006-0.147-0.15-0.202-0.256-0.149 c-0.033,0.026-0.032,0.008-0.16,0.233c-0.158,0.348-1.277,2.49-1.602,1.796c-0.473-1.538-1.13-4.53-2.522-5.455 c-0.059-0.025-0.013-0.122,0.045-0.089c1.454,0.751,2.631,2.682,2.978,3.984c0.27-0.023,0.512-0.242,0.648-0.493 c0.205-0.719,1.26-0.756,1.449,0.013c0.076,0.298,0.138,0.6,0.167,0.905c0.111,1.11,0.041,2.753-0.211,3.582 c0.704,0.76,1.098,2.227,1.005,2.995c0.413,0.418,0.847,0.829,1.17,1.344c0.608,0.774,0.076,2.132-0.967,2.083 c-0.924-0.077-1.672-0.707-2.33-1.301c-0.729,0.065-2.173-0.444-2.982-0.991c-1.834-1.191-2.799-3.236-3.847-5.078 c-0.409-0.836-1.142-2.25-1.123-2.924c-1.866-0.578-3.975-1.277-5.039-3.046c-0.019-0.035-0.001-0.08,0.038-0.091 c0,0,2.9-0.91,2.9-0.91l-1.921-3C9.645,20.077,9.725,20.016,9.762,20.071L9.762,20.071z' /><path fill='#fff' d='M21.174,33.911l-0.833-1.189C20.342,32.722,19.39,34.07,21.174,33.911z' /></g></svg>
          </div>
        </motion.li>

        <motion.li style={{ opacity: 1, transform: 'none' }} variants={animation}>
          <div className='transition duration-200 hover:text-[#0277bd]'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' width='32px' height='32px' fill='currentColor'>
              <title>PostgreSQL</title>
              <path fill='#fff' d='M44.083,29.79c-0.183-0.829-0.935-1.796-2.452-1.796c-0.31,0-0.649,0.039-1.035,0.119c-0.708,0.146-1.311,0.217-1.842,0.241c4.133-7.04,6.816-16.819,4.159-20.214c-3.501-4.473-8.214-5.141-10.711-5.141L31.967,3c-0.929,0.015-1.893,0.129-2.863,0.339l-3.583,0.774C25.033,4.052,24.536,4.009,24.018,4l-0.03,0l-0.016,0l-0.152-0.001c-1.593,0-3.046,0.338-4.341,0.973l-1.251-0.493c-1.72-0.678-4.308-1.485-6.868-1.485c-0.144,0-0.287,0.003-0.431,0.008C8.407,3.093,6.241,4.05,4.664,5.769C2.696,7.915,1.8,11.054,2.003,15.1C2.013,15.309,4.461,36,11.4,36h0.025l0.064-0.001c0.901-0.022,1.76-0.384,2.563-1.077c0.613,0.46,1.406,0.732,2.145,0.84c0.488,0.115,1.366,0.278,2.418,0.278c1.284,0,2.442-0.263,3.44-0.738c-0.001,0.88-0.006,1.994-0.016,3.418l-0.001,0.075l0.005,0.075c0.097,1.419,0.342,2.698,0.711,3.701c1.051,2.859,2.866,4.434,5.111,4.434c0.093,0,0.188-0.003,0.284-0.009c1.846-0.114,3.717-1.151,5.004-2.772c1.393-1.755,1.715-3.607,1.839-5.026L35,39.111v-0.088v-4.079l0.103,0.01l0.436,0.038l0.042,0.004l0.042,0.002c0.124,0.006,0.252,0.008,0.381,0.008c1.507,0,3.362-0.391,4.616-0.974C41.819,33.476,44.559,31.948,44.083,29.79z' /><path d='M33,34c0-0.205,0.012-0.376,0.018-0.565C33.008,33.184,33,33,33,33s0.012-0.009,0.032-0.022c0.149-2.673,0.886-3.703,1.675-4.29c-0.11-0.153-0.237-0.318-0.356-0.475c-0.333-0.437-0.748-0.979-1.192-1.674l-0.082-0.158c-0.067-0.164-0.229-0.447-0.435-0.819c-1.183-2.14-3.645-6.592-1.96-9.404c0.738-1.232,2.122-1.942,4.121-2.117C33.986,11.718,30.925,6.115,23.985,6c-0.002,0-0.004,0-0.006,0c-6.041-0.098-8.026,5.392-8.672,8.672c0.89-0.377,1.906-0.606,2.836-0.606c0.014,0,0.029,0,0.043,0c2.29,0.017,3.865,1.239,4.323,3.354c0.335,1.552,0.496,2.91,0.492,4.153c-0.01,2.719-0.558,4.149-1.042,5.411l-0.154,0.408c-0.124,0.334-0.255,0.645-0.379,0.937c-0.126,0.298-0.237,0.563-0.318,0.802c0.484,0.11,0.864,0.265,1.125,0.38l0.151,0.066c0.047,0.02,0.094,0.043,0.137,0.069c0.848,0.516,1.376,1.309,1.489,2.233c0.061,0.498,0.051,3.893,0.03,6.855c0.087,1.285,0.305,2.364,0.593,3.146c0.409,1.114,1.431,3.241,3.394,3.119c1.37-0.085,2.687-0.919,3.561-2.019c0.938-1.181,1.284-2.487,1.414-3.958V34z' /><path d='M15.114 28.917c-1.613-1.683-2.399-3.947-2.104-6.056.285-2.035.124-4.027.037-5.098-.029-.357-.048-.623-.047-.77 0-.008.002-.015.003-.023 0-.004-.002-.007-.002-.011.121-3.021 1.286-7.787 4.493-10.62C15.932 5.724 13.388 4.913 11 5 7.258 5.136 3.636 7.724 4 15c.137 2.73 3.222 19.103 7.44 19 .603-.015 1.229-.402 1.872-1.176 1.017-1.223 2.005-2.332 2.708-3.104C15.705 29.481 15.401 29.217 15.114 28.917zM37.023 14.731c.015.154.002.286-.022.408.031.92-.068 1.813-.169 2.677-.074.636-.15 1.293-.171 1.952-.021.645.07 1.282.166 1.956.225 1.578.459 3.359-.765 5.437.225.296.423.571.581.837 4.61-7.475 6.468-16.361 4.695-18.626C38.655 5.944 34.941 4.952 31.999 5c-.921.015-1.758.139-2.473.294C34.602 7.754 36.863 13.026 37.023 14.731zM41 30.071c-2.665.55-3.947.257-4.569-.126-.1.072-.2.133-.293.19-.372.225-.961.583-1.105 2.782.083.016.156.025.246.044L35.714 33c1.32.06 3.049-.31 4.063-.781C41.962 31.205 43.153 29.627 41 30.071zM22.023 32.119c-.037-.298-.198-.539-.492-.732l-.108-.047C21.062 31.181 20.653 31 20 31h-.004c-.127.01-.253.019-.38.019-.052 0-.103-.007-.155-.009-.474.365-1.148.647-2.816.99-2.98.759-1.221 1.655-.078 1.794 1.106.277 3.735.614 5.481-.809C22.043 32.537 22.035 32.229 22.023 32.119z' /><path d='M20.681 18.501c-.292.302-.753.566-1.262.484-.828-.134-1.463-1.133-1.417-1.508h0c.044-.374.751-.569 1.578-.435.287.047.548.128.768.228-.32-.688-.899-1.085-1.782-1.182-1.565-.174-3.226.644-3.56 1.097.007.11.02.251.033.417.093 1.147.265 3.284-.05 5.537-.208 1.485.393 3.169 1.567 4.395.757.79 1.641 1.29 2.513 1.438.111-.478.309-.944.513-1.425.113-.265.233-.547.346-.852l.162-.427c.443-1.155.9-2.35.909-4.703C21.003 20.66 20.892 19.627 20.681 18.501zM34.847 22.007c-.104-.729-.211-1.484-.185-2.303.023-.742.105-1.442.184-2.119.062-.533.11-1.045.138-1.55-1.289.107-2.145.479-2.551 1.108.168-.057.358-.102.568-.129.892-.116 1.543.141 1.618.637.055.363-.253.705-.388.836-.277.269-.626.442-.981.488-.064.008-.129.012-.192.012-.353 0-.69-.121-.949-.3.112 1.973 1.567 4.612 2.283 5.907.153.277.271.498.369.688C35.154 24.163 35.009 23.143 34.847 22.007z' /></svg>
          </div>
        </motion.li>

        <motion.li style={{ opacity: 1, transform: 'none' }} variants={animation}>
          <div className='transition duration-200 hover:text-[#FFF]'>
            <svg xmlns='http://www.w3.org/2000/svg' width='32px' height='32px' viewBox='0 0 65 70' fill='currentColor' preserveAspectRatio='xMidYMid'>
              <title>Socket.IO</title>
              <path d='M63.988 31.295c-.174-10.7-6.14-21.118-15.37-26.604C41.346.162 32.16-1.057 23.886 1.033 11.433 4.168 1.505 15.446.243 28.3-1.325 40.44 4.815 53.066 15.308 59.292c10.276 6.444 24.253 6.183 34.3-.6 9.057-5.878 14.674-16.6 14.37-27.388zM33.77 59.25c-14.543 1.437-28.607-10.885-29-25.472-1.1-11.843 6.705-23.556 17.852-27.475C38.254.033 57.456 11.615 59.067 28.38c2.526 15.064-10.014 30.4-25.297 30.87zM24.2 30.38l21.03-17.2-11.364 17.243c-3.222 0-6.444 0-9.666-.044zm5.913 3.18l9.666.044-21.03 17.243L30.113 33.56z' /></svg>
          </div>
        </motion.li>

        <motion.li style={{ opacity: 1, transform: 'none' }} variants={animation}>
          <div className='transition duration-200 hover:text-[#066da5]'>
            <svg viewBox='0 0 24 18' width='32px' height='32px' version='1.1' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='xMidYMid' fill='currentColor'>
              <title>Docker</title>
              <g><path d='M23.505 6.609c-0.54 -0.375 -1.779 -0.516 -2.747 -0.328 -0.112 -0.938 -0.63 -1.758 -1.531 -2.484l-0.518 -0.375 -0.36 0.539c-0.45 0.703 -0.675 1.688 -0.608 2.625 0.022 0.328 0.135 0.914 0.473 1.43 -0.315 0.188 -0.968 0.422 -1.824 0.422H0.108l-0.045 0.188c-0.158 0.937 -0.158 3.867 1.689 6.117 1.396 1.711 3.468 2.578 6.192 2.578 5.9 0 10.268 -2.836 12.317 -7.968 0.811 0.023 2.545 0 3.423 -1.758 0.022 -0.047 0.068 -0.141 0.225 -0.492l0.09 -0.188 -0.495 -0.305ZM13.124 0h-2.477v2.344h2.477V0Zm0 2.812h-2.477v2.344h2.477v-2.344Zm-2.927 0h-2.477v2.344h2.477v-2.344Zm-2.927 0H4.792v2.344h2.477v-2.344ZM4.342 5.625H1.865v2.344H4.342v-2.344Zm2.927 0H4.792v2.344h2.477v-2.344Zm2.927 0h-2.477v2.344h2.477v-2.344Zm2.927 0h-2.477v2.344h2.477v-2.344Zm2.927 0H13.574v2.344h2.477v-2.344Z' fill-rule='nonzero' /></g></svg>
          </div>
        </motion.li>

        <motion.li style={{ opacity: 1, transform: 'none' }} variants={animation}>
          <div className='transition duration-200 hover:text-[#326DE6]'>
            <svg width='32px' height='32px' viewBox='0 0 15 15' xmlns='http://www.w3.org/2000/svg' fill='currentColor'>
              <title>Kubernetes</title>
              <path d='M4.5 14.569c.214.278.539.431.874.431h5.251c.335 0 .66-.165.875-.434l3.258-4.178c.214-.278.288-.633.214-.978l-1.165-5.207a1.128 1.128 0 00-.606-.777l-4.714-2.31A1.062 1.062 0 008.002 1c-.168 0-.335.038-.485.115l-4.715 2.32a1.129 1.129 0 00-.605.777L1.032 9.42c-.084.345 0 .7.214.978L4.5 14.568z' /><path fill='#ffffff' fill-rule='evenodd' d='M12.741 9.128c.098.002.196.01.293.024l.058.013.031.008a.308.308 0 01.26.371.306.306 0 01-.396.223h-.004l-.003-.001-.003-.002a1.58 1.58 0 00-.03-.006l-.05-.01a2.55 2.55 0 01-.274-.106 2.867 2.867 0 00-.533-.157.242.242 0 00-.171.064 4.656 4.656 0 00-.131-.023 3.971 3.971 0 01-1.764 2.212c.015.042.032.083.051.123a.239.239 0 00-.023.18c.074.17.165.332.271.484.06.078.114.16.164.244l.028.057.012.025a.306.306 0 01-.381.44.308.308 0 01-.172-.18l-.01-.02a1.57 1.57 0 01-.028-.058 2.546 2.546 0 01-.089-.28 2.837 2.837 0 00-.21-.512.242.242 0 00-.156-.095l-.03-.053-.035-.064a3.97 3.97 0 01-2.823-.007l-.07.125a.25.25 0 00-.132.064 2.13 2.13 0 00-.237.548 2.518 2.518 0 01-.088.28 1.196 1.196 0 01-.025.05l-.013.027v.001a.306.306 0 01-.421.173.308.308 0 01-.173-.314.306.306 0 01.041-.12l.014-.03.026-.052c.05-.085.104-.166.164-.244.108-.156.2-.322.277-.496a.302.302 0 00-.028-.173l.056-.133A3.972 3.972 0 014.22 9.532l-.134.023a.34.34 0 00-.176-.062 2.871 2.871 0 00-.533.156c-.09.04-.181.075-.274.105a1.017 1.017 0 01-.05.011l-.03.007H3.02l-.002.002h-.005a.308.308 0 01-.397-.349.306.306 0 01.261-.245l.005-.001h.002l.006-.002c.024-.006.054-.014.076-.018.097-.013.195-.021.293-.023.186-.013.37-.043.549-.09a.422.422 0 00.131-.133l.128-.037a3.938 3.938 0 01.625-2.752l-.098-.087a.338.338 0 00-.062-.176 2.854 2.854 0 00-.455-.319 2.557 2.557 0 01-.254-.148l-.048-.038-.015-.013-.004-.003a.323.323 0 01-.076-.45.295.295 0 01.244-.107.365.365 0 01.213.08l.022.017c.016.013.034.026.046.037.072.067.139.139.202.213.125.137.263.262.412.372.056.03.121.036.182.018l.11.078a3.938 3.938 0 012.552-1.224l.008-.129a.332.332 0 00.099-.158 2.844 2.844 0 00-.034-.553 2.56 2.56 0 01-.042-.29v-.082-.005A.306.306 0 018 2.82a.308.308 0 01.306.337v.087a2.529 2.529 0 01-.041.29 2.85 2.85 0 00-.035.553.242.242 0 00.1.153v.007l.007.129c.967.088 1.87.522 2.54 1.223l.116-.082a.34.34 0 00.186-.02c.149-.11.287-.236.412-.373.063-.075.13-.146.202-.213l.051-.04.017-.014a.307.307 0 11.381.477l-.024.02c-.015.012-.03.025-.043.034a2.537 2.537 0 01-.254.148 2.87 2.87 0 00-.455.32.241.241 0 00-.058.172l-.05.044-.058.053c.542.806.77 1.783.637 2.745l.123.036c.031.055.077.101.133.132.179.048.363.078.548.09zM7.291 5.24c.107-.024.216-.043.326-.056l-.09 1.6-.008.004a.268.268 0 01-.293.256.27.27 0 01-.135-.05l-.002.001-1.316-.93c.419-.41.945-.696 1.518-.825zm1.618 1.75l1.308-.924a3.182 3.182 0 00-1.833-.882l.09 1.598h.002a.268.268 0 00.294.256.27.27 0 00.135-.05l.004.002zm2.248 1.656L9.609 8.2l-.002-.006a.27.27 0 01-.185-.343.27.27 0 01.08-.12L9.5 7.73l1.195-1.067c.366.594.527 1.29.46 1.983zM9.096 9.5l.618 1.49a3.148 3.148 0 001.275-1.598l-1.593-.269-.002.003a.26.26 0 00-.166.023.27.27 0 00-.13.348l-.002.003zm-.385 1.905c-.573.13-1.17.1-1.727-.088l.777-1.4h.001a.27.27 0 01.475-.001h.006l.779 1.402a3.286 3.286 0 01-.311.087zm-2.418-.422l.611-1.474-.004-.006a.268.268 0 00-.297-.37L6.6 9.13l-1.579.267a3.16 3.16 0 001.272 1.586zm-.997-4.32l1.201 1.071-.001.007a.269.269 0 01-.106.462l-.001.005-1.54.443a3.134 3.134 0 01.447-1.988zm2.95 1.154h-.492l-.307.38.11.476.443.213.442-.212.11-.476-.306-.381z' clip-rule='evenodd' /></svg>
          </div>
        </motion.li>

        <motion.li style={{ opacity: 1, transform: 'none' }} variants={animation}>
          <div className='h-3 w-[1px] bg-gray-300'>
          </div>
        </motion.li>

        <motion.li style={{ opacity: 1, transform: 'none' }} variants={animation}>
          <div className='transition duration-200 grayscale hover:grayscale-0'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' width='32px' height='32px' fill='currentColor'>
              <title>Blender</title>
              <path fill='#01579B' d='M34.932,22.478C33.769,21.56,32.206,21.001,30.5,21c-1.706,0.001-3.27,0.56-4.433,1.478 c-1.184,0.935-1.969,2.252-2.059,3.747c-0.091,1.536,0.57,2.965,1.732,4.023C26.925,31.324,28.613,32,30.501,32 c1.887,0,3.574-0.676,4.757-1.753c1.162-1.057,1.824-2.486,1.734-4.023C36.902,24.731,36.116,23.413,34.932,22.478z' /><path fill='#FF6D00' d='M45.871,25.932c-0.259-1.823-0.891-3.535-1.861-5.095c-0.891-1.433-2.035-2.688-3.397-3.745l0.002-0.002 l-0.037-0.012c-0.028-0.025-0.05-0.054-0.079-0.078L26.249,6.438c-0.86-0.689-2.12-0.552-2.811,0.313 c-0.69,0.862-0.551,2.121,0.313,2.811L29.739,14H10.5C9.125,14,8,15.125,8,16.5S9.125,19,10.5,19h7.154L2.873,31.602 c-1.048,0.898-1.17,2.478-0.271,3.525C3.097,35.704,3.797,36,4.501,36c0.576,0,1.154-0.198,1.626-0.602l8.954-7.675 c-0.022,0.807-0.039,1.538-0.035,1.761C15.046,33,19,42,30.682,42c8.318,0,15.28-5,15.28-13.261 C46.034,27.805,46.003,26.867,45.871,25.932z M39.525,29.153c-0.401,1.087-1.05,2.104-1.935,2.992 c-1.81,1.82-4.343,2.85-7.088,2.854c-2.745,0.005-5.28-1.017-7.091-2.832c-0.885-0.885-1.535-1.901-1.937-2.986 c-0.392-1.065-0.545-2.195-0.444-3.335c0.098-1.116,0.432-2.179,0.971-3.141c0.529-0.946,1.257-1.8,2.154-2.524 c1.76-1.414,3.999-2.179,6.345-2.182c2.346-0.003,4.584,0.756,6.345,2.164c0.897,0.72,1.624,1.571,2.152,2.515 c0.539,0.961,0.874,2.023,0.973,3.138C40.07,26.958,39.918,28.087,39.525,29.153z' /></svg>

          </div>
        </motion.li>

        <motion.li style={{ opacity: 1, transform: 'none' }} variants={animation}>
          <div className='transition duration-200 grayscale hover:grayscale-0'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="32px" height="32px">
              <title>DaVinci Resolve</title>
              <path fill="#37474f" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z" /><path fill="#ff7043" d="M25.064,25.167l2.409,6.331c0.546,0.741,1.195,1.389,1.969,1.828c2.419,1.373,5.5,0.581,6.881-1.769 l0,0C36.322,31.557,25.34,25.378,25.064,25.167z" /><path fill="#f16461" d="M25.064,25.167c0.323,0.129,11.259,6.389,11.259,6.389l0,0c1.38-2.351,0.538-5.369-1.882-6.742 c-0.774-0.439-1.669-0.667-2.595-0.762L25.064,25.167z" /><path fill="#ff5252" d="M33.492,26.545c-0.291-0.165-0.605-0.306-0.929-0.435c0.104,0.993-0.085,2.024-0.632,2.955 s-1.36,1.607-2.287,2.015c0.276,0.211,0.557,0.408,0.848,0.573c3.031,1.72,5.001,1.314,5.83-0.096l0,0l0,0 C37.151,30.146,36.523,28.265,33.492,26.545z" /><path fill="#ff855f" d="M27.664,29.134c0.589,0.71,1.256,1.392,1.981,1.945c0.927-0.408,1.741-1.084,2.287-2.015 c0.547-0.931,0.736-1.962,0.632-2.955c-0.85-0.34-1.785-0.567-2.704-0.713c0.044,0.741-0.12,1.503-0.525,2.194 C28.928,28.281,28.339,28.802,27.664,29.134z" /><path fill="#ff8a65" d="M29.645,31.08c-0.725-0.553-1.392-1.236-1.981-1.945c-0.421,0.207-0.876,0.332-1.343,0.384 c0.317,0.683,0.698,1.363,1.153,1.98C28.223,31.516,28.964,31.379,29.645,31.08z" /><path fill="#ff8a80" d="M29.859,25.397c0.92,0.147,1.855,0.373,2.704,0.713c-0.076-0.73-0.326-1.428-0.717-2.058 c-0.771-0.079-1.56-0.062-2.32,0.009C29.713,24.485,29.832,24.935,29.859,25.397z" /><path fill="#ffccbc" d="M29.334,27.59c0.406-0.691,0.57-1.452,0.525-2.194c-2.472-0.394-4.795-0.229-4.795-0.229 s1.016,2.06,2.6,3.967C28.339,28.802,28.928,28.281,29.334,27.59z" /><path fill="#ffab91" d="M27.664,29.134c-1.584-1.907-2.6-3.967-2.6-3.967c-0.058,0.098-0.079,0.217-0.054,0.338 c0.153,0.742,0.55,2.379,1.31,4.014C26.787,29.466,27.243,29.342,27.664,29.134z" /><path fill="#ffcdd2" d="M29.526,24.061c-1.821,0.17-3.461,0.651-4.191,0.892c-0.119,0.039-0.213,0.117-0.27,0.215 c0,0,2.323-0.165,4.795,0.229C29.832,24.935,29.713,24.485,29.526,24.061z" /><g><path fill="#c6cf47" d="M22.922,25.167c-0.276,0.211-11.258,6.389-11.258,6.389l0,0c1.381,2.35,4.461,3.142,6.881,1.769 c0.774-0.439,1.423-1.087,1.969-1.828L22.922,25.167z" /><path fill="#e1eb8a" d="M22.922,25.167l-6.782-1.115c-0.926,0.094-1.822,0.323-2.595,0.762 c-2.419,1.373-3.262,4.391-1.882,6.742l0,0C11.664,31.556,22.599,25.297,22.922,25.167z" /><path fill="#dce775" d="M17.494,31.653c0.291-0.165,0.572-0.363,0.848-0.573c-0.927-0.408-1.741-1.084-2.287-2.015 c-0.547-0.931-0.736-1.962-0.632-2.955c-0.323,0.129-0.638,0.27-0.929,0.435c-3.031,1.72-3.658,3.6-2.83,5.011l0,0l0,0 C12.493,32.967,14.463,33.373,17.494,31.653z" /><path fill="#fff59d" d="M18.127,25.397c-0.92,0.147-1.855,0.373-2.704,0.713c-0.104,0.993,0.085,2.024,0.632,2.955 c0.547,0.931,1.36,1.607,2.287,2.015c0.725-0.553,1.392-1.236,1.981-1.945c-0.675-0.333-1.264-0.853-1.67-1.544 C18.247,26.899,18.083,26.138,18.127,25.397z" /><path fill="#e6ee9c" d="M15.423,26.11c0.85-0.34,1.785-0.567,2.704-0.713c0.028-0.462,0.146-0.912,0.333-1.336 c-0.76-0.071-1.55-0.087-2.32-0.009C15.749,24.682,15.499,25.381,15.423,26.11z" /><path fill="#ffd740" d="M20.323,29.134c-0.589,0.71-1.256,1.392-1.981,1.945c0.681,0.3,1.422,0.437,2.172,0.419 c0.455-0.617,0.835-1.297,1.153-1.98C21.199,29.466,20.744,29.342,20.323,29.134z" /><path fill="#fff9c4" d="M18.653,27.59c0.406,0.691,0.995,1.211,1.67,1.544c1.584-1.907,2.6-3.967,2.6-3.967 s-2.323-0.165-4.795,0.229C18.083,26.138,18.247,26.899,18.653,27.59z" /><path fill="#f0f4c3" d="M18.127,25.397c2.472-0.394,4.795-0.229,4.795-0.229c-0.058-0.098-0.151-0.176-0.27-0.215 c-0.731-0.241-2.371-0.721-4.191-0.892C18.273,24.485,18.155,24.935,18.127,25.397z" /><path fill="#ffe082" d="M21.666,29.518c0.76-1.635,1.157-3.271,1.31-4.014c0.025-0.121,0.004-0.24-0.054-0.338 c0,0-1.016,2.06-2.6,3.967C20.744,29.342,21.199,29.466,21.666,29.518z" /></g><g><path fill="#f44336" d="M41.37,28.654c-0.411,1.537-1.015,2.993-1.794,4.339l1.731,0.999 c0.866-1.496,1.536-3.112,1.993-4.821L41.37,28.654z" /><path fill="#ffd740" d="M11.272,36.728l-1.414,1.414c1.231,1.231,2.633,2.287,4.15,3.165l0.999-1.731 C13.642,38.786,12.38,37.836,11.272,36.728z" /><path fill="#aed581" d="M6,24H4c0,1.792,0.258,3.519,0.7,5.172l1.93-0.517C6.232,27.167,6,25.612,6,24z" /><path fill="#fff176" d="M8.424,32.993l-1.731,0.999c0.878,1.517,1.934,2.918,3.165,4.15l1.414-1.414 C10.164,35.62,9.214,34.358,8.424,32.993z" /><path fill="#dce775" d="M6.63,28.654L4.7,29.172c0.457,1.708,1.128,3.325,1.993,4.821l1.731-0.999 C7.645,31.647,7.041,30.192,6.63,28.654z" /><path fill="#ffca28" d="M15.007,39.576l-0.999,1.731c1.496,0.865,3.112,1.536,4.821,1.993l0.517-1.93 C17.808,40.959,16.353,40.355,15.007,39.576z" /><path fill="#ff7043" d="M32.993,39.576l0.999,1.731c1.517-0.878,2.919-1.934,4.15-3.165l-1.414-1.414 C35.62,37.836,34.358,38.786,32.993,39.576z" /><path fill="#fb8c00" d="M28.654,41.37l0.517,1.93c1.708-0.457,3.325-1.128,4.821-1.993l-0.999-1.731 C31.647,40.355,30.192,40.959,28.654,41.37z" /><path fill="#ff5252" d="M36.728,36.728l1.414,1.414c1.231-1.231,2.287-2.633,3.165-4.15l-1.731-0.999 C38.786,34.358,37.836,35.62,36.728,36.728z" /><path fill="#ffb74d" d="M19.346,41.37l-0.517,1.93C20.481,43.742,22.208,44,24,44v-2C22.388,42,20.833,41.768,19.346,41.37z" /><path fill="#ffa726" d="M24,42v2c1.792,0,3.519-0.258,5.172-0.7l-0.517-1.93C27.167,41.768,25.612,42,24,42z" /><path fill="#64b5f6" d="M19.346,6.63L18.828,4.7c-1.708,0.457-3.325,1.128-4.821,1.993l0.999,1.731 C16.353,7.645,17.808,7.041,19.346,6.63z" /><path fill="#9575cd" d="M41.37,19.346l1.93-0.517c-0.457-1.708-1.128-3.325-1.993-4.821l-1.731,0.999 C40.355,16.353,40.959,17.808,41.37,19.346z" /><path fill="#7986cb" d="M39.576,15.007l1.731-0.999c-0.878-1.517-1.934-2.919-3.165-4.15l-1.414,1.414 C37.836,12.38,38.786,13.642,39.576,15.007z" /><path fill="#8c9eff" d="M36.728,11.272l1.414-1.414c-1.231-1.231-2.633-2.287-4.15-3.165l-0.999,1.731 C34.358,9.214,35.62,10.164,36.728,11.272z" /><path fill="#82b1ff" d="M32.993,8.424l0.999-1.731c-1.495-0.866-3.112-1.537-4.82-1.993l-0.517,1.93 C30.192,7.041,31.647,7.645,32.993,8.424z" /><path fill="#f06292" d="M42,24h2c0-1.792-0.258-3.519-0.7-5.172l-1.93,0.517C41.768,20.833,42,22.388,42,24z" /><path fill="#9ccc65" d="M6.63,19.346L4.7,18.828C4.258,20.481,4,22.208,4,24h2C6,22.388,6.232,20.833,6.63,19.346z" /><path fill="#ef5350" d="M41.37,28.654l1.93,0.517C43.742,27.519,44,25.792,44,24h-2C42,25.612,41.768,27.167,41.37,28.654z" /><path fill="#64b5f6" d="M28.654,6.63l0.517-1.93C27.519,4.258,25.792,4,24,4v2C25.612,6,27.167,6.232,28.654,6.63z" /><path fill="#68c1b8" d="M11.272,11.272L9.858,9.858c-1.231,1.231-2.287,2.633-3.165,4.15l1.731,0.999 C9.214,13.642,10.164,12.38,11.272,11.272z" /><path fill="#81c784" d="M8.424,15.007l-1.731-0.999c-0.866,1.495-1.537,3.112-1.993,4.82l1.93,0.517 C7.041,17.808,7.645,16.353,8.424,15.007z" /><path fill="#4db6ac" d="M15.007,8.424l-0.999-1.731c-1.517,0.878-2.919,1.934-4.15,3.165l1.414,1.414 C12.38,10.164,13.642,9.214,15.007,8.424z" /><path fill="#4ba9f5" d="M24,6V4c-1.792,0-3.519,0.258-5.172,0.7l0.517,1.93C20.833,6.232,22.388,6,24,6z" /></g><g><path fill="#7986cb" d="M24.001,11L24.001,11L24,24c0.115,0,0.23-0.042,0.324-0.125C25.433,22.896,29,19.477,29,16.059 C29,13.265,26.762,11.001,24.001,11z" /><path fill="#26a69a" d="M24,11C23.999,11,23.999,11,24,11c-2.761,0-5,2.265-5,5.059c0,3.418,3.567,6.837,4.676,7.816 C23.77,23.958,23.885,24,24,24V11z" /><path fill="#82b1ff" d="M24,11L24,11L24,11c-1.658,0-3,1.5-3,5c0,3.59,3,8,3,8s3-4.41,3-8C27,12.5,25.657,11,24,11z" /><path fill="#4db6ac" d="M24,11c0.543,0,0.941,0.092,0.997,0.105C26.723,11.498,28,12.872,28,14.5 c0,0.91-0.41,1.74-1.06,2.36C26.95,16.79,24.281,11.03,24,11z" /><path fill="#90caf9" d="M25.82,20.66C24.98,22.56,24,24,24,24s-0.98-1.44-1.82-3.34C22.75,20.88,23.36,21,24,21 S25.25,20.88,25.82,20.66z" /><path fill="#8dd0ca" d="M21.06,16.86C20.4,16.25,20,15.41,20,14.5c0-1.69,1.37-3.1,3.19-3.43C23.35,11.04,23.831,11,24,11 C22.49,11.18,21.02,16.57,21.06,16.86z" /><path fill="#80cbc4" d="M27,16c0,0.14,0,0.29-0.02,0.43c0,0.14-0.02,0.29-0.04,0.43C26.21,17.56,25.16,18,24,18 s-2.21-0.44-2.94-1.14C21.02,16.57,21,16.28,21,16c0-3.28,1.18-4.8,2.69-4.98C23.79,11,23.9,11,24,11s0.21,0,0.31,0.02 c0.28,0.03,0.56,0.11,0.81,0.25c0.08,0.04,0.16,0.09,0.24,0.14s0.16,0.11,0.24,0.19c0.07,0.06,0.14,0.12,0.2,0.19 c0.23,0.24,0.44,0.54,0.6,0.91c0.05,0.11,0.1,0.22,0.14,0.33c0.05,0.12,0.09,0.24,0.13,0.37c0.04,0.11,0.07,0.23,0.09,0.35 c0.04,0.16,0.08,0.32,0.1,0.49c0.04,0.19,0.07,0.4,0.09,0.61C26.98,15.2,27,15.59,27,16z" /><path fill="#9fa8da" d="M28.98,16.45c-0.25,3.29-3.59,6.49-4.66,7.43C24.23,23.96,24.12,24,24,24c0,0,0.98-1.44,1.82-3.34 C27.54,19.98,28.8,18.37,28.98,16.45z" /><path fill="#81c784" d="M24,24c-0.12,0-0.23-0.04-0.32-0.12c-1.07-0.94-4.41-4.14-4.66-7.43c0.18,1.92,1.44,3.53,3.16,4.21 C23.02,22.56,24,24,24,24z" /></g></svg>
          </div>
        </motion.li>

      </motion.ul>

    </>
  )
}


export default AllLearningTechs;