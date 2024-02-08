// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { classNames } from '../../../utils';
import { Button } from '../../atoms/Button';

const items = [
  { title: 'Logo na webu', small: true, medium: true, large: true },
  { title: 'Potištěný polštář', small: true, medium: true, large: true },
  { title: 'Vyhlášení při rekordu moderátorem', small: true, medium: true, large: true },
  { title: 'Logo v aftermovie', small: true, medium: true, large: true },
  { title: 'Rollup', small: true, medium: true, large: true },
  { title: 'Loga na tiskovinách', small: false, medium: true, large: true },
  { title: 'Vlastní příspěvek', small: false, medium: true, large: true },
  { title: 'Vlastní zóna/stánek', small: false, medium: true, large: true },
  { title: 'Reels video', small: false, medium: true, large: true },
  { title: 'Logo na promítacím plátně v průběhu akce', small: false, medium: true, large: true },
  { title: 'Loga na bannery v arealu', small: false, medium: true, large: true },
  { title: 'Zapojení do programu', small: false, medium: false, large: true },
  { title: 'Pojmenování stage/kamionu', small: false, medium: false, large: true },
  { title: 'Vlastní bitva (teambuilding pro firmu)', small: false, medium: false, large: true },
  { title: 'Vlastní chill zóna', small: false, medium: false, large: true },
  { title: 'Zapojení firmy v doprovodném programu', small: false, medium: false, large: true },
  { title: 'Exkluzivní reklama na webu', small: false, medium: false, large: true },
  { title: 'Fotosoutěž', small: false, medium: false, large: true },
];

export const PricingSection = () => (
  <section className="py-16 md:py-24 lg:py-32">
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
      <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 lg:mb-8 leading-snug text-gray-950">
        Partnerské balíčky
      </h2>

      <table className="w-full hidden lg:table rounded-xl overflow-hidden shadow-xl shadow-gray-700/20">
        <thead className="font-semibold ">
          <tr className="bg-white text-xl font-bold shadow-xl shadow-black/5 relative z-20">
            <td className="py-5 px-4 ">Cena balíčku (bez DPH)</td>
            <td className="py-5 px-4 text-center">3 500 Kč</td>
            <td className="py-5 px-4 text-center">8 500 Kč</td>
            <td className="py-5 px-4 text-center">15 000 Kč</td>
          </tr>
        </thead>
        <tbody className="divide-y">
          {items.map((item, i) => (
            <tr
              className={classNames(
                'hover:bg-primary-600 transition duration-300 hover:text-white group hover:shadow-xl hover:shadow-primary-600/20 relative hover:z-10',
                i % 2 == 0 ? 'bg-gray-50' : 'bg-gray-100',
              )}
              key={item.title}
            >
              <td className={classNames('px-4 py-2.5 ')}>{item.title}</td>
              <td className={classNames('px-4 py-2.5 text-center font-medium')}>{item.small ? 'ANO' : ''}</td>
              <td className={classNames('px-4 py-2.5 text-center')}>{item.medium ? 'ANO' : ''}</td>
              <td className={classNames('px-4 py-2.5 text-center')}>{item.large ? 'ANO' : ''}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="lg:hidden">
        <Swiper
          spaceBetween={0}
          slidesPerView={1.2}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          className="bg-gray-50 rounded-xl  shadow-xl "
          wrapperClass="divide-x-2 divide-x-gray-900"
          centeredSlides
          breakpoints={{
            640: {
              slidesPerView: 2.2,
              centeredSlides: false,
            },
          }}
        >
          <SwiperSlide>
            <li className="px-5 pt-12 pb-6 text-center w-fit space-y-8">
              <hgroup className="space-y-2 mb-8">
                <p className="text-gray-700 font-medium">Cena balíčku (bez DPH)</p>
                <h2 className="text-gray-900 font-bold text-4xl">3 500 Kč</h2>
              </hgroup>

              <dl className="space-y-4">
                {items.map((item) => (
                  <div>
                    <dt className="text-gray-700 font-medium text-lg">{item.title}</dt>
                    <dd>
                      {item.small ? (
                        <span className="text-green-600 font-bold">ANO</span>
                      ) : (
                        <span className="text-red-600 font-bold">NE</span>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="px-4">
                <Button text="Mám zájem" icon="love" href="/kontakt" type="link" variant="primary" size="md" />
              </div>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li className="px-5 pt-12 pb-6 text-center w-fit space-y-8">
              <hgroup className="space-y-2 mb-8">
                <p className="text-gray-700 font-medium">Cena balíčku (bez DPH)</p>
                <h2 className="text-gray-900 font-bold text-4xl">8 500 Kč</h2>
              </hgroup>

              <dl className="space-y-4">
                {items.map((item) => (
                  <div>
                    <dt className="text-gray-700 font-medium text-lg">{item.title}</dt>
                    <dd>
                      {item.medium ? (
                        <span className="text-green-600 font-bold">ANO</span>
                      ) : (
                        <span className="text-red-600 font-bold">NE</span>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="px-4">
                <Button text="Mám zájem" icon="love" href="/kontakt" type="link" variant="primary" size="md" />
              </div>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li className="px-5 pt-12 pb-6 text-center w-fit space-y-8">
              <hgroup className="space-y-2 mb-8">
                <p className="text-gray-700 font-medium">Cena balíčku (bez DPH)</p>
                <h2 className="text-gray-900 font-bold text-4xl">15 000 Kč</h2>
              </hgroup>

              <dl className="space-y-4">
                {items.map((item) => (
                  <div>
                    <dt className="text-gray-700 font-medium text-lg">{item.title}</dt>
                    <dd>
                      {item.large ? (
                        <span className="text-green-600 font-bold">ANO</span>
                      ) : (
                        <span className="text-red-600 font-bold">NE</span>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="px-4">
                <Button text="Mám zájem" icon="love" href="/kontakt" type="link" variant="primary" size="md" />
              </div>
            </li>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
);
