import { useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import styles from './styles.module.scss';

export const DefaultLayout: React.FC = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className={styles['background']}>
        <video muted loop autoPlay>
          <source src="valback.mp4" type="video/mp4" />
        </video>
      </div>

      <div
        className={[
          isMenuOpen ? styles['overlay'] : '',
          styles['nav-container'],
        ].join(' ')}
      >
        <nav>
          <div className={styles['logo-button']}>
            <Link href="#" passHref>
              <a>
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={64}
                  height={64}
                  title="Valorant"
                />
              </a>
            </Link>

            <p>Riot Games</p>
          </div>

          <ul
            className={[
              styles['nav-buttons'],
              `${isMenuOpen ? styles['nav-buttons-open'] : ''}`,
            ].join(' ')}
          >
            <li>
              <a
                href="https://playvalorant.com/pt-br/news/"
                target="_blank"
                rel="noreferrer"
                title="Notícias"
              >
                Notícias
              </a>
            </li>
            <li>
              <a
                href="https://playvalorant.com/pt-br/agents/"
                target="_blank"
                rel="noreferrer"
                title="Agentes"
              >
                Agentes
              </a>
            </li>

            <li>
              <a
                href="https://playvalorant.com/pt-br/maps/"
                target="_blank"
                rel="noreferrer"
                title="Mapas"
              >
                Mapas
              </a>
            </li>

            <li>
              <a
                href="https://valorantesports.com/"
                target="_blank"
                rel="noreferrer"
                title="E-sports"
              >
                E-sports
              </a>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={[
            styles['menu-button'],
            `${isMenuOpen ? styles['active'] : ''}`,
          ].join(' ')}
        >
          <div className={styles['hamburguer']}></div>
        </button>
      </div>

      <div className={styles['content']}>{children}</div>
    </>
  );
};
