import { useState } from 'react';

import Image from 'next/image';

import { FiMenu } from 'react-icons/fi';

import styles from './styles.module.scss';

export const DefaultLayout: React.FC = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (
    <div>
      <div className={styles['background']}>
        <video muted loop autoPlay>
          <source src="valback.mp4" type="video/mp4" />
        </video>
      </div>

      <div className={isMenuOpen ? styles['overlay'] : ''}>
        <nav className={styles['nav-container']}>
          <div className={styles['logo-button']}>
            <a href="#">
              <Image
                src="/LogoValorant.svg"
                alt="Logo"
                width={64}
                height={64}
              />
            </a>

            <p>Riot Games</p>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={styles['menu-button']}
          >
            <FiMenu size={24} />
          </button>

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
              >
                Notícias
              </a>
            </li>
            <li>
              <a
                href="https://playvalorant.com/pt-br/agents/"
                target="_blank"
                rel="noreferrer"
              >
                Agentes
              </a>
            </li>

            <li>
              <a
                href="https://playvalorant.com/pt-br/maps/"
                target="_blank"
                rel="noreferrer"
              >
                Mapas
              </a>
            </li>

            <li>
              <a
                href="https://valorantesports.com/"
                target="_blank"
                rel="noreferrer"
              >
                Esports
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {children}
    </div>
  );
};
