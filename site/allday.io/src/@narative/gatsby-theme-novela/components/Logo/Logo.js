import React from "react"
import styled from "@emotion/styled"

import mediaqueries from "@styles/media"

const Logo = ({ fill = "#fff" }) => {
  return (
    <LogoContainer>
      <svg
        width="106"
        height="48"
        viewBox="0 0 106 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M85.1923 40.4437L85.2962 40.3413L6.01391 42.7834C5.4351 44.2603 4.85629 45.7519 4.29232 47.2581C4.18843 47.4628 4.04001 47.5798 3.8916 47.6529L83.5449 42.9442L83.7972 42.3008L84.0347 41.8768L84.3018 41.4527L84.9103 40.7508L85.1923 40.4437Z"
          fill={fill}
        />
        <path
          d="M29.4779 6.40107C29.1217 11.3144 27.6672 20.1761 26.3018 26.8588C18.8663 27.1074 10.8965 27.5754 10.8965 30.383C10.8965 32.3864 14.9185 34.7992 18.2281 36.554C20.4247 37.753 23.8827 39.0106 26.2276 39.0106C27.4446 39.0106 28.3648 38.6597 28.6764 37.8115C29.4333 35.7058 29.9973 33.8779 30.7987 30.0613C31.4517 29.9735 32.0306 29.9004 32.5055 29.8273L32.461 30.0905L32.3274 30.6023L32.1641 31.1141L32.0602 31.6698L32.0009 32.1816L31.9415 33.2053L31.8821 33.7609L31.8525 34.2727V34.7846L31.897 35.2964L31.9712 35.7643L32.1196 36.2322L32.4758 37.0804L32.7281 37.4167L32.9804 37.7092L33.2772 38.0016L33.6186 38.221L33.9896 38.338L34.7614 38.455L35.1324 38.5134L35.548 38.5573L36.4087 38.5281L36.7798 38.455L37.1211 38.3965L37.5218 38.3087L37.8929 38.1771L38.2936 38.0016L38.6943 37.7969L39.0802 37.5776L39.4364 37.3728L39.8074 37.0804L40.1636 36.8318L40.5346 36.5393L40.8611 36.2469L41.1728 35.8667L41.5142 35.5303L42.1375 34.7699L42.4195 34.3897L42.6124 34.1411L42.7757 33.9072V34.2727L42.8202 34.7846L42.8944 35.2525L43.0428 35.7204L43.399 36.5686L43.6513 36.9049L43.9036 37.1974L44.2004 37.4898L44.5418 37.7092L44.9128 37.8262L45.6846 37.9431L46.0556 38.0016L46.4712 38.0455L47.332 38.0163L47.703 37.9431L48.0443 37.8847L48.445 37.7969L48.8161 37.6653L49.2168 37.4898L49.6175 37.2851L50.0034 37.0658L50.3596 36.861L50.7306 36.5686L51.0868 36.32L51.4578 36.0275L51.7843 35.7351L52.096 35.3549L52.2593 35.1794C52.1851 35.5157 52.1257 35.852 52.0812 36.1591C51.9031 37.212 52.7193 37.5629 53.684 37.5629C62.1733 37.5629 85.0882 22.0624 85.0882 7.26384C85.0882 2.64293 81.6451 0.288609 76.5545 0.288609C71.924 0.288609 67.0561 1.83866 62.0545 5.05575C61.5054 5.4067 61.2679 6.15248 61.2679 6.91288C61.2679 7.71715 61.5499 8.46293 62.1436 8.46293C62.3217 8.46293 62.5146 8.41906 62.6927 8.25821C67.5607 4.99725 71.271 3.53494 75.3227 3.53494C77.8457 3.53494 79.3595 5.14349 79.3595 7.99499C79.3595 15.5698 68.8519 29.8273 57.2311 33.8779C58.834 27.8532 63.0637 18.3774 66.878 12.2065C67.0115 12.0017 67.0561 11.8555 67.0561 11.7093C67.0561 11.0074 65.9578 10.6125 64.7111 10.6125C63.3754 10.6125 61.8171 11.0658 61.3125 12.0164C58.4333 17.2076 55.1682 24.8847 53.3278 31.041L53.1052 31.3481L52.467 32.0647L52.1554 32.4449L51.814 32.8251L51.4875 33.1175L51.0868 33.41L50.7158 33.7024L50.3596 33.951L49.9737 34.1996L49.5878 34.419L49.1723 34.5945L48.7567 34.7261L48.356 34.8138L47.5843 34.7261L47.2132 34.5067L46.9164 34.2581L46.7383 33.834L46.6344 33.3222V32.8104L46.7531 31.7868L46.9461 30.7632L47.05 30.2075L47.139 29.6957L47.2726 29.1839L47.5546 28.1603L47.7623 27.7801L48.0889 27.4876L48.5044 27.3121L48.8903 27.0928L49.2465 26.8442L49.9885 26.3763L50.3744 26.1277L50.7306 25.8791L51.4578 25.2795L52.8084 23.9196L53.1794 23.5832L53.5059 23.2908L53.8176 22.9106L54.159 22.5742L54.7823 21.8138L55.0643 21.3898L55.3166 20.9657L55.5095 20.6732L55.8657 20.1176L56.1477 19.6935L56.4 19.2694L56.6523 18.8015L56.8452 18.3335L57.2905 17.3977L57.4834 16.9297L57.6763 16.4179L57.8396 15.9061L57.988 15.4382L58.1216 14.9264L58.2106 14.4145L58.3294 13.3909L58.3591 12.8791L58.3145 12.3673L58.27 11.8994L58.1216 10.9635L57.9732 10.5394L57.7951 10.1153L57.5873 9.69128L57.335 9.35494L57.0679 9.06248L56.771 8.81389L56.4297 8.63841L56.0586 8.46293L55.6728 8.37519L55.2869 8.33133L54.8862 8.37519L54.4855 8.46293L54.1144 8.55067L53.7286 8.72615L53.3427 8.9455L53.0607 9.0771L52.5561 9.41344L52.2147 9.74977L51.9179 10.0861L51.2501 10.7588L50.6267 11.5192L50.3447 11.8994L49.7808 12.7475L48.7864 14.4438L48.5044 14.9117L48.2966 15.3358L48.0443 15.8037L47.5991 16.7396L47.1984 17.6755L46.7531 18.6114L46.5602 19.1232L46.3673 19.5911L46.2189 20.0591L46.0556 20.5709L45.9072 21.0388L45.7142 21.5506L45.3432 22.4865L45.0167 23.5101L44.7644 24.5337L44.6012 25.0456L44.4527 25.5135L43.9778 27.0343L43.5919 28.5697L43.399 29.5933L43.2654 30.1052L43.1319 30.5146L42.8054 31.041L42.5234 31.4651L42.2117 31.8892L41.5735 32.6057L41.2619 32.9859L40.9205 33.3661L40.594 33.6586L40.1933 33.951L39.8222 34.2435L39.4661 34.4921L39.0802 34.7407L38.6943 34.96L38.2788 35.1355L37.8632 35.2671L37.4031 35.311L36.6314 35.2232L36.2603 35.0039L35.9635 34.7553L35.7854 34.3312L35.6815 33.8194V33.3076L35.8003 32.284L35.9932 31.2604L36.0971 30.7047L36.1861 30.1929L36.3197 29.6811L36.6017 28.6575L36.6759 28.5259C36.8391 28.3796 36.9727 28.2188 37.0469 28.0579L37.1508 27.9702L37.5664 27.7947L37.9522 27.5754L38.3084 27.3268L39.0505 26.8588L39.4364 26.6102L39.7926 26.3616L40.5198 25.7621L41.8703 24.4021L42.2414 24.0658L42.5679 23.7733L42.8796 23.3931L43.2209 23.0568L43.8442 22.2964L44.1262 21.8723L44.3785 21.4483L44.5715 21.1558L44.9277 20.6001L45.2096 20.1761L45.4619 19.752L45.7142 19.284L45.9072 18.8161L46.3524 17.8802L46.5454 17.4123L46.7383 16.9005L46.9016 16.3887L47.05 15.9207L47.1835 15.4089L47.2726 14.8971L47.3913 13.8735L47.421 13.3617L47.3765 12.8499L47.332 12.3819L47.1835 11.4461L47.0351 11.022L46.857 10.5979L46.6493 10.1738L46.3969 9.83751L46.1298 9.54504L45.833 9.29645L45.4916 9.12097L45.1206 8.9455L44.7347 8.85776L44.3488 8.81389L43.9481 8.85776L43.5474 8.9455L43.1764 9.03324L42.7905 9.20871L42.4046 9.42806L42.1227 9.55967L41.618 9.896L41.2767 10.2323L40.9799 10.5687L40.312 11.2413L39.6887 12.0017L39.4067 12.3819L38.8427 13.2301L37.8484 14.9264L37.5664 15.3943L37.3586 15.8184L37.1063 16.2863L36.661 17.2222L36.2603 18.1581L35.8151 19.0939L35.6222 19.6058L35.4292 20.0737L35.2808 20.5416L35.1175 21.0534L34.9691 21.5214L34.7762 22.0332L34.4052 22.9691L34.0787 23.9927L33.8264 25.0163L33.6631 25.5281L33.5147 25.9961L33.4108 26.3031C32.8023 26.4055 32.0751 26.5225 31.1994 26.6687C32.7726 19.0354 34.6872 9.28183 34.6872 4.92414C34.6872 2.46745 32.8468 1.44384 30.9175 1.3561C21.0183 0.975895 2.74865 29.0669 0.656021 42.9004C0.522449 43.7485 0.448242 44.5674 0.448242 45.2986C0.448242 46.6439 1.19031 47.5067 1.85817 47.6821C1.93237 47.6968 2.00658 47.7114 2.08079 47.7114C2.16983 47.7114 2.25888 47.6821 2.33309 47.6529C2.49634 47.5798 2.64476 47.4628 2.7338 47.2581C3.29777 45.7519 3.87659 44.2603 4.4554 42.7834C10.3474 27.8386 17.1892 14.6778 29.4779 6.40107ZM24.1201 35.545C21.2112 34.5945 14.6217 31.2165 15.2896 30.8509C15.2302 30.3245 21.6268 30.3537 25.5449 30.2953C24.8919 33.059 24.788 33.4392 24.1201 35.545ZM49.1278 21.4483C49.5136 19.8397 51.4133 14.7655 54.0105 11.5923C56.6078 8.40444 55.4947 13.6541 54.8268 15.7452C54.1738 17.851 51.9921 21.5068 49.3504 23.2615C49.0387 23.4663 48.638 23.5979 48.638 23.5979C48.638 23.5979 48.7419 23.0568 49.1278 21.4483ZM38.2491 22.0039C38.6349 20.3954 40.5346 15.3212 43.1319 12.148C45.7291 8.96012 44.616 14.2098 43.9481 16.3009C43.2951 18.4067 41.1134 22.0624 38.4717 23.8172C38.16 24.0219 37.7593 24.1535 37.7593 24.1535C37.7593 24.1535 37.8632 23.6125 38.2491 22.0039Z"
          fill={fill}
        />
        <path
          d="M105.777 29.1546L105.45 28.9792L105.109 29.1254L104.768 29.4764L103.625 31.0118L103.313 31.392L102.393 32.4448L102.081 32.8251L101.77 33.176L101.443 33.4977L100.761 34.1996L100.404 34.5213L99.6623 35.077L99.2765 35.3549L98.9054 35.6034L98.5047 35.7789L98.1188 35.9252H97.8962V35.7058L98.2821 34.9162L98.475 34.536L98.668 34.1119L98.8609 33.7317L99.0538 33.3076L99.2468 32.9274L99.6475 32.0793L99.7662 31.8307L100.033 31.275L100.256 30.8948L100.449 30.5146L100.85 29.6665L101.295 28.8914L101.696 28.0433L101.889 27.6631L102.111 27.2829L102.304 26.9027L102.705 26.0545L102.927 25.6743L103.165 25.2503L103.388 24.8701L103.58 24.446L103.773 24.0658L104.011 23.6417L104.204 23.2615L104.456 22.8813L104.619 22.5011V22.1502L104.352 21.9747L104.041 21.8285L103.684 21.6822L103.313 21.5945H102.913L102.542 21.6091L101.77 21.6969L101.369 21.8138L100.954 21.9893L100.672 22.3403L100.449 22.7205L100.256 23.1445L99.7959 23.9927L99.2023 25.2503L98.9648 25.6743L98.6976 26.0984L98.4453 26.4786L97.9853 27.3268L97.7923 27.7508L97.5549 28.1749L97.3026 28.5551L97.0206 28.9353L96.8722 29.1839L96.516 29.7103L96.2934 30.0905L96.0114 30.4707L95.7294 30.8217L95.4326 31.1434L95.1209 31.4943L94.8389 31.8453L94.5272 32.1963L94.2304 32.518L93.9039 32.8397L93.2064 33.3954L92.865 33.6001L92.4643 33.8048L92.1081 33.8779L91.7668 33.8487L91.6183 33.5708L91.5441 33.2199L91.648 32.7958L91.7816 32.4156L91.9448 31.9915L92.3307 31.2165L92.6721 30.3684L92.9244 29.8419L93.0579 29.5641L93.5032 28.7891L93.6961 28.4089L94.082 27.6046L94.2749 27.1805L94.4679 26.8003L94.6311 26.3763L94.8537 25.9961L95.0467 25.6158L95.299 25.2356L95.5216 24.8554L95.7591 24.4314L95.952 24.0512L96.1449 23.6271L96.3379 23.2469L96.5308 22.8228L96.6941 22.4426V22.0917L96.4269 21.9162L96.0707 21.8723L95.6997 21.9016H94.5421L93.7852 21.8723L93.3845 21.9162L92.9689 22.0332L92.6721 22.3403L92.4495 22.7205L91.8855 23.8757L91.6925 24.2998L91.4996 24.68L91.0544 25.455L90.6685 26.23L90.4459 26.6102L90.1936 26.9904L90.0006 27.3706L89.8374 27.7947L89.6148 28.1749L89.1992 28.9499L89.0063 29.3301L88.7836 29.7103L88.5907 30.0905L88.4423 30.4415L88.279 30.6608L87.9674 31.0118L87.4182 31.7137L86.4981 32.7666L86.1716 33.0883L85.8154 33.41L85.4592 33.6878L85.0882 33.9364L84.7171 34.1411L84.3313 34.3166L83.9751 34.3897L83.6337 34.3605L83.4853 34.0826L83.4408 33.7317L83.6337 32.9567L83.7673 32.5765L83.9305 32.1963L84.0789 31.8453L84.3906 31.0703L84.5836 30.6901L84.7616 30.3391L85.3256 29.1839L85.5037 28.8329L85.9341 28.1018L86.127 27.7216L86.2458 27.3706L86.2309 27.0489L85.9638 26.8442L85.6967 26.6687L85.385 26.5225L84.7765 26.3178L84.45 26.2446L84.0789 26.2154L83.7228 26.2446L83.3666 26.3178L82.9807 26.464L82.6839 26.7857L82.4909 27.1659L82.298 27.59L82.0605 28.014L81.8082 28.3942L81.5856 28.7744L81.3333 29.1546L81.0662 29.5787L80.7842 29.9589L80.0273 31.1141L79.7453 31.4943L79.4336 31.8453L78.84 32.5765L78.2315 33.2784L77.8753 33.6001L77.5191 33.8779L77.1481 34.1265L76.7473 34.3312L76.3911 34.4043H75.9904L75.7381 34.1558L75.6046 33.834L75.6194 33.41L75.6639 32.9859L75.7678 32.5618L76.035 31.7137L76.2279 31.2896L76.4208 30.9094L76.8661 30.1344L77.1035 29.7103L77.3262 29.3301L78.4689 27.7947L78.7806 27.4145L79.0923 27.0635L79.4188 26.7418L79.775 26.4201L80.517 25.9229L80.7842 25.7475L81.3036 25.4257L81.6895 25.2503L82.5058 24.9724L83.3072 24.8993L83.7079 24.9286H83.9899L84.5094 25.0017L84.8952 25.0748L85.2514 25.1772L85.6967 25.3819L86.2458 25.7036L86.5723 25.9083L87.1511 26.3324L87.4628 26.4347L87.8041 26.23L88.1455 25.9814L88.472 25.7036L88.7688 25.3819L89.0508 25.0017L89.2437 24.6215L89.1695 24.2705L88.9914 23.9488L88.7836 23.6271L88.5313 23.3785L87.9525 22.9544L87.344 22.6035L87.0027 22.4573L86.6465 22.3549L85.5037 22.1502L85.1475 22.0478L84.7913 21.9747H84.0047L82.4019 22.1209L82.0012 22.194L81.645 22.2672L81.2739 22.3695L80.8881 22.5157L80.1163 22.8667L79.7304 23.0129L79.3743 23.1884L79.0032 23.3931L78.6619 23.6417L77.9346 24.1682L77.5933 24.3729L77.2223 24.6215L76.8957 24.8993L76.5396 25.1772L75.9014 25.7328L75.5749 26.0545L75.2929 26.4055L74.9664 26.7272L74.6547 27.0782L74.3876 27.3999L74.1056 27.7801L73.8088 28.1018L73.5268 28.4527L73.2745 28.8329L72.8292 29.608L72.4434 30.383L72.2504 30.8071L72.0575 31.1873L71.8942 31.6113L71.7607 32.0354L71.6271 32.4156L71.3154 33.6439L71.2412 34.068V34.4482L71.3006 35.2232L71.3896 35.6034L71.5232 35.9252L71.9536 36.4808L72.1762 36.6856L72.4434 36.8903L72.7402 37.0658L73.0519 37.1681L74.1204 37.2705L74.5063 37.2412L75.2929 37.095L75.6639 36.9926L76.4357 36.6417L76.7919 36.4662L77.5488 35.969L77.905 35.6912L78.2315 35.4133L78.5431 35.0624L79.1962 34.4336L79.5078 34.0826L79.7898 33.7317L80.0718 33.3515L80.1608 33.2491V33.3954L80.0273 33.7756L79.9234 34.1996L79.7898 34.5798L79.7304 34.96V35.3402L79.7008 35.7204L79.7304 36.1006L79.8343 36.4516L80.0273 36.7002L80.2796 36.9488L80.5616 37.0511L80.8881 37.1242H81.645L82.0309 37.095L82.4316 37.0219L82.8323 36.9195L83.2182 36.7733L83.604 36.5978L84.0047 36.3931L84.3758 36.1884L84.8655 35.8374L85.103 35.6327L85.4592 35.3549L86.1419 34.7553L86.4981 34.4775L86.8246 34.1558L87.0472 33.9072L87.0175 34.0388L86.9433 34.4628V34.843L86.9878 35.194L87.0917 35.545L87.2253 35.8667L87.4034 36.1445L87.626 36.3492L87.8932 36.5247L88.2048 36.6709L88.5165 36.7733L89.214 36.8464L89.5999 36.8172L90.0006 36.7441L90.2678 36.7148L90.7575 36.6124L91.1434 36.4662L91.7668 36.2176L92.2565 36.0129L92.6275 35.8082L92.9986 35.5596L94.0523 34.7114L94.3937 34.4628L94.7202 34.185L95.0467 33.8633L95.3584 33.5123L95.4771 33.41L95.3287 33.7317L94.6757 34.8577L94.4679 35.311L94.2304 35.7351L93.8297 36.5832L93.5922 37.0365L93.2954 37.3582L92.9541 37.5629L92.5237 37.6361L92.1229 37.7384L91.7074 37.8847L91.3215 38.0309L90.906 38.2064L90.5349 38.3087L89.7187 38.5866L89.3328 38.7328L88.9172 38.9083L88.6056 39.113L87.8486 39.6102L87.6854 39.7272L87.5667 39.8149L87.4776 39.888L87.1066 40.1366L86.7504 40.4583L86.4536 40.78L85.8451 41.4819L85.5779 41.906L85.3405 42.3301L84.9991 43.1782L84.9101 43.5438V43.5584L84.8359 43.9825L84.7765 44.3627L84.8507 45.0646L84.9546 45.4156L85.0585 45.7373L85.2514 45.9859L85.474 46.2345L86.0083 46.5854L86.32 46.7316L86.5575 46.8486L86.602 46.8633H86.6168C87.0472 47.0095 88.3829 46.9949 88.7391 46.8486H88.7985L89.9116 46.5562L90.6685 46.293L91.0395 46.0882L91.4106 45.8396L91.6629 45.708L92.1229 45.3571L92.4198 45.0354L92.7314 44.6844L93.0579 44.3627L93.3548 44.041L93.8594 43.266L94.0968 42.915L94.3491 42.5348L94.7944 41.7598L95.0467 41.3796L95.2693 40.9994L95.4622 40.6192L95.6997 40.1951L95.8926 39.8149L96.1153 39.4347L96.3082 39.0106L96.5457 38.6889L96.8573 38.4403L97.6291 38.0894L99.0984 37.2412L99.4397 36.9926L99.8107 36.7879L100.508 36.2322L100.85 35.9836L101.176 35.6619L101.503 35.3841L102.096 34.7553L102.423 34.4336L102.734 34.0826L103.061 33.7609L103.358 33.4392L103.907 32.7373L104.189 32.3571L104.426 32.0062L104.723 31.6844L105.005 31.3335L105.287 30.9533L105.777 30.2514L105.97 29.8273L106 29.4471L105.777 29.1546ZM92.0042 40.4876L91.8113 40.8678L91.6629 41.2187L91.4551 41.5697L91.2473 41.8914L90.8169 42.5933L90.5794 42.9443L90.2826 43.266L89.9858 43.5438L89.689 43.7485L89.3328 43.924L88.9766 43.9825H88.6056L88.3384 43.7778L88.2048 43.4707L88.3236 43.0174L88.561 42.5933L88.843 42.2131L89.1547 41.8621L89.4812 41.5404L89.8077 41.2626L90.4904 40.7654L90.8614 40.5168L91.2325 40.3121L91.5887 40.1366L91.9745 39.9904L92.1378 40.0635L92.0042 40.4876Z"
          fill={fill}
        />
      </svg>
    </LogoContainer>
  )
}

export default Logo

const LogoContainer = styled.div`
  .Logo__Mobile {
    display: none;
  }

  ${mediaqueries.tablet`
    .Logo__Desktop {
      display: none;
    }
    
    .Logo__Mobile{
      display: block;
    }
  `}
`