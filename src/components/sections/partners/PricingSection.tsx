// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { classNames } from '../../../utils';
import { Button } from '../../atoms/Button';
import { Container } from '../../atoms/Container';

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
    <Container>
      <h2 className="mb-4 text-3xl font-bold leading-snug text-gray-950 sm:text-4xl md:text-5xl lg:mb-8 lg:text-6xl">
        Partnerské balíčky
      </h2>

      <table className="hidden w-full overflow-hidden rounded-xl shadow-xl shadow-gray-700/20 lg:table">
        <thead className="font-semibold ">
          <tr className="relative z-20 bg-white text-xl font-bold shadow-xl shadow-black/5">
            <td className="px-4 py-5 ">Cena balíčku (bez DPH)</td>
            <td className="px-4 py-5 text-center">3 500 Kč</td>
            <td className="px-4 py-5 text-center">8 500 Kč</td>
            <td className="px-4 py-5 text-center">15 000 Kč</td>
          </tr>
        </thead>
        <tbody className="divide-y">
          {items.map((item, i) => (
            <tr
              className={classNames(
                'group relative transition duration-300 hover:z-10 hover:bg-primary-600 hover:text-white hover:shadow-xl hover:shadow-primary-600/20',
                i % 2 == 0 ? 'bg-gray-50' : 'bg-dark-100',
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
          className="rounded-xl bg-gray-50  shadow-xl "
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
            <li className="w-fit space-y-8 px-5 pb-6 pt-12 text-center">
              <hgroup className="mb-8 space-y-2">
                <p className="font-medium text-gray-700">Cena balíčku (bez DPH)</p>
                <h2 className="text-4xl font-bold text-gray-900">3 500 Kč</h2>
              </hgroup>

              <dl className="space-y-4">
                {items.map((item) => (
                  <div key={item.title}>
                    <dt className="text-lg font-medium text-gray-700">{item.title}</dt>
                    <dd>
                      {item.small ? (
                        <span className="font-bold text-green-600">ANO</span>
                      ) : (
                        <span className="font-bold text-red-600">NE</span>
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
            <li className="w-fit space-y-8 px-5 pb-6 pt-12 text-center">
              <hgroup className="mb-8 space-y-2">
                <p className="font-medium text-gray-700">Cena balíčku (bez DPH)</p>
                <h2 className="text-4xl font-bold text-gray-900">8 500 Kč</h2>
              </hgroup>

              <dl className="space-y-4">
                {items.map((item) => (
                  <div>
                    <dt className="text-lg font-medium text-gray-700">{item.title}</dt>
                    <dd>
                      {item.medium ? (
                        <span className="font-bold text-green-600">ANO</span>
                      ) : (
                        <span className="font-bold text-red-600">NE</span>
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
            <li className="w-fit space-y-8 px-5 pb-6 pt-12 text-center">
              <hgroup className="mb-8 space-y-2">
                <p className="font-medium text-gray-700">Cena balíčku (bez DPH)</p>
                <h2 className="text-4xl font-bold text-gray-900">15 000 Kč</h2>
              </hgroup>

              <dl className="space-y-4">
                {items.map((item) => (
                  <div>
                    <dt className="text-lg font-medium text-gray-700">{item.title}</dt>
                    <dd>
                      {item.large ? (
                        <span className="font-bold text-green-600">ANO</span>
                      ) : (
                        <span className="font-bold text-red-600">NE</span>
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
    </Container>
  </section>
);
