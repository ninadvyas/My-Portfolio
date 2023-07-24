'use client';

import { motion } from 'framer-motion';

const animation = {
  hide: { x: -8, opacity: 0 },
  show: {
    x: 0,
    opacity: 1
  }
};

const AllFavTechs = () => {
  return (
    <>
      <motion.p
        className="text-base text-center lg:text-start mb-2.5 text-white mt-5"
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.6 }}
      >
        Tech Stack & Tools:
      </motion.p>

      <motion.ul
        className="flex justify-center items-center flex-wrap gap-3.5 text-gray-400 mx-auto"
        initial="hide"
        animate="show"
        transition={{ delayChildren: 0.6, staggerChildren: 0.025 }}
      >
        <motion.li
          style={{ opacity: 1, transform: 'none' }}
          variants={animation}
        >
          <div className="transition duration-200 hover:text-[#3178C6]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-6"
              viewBox="0 0 128 128"
              id="java"
            >
              <path
                fill="#0074BD"
                d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zM44.629 84.455s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"
              ></path>
              <path
                fill="#EA2D2E"
                d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z"
              ></path>
              <path
                fill="#0074BD"
                d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zM90.609 93.041c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z"
              ></path>
              <path
                fill="#EA2D2E"
                d="M76.491 1.587s12.968 12.976-12.303 32.923c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815 8.548-12.834 32.229-19.059 26.998-39.667z"
              ></path>
              <path
                fill="#0074BD"
                d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"
              ></path>
            </svg>{' '}
          </div>
        </motion.li>

        <motion.li
          style={{ opacity: 1, transform: 'none' }}
          variants={animation}
        >
          <div className="transition duration-200 hover:text-[#3178C6]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              preserveAspectRatio="xMinYMin meet"
              viewBox="0 0 256 256"
              id="javascript"
            >
              <path fill="#F7DF1E" d="M0 0h256v256H0V0z"></path>
              <path d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247L210.29 147.43c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574"></path>
            </svg>
          </div>
        </motion.li>

        <motion.li
          style={{ opacity: 1, transform: 'none' }}
          variants={animation}
        >
          <div className="transition duration-200 hover:text-[]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              role="img"
              fill="#61DAFB"
              className="h-6 w-6"
            >
              <title>React</title>
              <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"></path>
            </svg>
          </div>
        </motion.li>
        <motion.li
          style={{ opacity: 1, transform: 'none' }}
          variants={animation}
        >
          <div className="transition duration-200 hover:text-[]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 32 32"
              preserveAspectRatio="xMidYMid"
              fill="#8cc84b"
              role="img"
              className="h-6 w-6"
            >
              <title>Node.js</title>
              <path d="M14.656.427c.8-.453 1.82-.455 2.6 0L29.2 7.16c.747.42 1.247 1.253 1.24 2.114v13.5c.005.897-.544 1.748-1.332 2.16l-11.88 6.702a2.6 2.6 0 0 1-2.639-.073l-3.565-2.06c-.243-.145-.516-.26-.688-.495.152-.204.422-.23.642-.32.496-.158.95-.4 1.406-.656.115-.08.256-.05.366.022l3.04 1.758c.217.125.437-.04.623-.145l11.665-6.583c.144-.07.224-.222.212-.38V9.334c.016-.18-.087-.344-.25-.417L16.19 2.244a.41.41 0 0 0-.465-.001L3.892 8.93c-.16.073-.27.235-.25.415v13.37c-.014.158.07.307.215.375l3.162 1.785c.594.32 1.323.5 1.977.265a1.5 1.5 0 0 0 .971-1.409l.003-13.29c-.014-.197.172-.36.363-.34h1.52c.2-.005.357.207.33.405L12.18 23.88c.001 1.188-.487 2.48-1.586 3.063-1.354.7-3.028.553-4.366-.12l-3.4-1.88c-.8-.4-1.337-1.264-1.332-2.16v-13.5a2.46 2.46 0 0 1 1.282-2.141L14.656.427zM18.1 9.785c1.727-.1 3.576-.066 5.13.785 1.203.652 1.87 2.02 1.892 3.358-.034.18-.222.28-.394.267-.5-.001-1.002.007-1.504-.003-.213.008-.336-.188-.363-.376-.144-.64-.493-1.273-1.095-1.582-.924-.463-1.996-.44-3.004-.43-.736.04-1.527.103-2.15.535-.48.328-.624 1-.453 1.522.16.383.603.506.964.62 2.082.544 4.287.5 6.33 1.207.845.292 1.672.86 1.962 1.745.378 1.186.213 2.604-.63 3.556-.684.784-1.68 1.2-2.675 1.442-1.323.295-2.695.302-4.038.17-1.263-.144-2.577-.476-3.552-1.336-.834-.724-1.24-1.852-1.2-2.94.01-.184.193-.312.37-.297h1.5c.202-.014.35.16.36.35.093.6.322 1.25.854 1.6 1.026.662 2.313.616 3.487.635.973-.043 2.065-.056 2.86-.7.42-.367.543-.98.43-1.508-.123-.446-.6-.653-1-.8-2.055-.65-4.285-.414-6.32-1.15-.826-.292-1.625-.844-1.942-1.693-.443-1.2-.24-2.687.693-3.607.9-.915 2.22-1.268 3.47-1.394z" />
            </svg>
          </div>
        </motion.li>
        <motion.li
          style={{ opacity: 1, transform: 'none' }}
          variants={animation}
        >
          <div className="transition duration-200 hover:text-[]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              role="img"
              fill="#FFFFFF"
              className="h-6 w-6"
            >
              <title>Next.js</title>
              <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z"></path>
            </svg>
          </div>
        </motion.li>

        <motion.li
          style={{ opacity: 1, transform: 'none' }}
          variants={animation}
        >
          <div className="transition duration-200 hover:text-[]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              role="img"
              fill="#06B6D4"
              className="h-6 w-6"
            >
              <title>Tailwind CSS</title>
              <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path>
            </svg>
          </div>
        </motion.li>

        <motion.li
          style={{ opacity: 1, transform: 'none' }}
          variants={animation}
        >
          <div className="h-3 w-[1px] bg-gray-300"></div>
        </motion.li>

        <motion.li
          style={{ opacity: 1, transform: 'none' }}
          variants={animation}
        >
          <div className="transition duration-200 hover:text-[]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              role="img"
              fill="#06B6D4"
              className="h-6 w-6"
            >
              <title>Canva</title>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enable-background="new 0 0 100 100"
                viewBox="0 0 100 100"
                className="h-6 w-6"
                id="Canva"
              >
                <circle
                  cx="50"
                  cy="51"
                  r="49"
                  fill="#e20ef6"
                  className="color20c4cb svgShape"
                ></circle>
                <path
                  fill="#ffffff"
                  d="M62.7,59.2c-2,2.2-4.8,3.3-6.1,3.3c-1.5,0-2.3-0.9-2.5-2.3c-0.1-0.5,0-1.1,0.1-1.6c0.5-3.1,1.6-5.1,1.6-5.6c0-0.2-0.1-0.3-0.2-0.3c-1,0-4.4,3.5-4.9,5.8l-0.4,1.9c-0.3,1.3-1.5,2.1-2.4,2.1c-0.4,0-0.7-0.2-0.8-0.7c0-0.2,0-0.4,0-0.6l0.2-1c-1.8,1.4-3.8,2.3-4.7,2.3c-1.3,0-2-0.7-2.2-1.7c-0.8,1.1-1.9,1.7-3.1,1.7c-1.5,0-2.9-1-3.6-2.5c-1,1.1-2.2,2.2-3.6,3.1c-2.1,1.3-4.4,2.4-7.1,2.4c-2.5,0-4.7-1.3-5.8-2.4c-1.8-1.6-2.7-4.1-3-6.3c-0.9-7,3.4-16.3,10.1-20.3c1.5-0.9,3.2-1.4,4.8-1.4c3.2,0,5.6,2.3,5.9,5c0.3,2.5-0.7,4.6-3.4,5.9c-1.4,0.7-2.1,0.7-2.3,0.3c-0.1-0.2-0.1-0.6,0.2-0.8c2.6-2.1,2.6-3.9,2.3-6.4c-0.2-1.6-1.2-2.6-2.4-2.6C24.2,36.5,17,47.8,18,56c0.4,3.2,2.4,6.9,6.4,6.9c1.3,0,2.8-0.4,4-1c2.2-1.1,3.5-2,4.7-3.5c-0.3-3.8,3-8.6,7.8-8.6c2.1,0,3.8,0.8,4,2.5c0.3,2.1-1.5,2.5-2.2,2.5c-0.6,0-1.5-0.2-1.6-0.7c-0.1-0.6,1.3-0.3,1.1-1.6c-0.1-0.8-1-1.1-1.8-1.1c-3,0-4.7,4.2-4.4,6.8c0.1,1.2,0.8,2.4,1.8,2.4c0.9,0,2.2-1.3,2.6-3.1c0.3-1.3,1.5-2.1,2.4-2.1c0.5,0,0.8,0.2,0.8,0.7c0,0.2,0,0.4,0,0.6c-0.1,0.5-0.5,2.4-0.5,2.7c0,0.3,0.2,0.8,0.8,0.8c0.5,0,2.1-0.9,3.7-2.3c0.5-2.5,1.1-5.6,1.1-5.8c0.2-1,0.6-2.1,2.6-2.1c0.4,0,0.7,0.2,0.8,0.7c0,0.2,0,0.4,0,0.6L51.6,54c1.8-2.4,4.6-4.2,6.3-4.2c0.7,0,1.3,0.4,1.4,1.1c0.1,0.4-0.1,1.1-0.3,1.9c-0.6,1.6-1.3,4.1-1.7,6.2c-0.1,0.5,0.1,1.1,0.9,1.1c0.7,0,2.8-0.8,4.5-3.1c0-0.3,0-0.6,0-1c0-1.8,0.1-3.2,0.5-4.3c0.3-1.1,1.7-2.1,2.6-2.1c0.5,0,0.8,0.3,0.8,0.8c0,0.2,0,0.4-0.1,0.6c-0.6,1.9-1,3.6-1,5.3c0,1,0.2,2.5,0.4,3.3c0,0.2,0.1,0.3,0.3,0.3c0.3,0,2.3-1.9,3.7-4.3c-1.3-0.8-2-2.3-2-4.1c0-3,1.8-4.6,3.6-4.6c1.4,0,2.6,1,2.6,3c0,1.3-0.5,2.7-1.2,4.1c0,0,0.3,0,0.4,0c1.1,0,1.9-0.5,2.4-1.1c0.2-0.2,0.4-0.4,0.6-0.5c1.4-1.7,3.5-2.9,5.9-2.9c2.1,0,3.8,0.8,4,2.5c0.3,2.1-1.6,2.6-2.2,2.6c-0.6,0-1.6-0.2-1.6-0.7c-0.1-0.5,1.3-0.3,1.2-1.6c-0.1-0.8-1-1.2-1.8-1.2c-2.8,0-4.7,3.7-4.4,6.8c0.1,1.2,0.7,2.4,1.8,2.4c0.9,0,2.2-1.3,2.7-3.1c0.3-1.2,1.5-2.1,2.4-2.1c0.4,0,0.8,0.2,0.8,0.7c0,0.3-0.1,0.8-0.5,2.8c-0.2,0.8-0.2,1.6-0.2,2.1c0.2,1.2,0.7,2,1.2,2.5c0.2,0.2,0.3,0.4,0.3,0.5c0,0.3-0.2,0.6-0.6,0.6c-0.1,0-0.3,0-0.4-0.1c-2.2-0.9-3.1-2.4-3.3-3.7c-0.8,1.1-1.9,1.6-3.1,1.6c-1.9,0-3.8-1.7-4.1-3.9c-0.1-0.9,0-1.9,0.3-2.8c-0.8,0.5-1.6,0.8-2.4,0.8c-0.3,0-0.5,0-0.7,0c-1.9,2.7-3.9,4.6-5.4,5.5c-0.6,0.3-1.2,0.5-1.6,0.5c-0.3,0-0.7-0.1-0.9-0.4C63.1,61.4,62.8,60.4,62.7,59.2L62.7,59.2z M69.5,50.2c0,1.2,0.6,2.4,1.3,3.2c0.3-0.8,0.5-1.6,0.5-2.4c0-1.5-0.6-2.2-1-2.2C69.7,48.8,69.5,49.6,69.5,50.2z"
                  className="colorffffff svgShape"
                ></path>
              </svg>
            </svg>
          </div>
        </motion.li>
      </motion.ul>
    </>
  );
};

export default AllFavTechs;
