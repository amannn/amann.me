/* eslint-disable css-modules/no-unused-class */
import React from 'react';
import cx from 'classnames';
import styles from './Icon.module.scss';

const icons = {
  mail: (
    <g transform="translate(0, 4)">
      <g fill="currentColor" fillRule="nonzero" transform="scale(0.25) ">
        <path d="M3,11.1 L44.8,40 C46.8,41.4 49.4,41.4 51.3,40 L93,11.1 C94.6,10 95.5,8.3 95.5,6.4 C95.5,3.2 92.9,0.7 89.8,0.7 L6.2,0.7 C3,0.7 0.5,3.3 0.5,6.4 L0.5,6.4 C0.5,8.2 1.4,10 3,11.1 Z" />
        <path d="M89.8,23.1 L51.3,49.7 C49.3,51.1 46.7,51.1 44.8,49.7 L6.2,23.1 C3.8,21.4 0.5,23.2 0.5,26.1 L0.5,67.7 C0.5,70.9 3.1,73.4 6.2,73.4 L89.7,73.4 C92.9,73.4 95.4,70.8 95.4,67.7 L95.4,26 C95.5,23.1 92.2,21.4 89.8,23.1 Z" />
      </g>
    </g>
  ),
  phone: (
    <g fill="none" fillRule="evenodd" id="phone" stroke="none" strokeWidth="1">
      <path
        d="M24,18.9545455 C24,19.2613652 23.9431824,19.6619293 23.8295455,20.15625 C23.7159085,20.6505707 23.5965915,21.0397713 23.4715909,21.3238636 C23.2329534,21.8920483 22.5397785,22.494315 21.3920455,23.1306818 C20.3238583,23.7102302 19.2670507,24 18.2215909,24 C17.9147712,24 17.6164787,23.9801138 17.3267045,23.9403409 C17.0369304,23.900568 16.7102291,23.829546 16.3465909,23.7272727 C15.9829527,23.6249995 15.7130691,23.5426139 15.5369318,23.4801136 C15.3607946,23.4176133 15.0454568,23.3011372 14.5909091,23.1306818 C14.1363614,22.9602264 13.8579551,22.8579547 13.7556818,22.8238636 C12.6420399,22.4261344 11.6477316,21.9545482 10.7727273,21.4090909 C9.31817455,20.5113591 7.81534866,19.2869396 6.26420455,17.7357955 C4.71306043,16.1846513 3.48864085,14.6818255 2.59090909,13.2272727 C2.04545182,12.3522684 1.57386563,11.3579601 1.17613636,10.2443182 C1.14204528,10.1420449 1.03977358,9.86363864 0.869318182,9.40909091 C0.698862784,8.95454318 0.582386676,8.63920543 0.519886364,8.46306818 C0.457386051,8.28693094 0.375000511,8.01704727 0.272727273,7.65340909 C0.170454034,7.28977091 0.099432017,6.96306963 0.0596590909,6.67329545 C0.0198861648,6.38352128 0,6.08522881 0,5.77840909 C0,4.73294932 0.28976983,3.6761417 0.869318182,2.60795455 C1.505685,1.46022153 2.1079517,0.767046648 2.67613636,0.528409091 C2.96022869,0.403408466 3.34942935,0.284091477 3.84375,0.170454545 C4.33807065,0.0568176136 4.73863483,0 5.04545455,0 C5.20454625,0 5.32386324,0.0170452841 5.40340909,0.0511363636 C5.60795557,0.119318523 5.90908892,0.551132386 6.30681818,1.34659091 C6.43181881,1.56250108 6.60227165,1.86931619 6.81818182,2.26704545 C7.03409199,2.66477472 7.23295364,3.02556656 7.41477273,3.34943182 C7.59659182,3.67329707 7.77272642,3.97727131 7.94318182,4.26136364 C7.9772729,4.30681841 8.07670372,4.44886244 8.24147727,4.6875 C8.40625082,4.92613756 8.52840869,5.12784009 8.60795455,5.29261364 C8.6875004,5.45738719 8.72727273,5.61931739 8.72727273,5.77840909 C8.72727273,6.00568295 8.56534253,6.28977102 8.24147727,6.63068182 C7.91761202,6.97159261 7.56534281,7.28408949 7.18465909,7.56818182 C6.80397537,7.85227415 6.45170616,8.1534075 6.12784091,8.47159091 C5.80397565,8.78977432 5.64204545,9.05113534 5.64204545,9.25568182 C5.64204545,9.35795506 5.67045426,9.48579469 5.72727273,9.63920455 C5.78409119,9.7926144 5.83238616,9.90909051 5.87215909,9.98863636 C5.91193202,10.0681822 5.99147668,10.2045445 6.11079545,10.3977273 C6.23011423,10.5909101 6.29545449,10.6988635 6.30681818,10.7215909 C7.17045886,12.2784169 8.15908534,13.6136308 9.27272727,14.7272727 C10.3863692,15.8409147 11.7215831,16.8295411 13.2784091,17.6931818 C13.3011365,17.7045455 13.4090899,17.7698858 13.6022727,17.8892045 C13.7954555,18.0085233 13.9318178,18.088068 14.0113636,18.1278409 C14.0909095,18.1676138 14.2073856,18.2159088 14.3607955,18.2727273 C14.5142053,18.3295457 14.6420449,18.3579545 14.7443182,18.3579545 C14.9488647,18.3579545 15.2102257,18.1960243 15.5284091,17.8721591 C15.8465925,17.5482938 16.1477259,17.1960246 16.4318182,16.8153409 C16.7159105,16.4346572 17.0284074,16.082388 17.3693182,15.7585227 C17.710229,15.4346575 17.994317,15.2727273 18.2215909,15.2727273 C18.3806826,15.2727273 18.5426128,15.3124996 18.7073864,15.3920455 C18.8721599,15.4715913 19.0738624,15.5937492 19.3125,15.7585227 C19.5511376,15.9232963 19.6931816,16.0227271 19.7386364,16.0568182 C20.0227287,16.2272736 20.3267029,16.4034082 20.6505682,16.5852273 C20.9744334,16.7670464 21.3352253,16.965908 21.7329545,17.1818182 C22.1306838,17.3977284 22.4374989,17.5681812 22.6534091,17.6931818 C23.4488676,18.0909111 23.8806815,18.3920444 23.9488636,18.5965909 C23.9829547,18.6761368 24,18.7954538 24,18.9545455 Z"
        fill="currentColor"
        fillRule="nonzero"
        id=""
      />
    </g>
  ),
  github: (
    <path
      clipRule="evenodd"
      d="M16,0.5C7.165,0.5,0,7.664,0,16.501 c0,7.069,4.584,13.066,10.943,15.183c0.8,0.146,1.092-0.347,1.092-0.771c0-0.38-0.014-1.387-0.021-2.722 c-4.451,0.967-5.39-2.146-5.39-2.146c-0.728-1.847-1.776-2.34-1.776-2.34c-1.453-0.992,0.11-0.973,0.11-0.973 c1.605,0.113,2.451,1.649,2.451,1.649c1.427,2.444,3.745,1.738,4.657,1.33c0.145-1.034,0.559-1.74,1.016-2.14 c-3.553-0.404-7.288-1.776-7.288-7.908c0-1.747,0.624-3.175,1.647-4.293c-0.165-0.405-0.714-2.032,0.157-4.235 c0,0,1.343-0.43,4.4,1.641c1.276-0.355,2.645-0.533,4.006-0.539c1.358,0.006,2.727,0.184,4.006,0.539 c3.054-2.071,4.396-1.641,4.396-1.641c0.872,2.203,0.324,3.83,0.159,4.235c1.024,1.118,1.644,2.547,1.644,4.293 c0,6.147-3.741,7.5-7.306,7.895c0.576,0.495,1.086,1.472,1.086,2.965c0,2.139-0.019,3.863-0.019,4.389 c0,0.428,0.287,0.925,1.101,0.77C27.421,29.562,32,23.568,32,16.501C32,7.664,24.837,0.5,16,0.5z"
      fill="currentColor"
      fillRule="evenodd"
      transform="scale(0.75)"
    />
  ),
  twitter: (
    <g transform="scale(0.75)">
      <g transform="translate(-282.32053,-393.30734)">
        <path
          d="M314.321,399.386c-1.177,0.522-2.443,0.875-3.771,1.033 c1.355-0.812,2.397-2.099,2.887-3.632c-1.269,0.753-2.674,1.299-4.169,1.593c-1.197-1.276-2.904-2.073-4.792-2.073 c-3.625,0-6.565,2.939-6.565,6.565c0,0.515,0.058,1.016,0.17,1.496c-5.456-0.273-10.294-2.887-13.532-6.859 c-0.565,0.97-0.889,2.097-0.889,3.3c0,2.278,1.159,4.287,2.92,5.465c-1.076-0.034-2.088-0.33-2.973-0.821 c-0.001,0.027-0.001,0.055-0.001,0.083c0,3.181,2.263,5.834,5.267,6.438c-0.551,0.15-1.131,0.23-1.729,0.23 c-0.423,0-0.834-0.041-1.235-0.118c0.835,2.608,3.26,4.506,6.133,4.559c-2.247,1.761-5.078,2.811-8.154,2.811 c-0.53,0-1.053-0.031-1.566-0.091c2.905,1.863,6.356,2.95,10.064,2.95c12.076,0,18.68-10.004,18.68-18.68 c0-0.285-0.007-0.568-0.02-0.85C312.328,401.858,313.441,400.702,314.321,399.386L314.321,399.386z"
          fill="currentColor"
        />
      </g>
    </g>
  ),
  'pull-request': (
    <path
      d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
      fill="currentColor"
      transform="scale(1.2) translate(4, 2)"
    />
  ),
  star: (
    <path
      d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
      fill="currentColor"
      transform="scale(1.2) translate(3, 1.5)"
    />
  ),
  play: (
    <>
      <path d="M8 5v14l11-7z" fill="currentColor" />
      <path d="M0 0h24v24H0z" fill="none" />
    </>
  ),
  pause: (
    <>
      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" fill="currentColor" />
      <path d="M0 0h24v24H0z" fill="none" />
    </>
  )
};

export default function Icon({color, className, size = 20, name}) {
  const icon = icons[name];

  if (!icon) {
    throw new Error(`Unknown icon: ${name}`);
  }

  const renderClassName = cx(styles.root, className, {
    [styles['root_color-' + color]]: color
  });
  const style = color ? undefined : {color: 'currentColor'};

  return (
    <svg
      className={renderClassName}
      height={size + 'px'}
      style={style}
      version="1.1"
      viewBox="0 0 24 24"
      width={size + 'px'}
      xmlns="http://www.w3.org/2000/svg"
    >
      {icon}
    </svg>
  );
}
