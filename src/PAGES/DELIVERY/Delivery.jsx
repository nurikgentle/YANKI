import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../COMPONENTS/FOOTER/Footer';
import './Delivery.scss';
import switcher from '../../ASSETS/switcher.svg';

const Delivery = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

  return (
    <div className='delivery'>
        <div className='switchers' id='key'>
          <Link to='/'>Главная</Link>
          <img src={switcher} alt='' />
          <Link>Оплата и доставка</Link>
        </div>
        <h1 className='oplata'>Оплата и доставка</h1>
        <div className='two-texts'>
            <div className='first-text'>
                <h3> Вы можете оплатить покупку одним из ниже перечисленных способов:</h3>
                <h4>• наложенным платежом в отделении Новой Почты</h4>
                <h4>• денежным переводом  Visa/MasterCard</h4>
                <h4>• полная предоплата через Приват 24</h4>
            </div>
            <div className='second-text'>
                <h3>Мы готовы предложить несколько вариантов доставки: </h3>
                <h4>• международные сервисы доставки для жителей зарубежья: Укрпочта( 1-3 недели ,DHL(3-7 дней)</h4>
                <h4>• Срок доставки: 1–2 дня с момента  заказа</h4>
            </div>
        </div>
        {/* <h3 className='process'>Процесс оформления заказа с помощью LIQPAY:</h3> */}
        <div className='payments'>
            <div className='first-payment'>
                <svg width="45" height="50" viewBox="0 0 45 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_406_589)">
                    <path d="M9.43213 0V7.57143L34.2721 25L9.43213 42.4286V50L45.0001 25L9.43213 0Z" fill="#E0BEA2"/>
                    <path d="M0 7.35718V42.5715L25.056 25L0 7.35718Z" fill="#E0BEA2"/>
                    <path d="M6.49228 29C5.9332 28.9927 5.43748 28.868 5.00512 28.6259C4.57277 28.3838 4.21123 28.0646 3.92051 27.6685C3.62978 27.2724 3.40988 26.8469 3.26079 26.392C3.11916 25.9298 3.04834 25.4787 3.04834 25.0385C3.04834 24.569 3.12661 24.0995 3.28315 23.63C3.4397 23.1605 3.66706 22.735 3.96523 22.3535C4.27086 21.9647 4.63613 21.6566 5.06103 21.4292C5.48593 21.1944 5.96301 21.077 6.49228 21.077C7.06627 21.077 7.56571 21.2017 7.99061 21.4512C8.42297 21.7006 8.78451 22.0234 9.07523 22.4195C9.36595 22.8157 9.58213 23.2448 9.72376 23.707C9.87285 24.1692 9.9474 24.613 9.9474 25.0385C9.9474 25.5154 9.86912 25.9885 9.71258 26.458C9.55604 26.9202 9.32495 27.342 9.01932 27.7235C8.72115 28.105 8.35961 28.4131 7.9347 28.6479C7.5098 28.8753 7.02899 28.9927 6.49228 29ZM4.60258 25.0385C4.61004 25.3466 4.65104 25.6547 4.72558 25.9629C4.80758 26.2636 4.92312 26.5424 5.07221 26.7992C5.22875 27.0559 5.4263 27.265 5.66484 27.4264C5.90338 27.5805 6.17919 27.6575 6.49228 27.6575C6.82773 27.6575 7.11472 27.5731 7.35326 27.4044C7.5918 27.2357 7.78562 27.0193 7.9347 26.7552C8.09125 26.4911 8.20679 26.2086 8.28134 25.9078C8.35588 25.6071 8.39315 25.3173 8.39315 25.0385C8.39315 24.7304 8.35215 24.426 8.27015 24.1252C8.19561 23.8171 8.07634 23.5346 7.91234 23.2779C7.7558 23.0211 7.55826 22.8157 7.31972 22.6616C7.08863 22.5002 6.81282 22.4195 6.49228 22.4195C6.16428 22.4195 5.88102 22.5039 5.64247 22.6726C5.40393 22.8414 5.20639 23.0578 5.04985 23.3219C4.90076 23.586 4.78894 23.8684 4.7144 24.1692C4.63986 24.47 4.60258 24.7597 4.60258 25.0385Z" fill="white"/>
                    <path d="M15.6519 27.5585V28.89H11.1569V27.5585H12.7V22.4746C12.6404 22.5626 12.5397 22.6616 12.3981 22.7717C12.2639 22.8744 12.1074 22.9771 11.9285 23.0798C11.757 23.1751 11.5781 23.2558 11.3917 23.3219C11.2128 23.3879 11.0488 23.4209 10.8998 23.4209V22.0564C11.101 22.0564 11.306 22.005 11.5147 21.9023C11.7235 21.7996 11.9173 21.6823 12.0962 21.5502C12.2751 21.4182 12.4167 21.2971 12.5211 21.1871C12.6329 21.0697 12.6925 21.0073 12.7 21H14.2319V27.5585H15.6519Z" fill="white"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_406_589">
                    <rect width="45" height="50" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
                <h3>Выбрать в корзине способ оплаты "LIQPAY";</h3>
            </div>
            <div className='second-payment'>      
                <svg width="45" height="50" viewBox="0 0 45 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_406_602)">
                    <path d="M9.43213 0V7.57143L34.2721 25L9.43213 42.4286V50L45.0001 25L9.43213 0Z" fill="#E0BEA2"/>
                    <path d="M0 7.35718V42.5715L25.056 25L0 7.35718Z" fill="#E0BEA2"/>
                    <path d="M5.46671 29C4.90917 28.9927 4.41481 28.8683 3.98364 28.6269C3.55247 28.3855 3.19192 28.0672 2.902 27.6722C2.61208 27.2771 2.39277 26.8528 2.24409 26.3992C2.10285 25.9383 2.03223 25.4883 2.03223 25.0494C2.03223 24.5812 2.11028 24.1129 2.2664 23.6447C2.42251 23.1765 2.64924 22.7522 2.9466 22.3717C3.2514 21.984 3.61566 21.6767 4.0394 21.4499C4.46313 21.2158 4.9389 21.0988 5.46671 21.0988C6.03913 21.0988 6.5372 21.2231 6.96094 21.4719C7.39211 21.7206 7.75266 22.0425 8.04258 22.4376C8.3325 22.8326 8.54809 23.2606 8.68934 23.7215C8.83801 24.1824 8.91235 24.6251 8.91235 25.0494C8.91235 25.5249 8.8343 25.9968 8.67818 26.465C8.52207 26.9259 8.29162 27.3466 7.98683 27.727C7.68947 28.1075 7.32892 28.4147 6.90519 28.6488C6.48145 28.8756 6.00196 28.9927 5.46671 29ZM3.58221 25.0494C3.58964 25.3567 3.63053 25.6639 3.70487 25.9712C3.78664 26.2711 3.90187 26.5492 4.05055 26.8052C4.20666 27.0613 4.40366 27.2698 4.64155 27.4307C4.87943 27.5844 5.15449 27.6612 5.46671 27.6612C5.80124 27.6612 6.08745 27.577 6.32534 27.4088C6.56322 27.2405 6.75651 27.0247 6.90519 26.7613C7.0613 26.4979 7.17653 26.2163 7.25086 25.9163C7.3252 25.6164 7.36237 25.3274 7.36237 25.0494C7.36237 24.7421 7.32149 24.4385 7.23971 24.1385C7.16537 23.8313 7.04643 23.5496 6.88288 23.2936C6.72677 23.0375 6.52977 22.8326 6.29188 22.679C6.06143 22.5181 5.78637 22.4376 5.46671 22.4376C5.13962 22.4376 4.85713 22.5217 4.61924 22.69C4.38136 22.8583 4.18436 23.0741 4.02824 23.3374C3.87957 23.6008 3.76806 23.8825 3.69372 24.1824C3.61938 24.4824 3.58221 24.7714 3.58221 25.0494Z" fill="white"/>
                    <path d="M9.8398 28.8903C9.8398 28.444 9.86953 28.0526 9.92901 27.716C9.98848 27.3722 10.0814 27.0686 10.2078 26.8052C10.3416 26.5345 10.5126 26.2968 10.7207 26.0919C10.9289 25.8871 11.1853 25.6932 11.4901 25.5103C11.7503 25.364 12.0179 25.2213 12.293 25.0823C12.5755 24.9433 12.8357 24.797 13.0736 24.6433C13.3189 24.4897 13.5159 24.3141 13.6646 24.1166C13.8207 23.9191 13.8987 23.6776 13.8987 23.3923C13.8987 23.1728 13.8504 22.9863 13.7538 22.8326C13.6646 22.6717 13.5308 22.5473 13.3523 22.4595C13.1814 22.3717 12.9732 22.3278 12.7279 22.3278C12.4454 22.3278 12.1815 22.3791 11.9362 22.4815C11.6983 22.5766 11.4827 22.6973 11.2894 22.8436C11.1036 22.9826 10.9437 23.1216 10.8099 23.2606L9.87325 22.2949C9.97733 22.1779 10.1186 22.0462 10.297 21.8999C10.4828 21.7535 10.7021 21.6109 10.9549 21.4719C11.2151 21.3329 11.5087 21.2195 11.8358 21.1317C12.1629 21.0439 12.5235 21 12.9175 21C13.4973 21 13.9842 21.1024 14.3782 21.3073C14.7722 21.5048 15.0696 21.7791 15.2703 22.1303C15.4785 22.4742 15.5825 22.8729 15.5825 23.3265C15.5825 23.6557 15.5268 23.9483 15.4153 24.2044C15.3112 24.4531 15.1662 24.6726 14.9804 24.8628C14.7945 25.053 14.5864 25.225 14.3559 25.3786C14.1255 25.5249 13.8876 25.6676 13.6423 25.8066C13.2557 26.0114 12.9435 26.1907 12.7056 26.3443C12.4677 26.4979 12.2781 26.6406 12.1369 26.7723C12.0031 26.904 11.899 27.0357 11.8247 27.1674C11.7578 27.2917 11.6983 27.4234 11.6462 27.5624H15.5937V28.8903H9.8398Z" fill="white"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_406_602">
                    <rect width="45" height="50" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
                <h3>Подтвердить заказ;</h3>
            </div>
            <div className='third-payment'>
                <svg width="45" height="51" viewBox="0 0 45 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_406_606)">
                <path d="M9.43213 0V7.69355L34.2721 25.4032L9.43213 43.1129V50.8065L45.0001 25.4032L9.43213 0Z" fill="#E0BEA2"/>
                <path d="M0 7.47583V43.2581L25.056 25.4032L0 7.47583Z" fill="#E0BEA2"/>
                <path d="M5.46672 29.4678C4.90917 29.4603 4.41481 29.334 3.98364 29.0886C3.55247 28.8433 3.19192 28.5199 2.902 28.1185C2.61208 27.7171 2.39277 27.2859 2.24409 26.825C2.10285 26.3567 2.03223 25.8995 2.03223 25.4534C2.03223 24.9777 2.11028 24.5019 2.2664 24.0261C2.42251 23.5503 2.64925 23.1192 2.9466 22.7326C3.2514 22.3386 3.61566 22.0264 4.0394 21.7959C4.46313 21.558 4.9389 21.4391 5.46672 21.4391C6.03913 21.4391 6.53721 21.5655 6.96094 21.8182C7.39211 22.071 7.75266 22.3981 8.04258 22.7995C8.33251 23.201 8.54809 23.6358 8.68934 24.1042C8.83802 24.5725 8.91235 25.0223 8.91235 25.4534C8.91235 25.9366 8.8343 26.4161 8.67818 26.8919C8.52207 27.3603 8.29162 27.7877 7.98683 28.1743C7.68947 28.5608 7.32892 28.8731 6.90519 29.1109C6.48145 29.3414 6.00196 29.4603 5.46672 29.4678ZM3.58221 25.4534C3.58964 25.7657 3.63053 26.0779 3.70487 26.3901C3.78664 26.6949 3.90187 26.9774 4.05055 27.2376C4.20666 27.4978 4.40366 27.7096 4.64155 27.8732C4.87943 28.0293 5.15449 28.1074 5.46672 28.1074C5.80124 28.1074 6.08745 28.0219 6.32534 27.8509C6.56322 27.6799 6.75651 27.4606 6.90519 27.193C7.0613 26.9254 7.17653 26.6392 7.25087 26.3344C7.3252 26.0296 7.36237 25.7359 7.36237 25.4534C7.36237 25.1412 7.32149 24.8327 7.23971 24.5279C7.16537 24.2157 7.04643 23.9295 6.88288 23.6693C6.72677 23.4091 6.52977 23.201 6.29188 23.0448C6.06143 22.8813 5.78638 22.7995 5.46672 22.7995C5.13962 22.7995 4.85713 22.885 4.61924 23.056C4.38136 23.227 4.18436 23.4463 4.02824 23.7139C3.87957 23.9815 3.76806 24.2677 3.69372 24.5725C3.61938 24.8773 3.58221 25.1709 3.58221 25.4534Z" fill="white"/>
                <path d="M12.4157 29.4343C11.9919 29.4343 11.6054 29.3823 11.256 29.2782C10.914 29.1667 10.6129 29.0106 10.3527 28.8099C10.1 28.6017 9.89927 28.3564 9.75059 28.0739L10.5535 27.0592C10.6278 27.2227 10.7467 27.3826 10.9103 27.5387C11.0738 27.6948 11.2783 27.8212 11.5236 27.9178C11.7689 28.0144 12.0477 28.0628 12.3599 28.0628C12.6647 28.0628 12.9286 28.0182 13.1516 27.9289C13.3746 27.8397 13.5456 27.7171 13.6646 27.561C13.7909 27.3974 13.8541 27.2004 13.8541 26.97C13.8541 26.7246 13.7761 26.5165 13.62 26.3455C13.4713 26.1745 13.2483 26.0444 12.9509 25.9552C12.6536 25.866 12.2893 25.8214 11.8581 25.8214H11.4901V24.7063H11.8804C12.4157 24.7063 12.8431 24.6134 13.1628 24.4276C13.4899 24.2417 13.6534 23.9778 13.6534 23.6358C13.6534 23.4277 13.5977 23.2493 13.4862 23.1006C13.3746 22.9445 13.226 22.8293 13.0401 22.7549C12.8543 22.6731 12.6498 22.6323 12.4268 22.6323C12.0551 22.6323 11.7243 22.7215 11.4344 22.8999C11.1519 23.0709 10.9363 23.2939 10.7876 23.5689L9.8175 22.4873C9.98104 22.2494 10.2041 22.0487 10.4866 21.8851C10.769 21.7142 11.085 21.5803 11.4344 21.4837C11.7912 21.3871 12.1592 21.3387 12.5383 21.3387C13.0661 21.3387 13.5345 21.4317 13.9433 21.6175C14.3522 21.7959 14.6719 22.0413 14.9023 22.3535C15.1328 22.6657 15.248 23.0225 15.248 23.424C15.248 23.7213 15.1848 23.9927 15.0584 24.238C14.9395 24.4833 14.7685 24.6877 14.5455 24.8513C14.3225 25.0148 14.0586 25.1338 13.7538 25.2081C14.0809 25.2602 14.3671 25.3828 14.6124 25.5761C14.8652 25.762 15.0584 25.9998 15.1922 26.2898C15.3335 26.5723 15.4041 26.8808 15.4041 27.2153C15.4041 27.6836 15.2703 28.0813 15.0027 28.4084C14.7425 28.7355 14.3857 28.9883 13.9322 29.1667C13.4862 29.3451 12.9806 29.4343 12.4157 29.4343Z" fill="white"/>
                </g>
                <defs>
                <clipPath id="clip0_406_606">
                <rect width="45" height="50.8065" fill="white"/>
                </clipPath>
                </defs>
                </svg>
                <h3>После этого Вас перенаправит на сайт LIQPAY, где вы выбираете удобный для вас способ оплаты: через Приват24, или с помощью карты Mastercard/VISA со всего мира. </h3>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Delivery