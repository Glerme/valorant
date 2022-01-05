import Image from 'next/image';

import styles from './styles.module.scss';

export const IndexView: React.FC = () => {
  return (
    <div className={styles['container']}>
      <div className={styles['cards']}>
        <section className={styles['title']}>
          <Image
            src="/LogoValorant.svg"
            width={100}
            height={100}
            title="Valorant"
            alt="Valorant"
          />
          <h1>Valorant</h1>
        </section>

        <div className={styles['card']}>
          {/* <Image
            src="/images/omem.png"
            width={150}
            height={150}
            title="Omem"
            alt="Omem"
          /> */}

          <img src="/images/omem.png" title="Omem" alt="Omem" />

          <div className={styles['resume']}>
            <h4>Omem</h4>

            <p>
              Omen, uma lembrança fantasmagórica, caça nas sombras. Ele cega os
              inimigos, teleporta-se pelo campo e deixa a paranoia assumir o
              controle enquanto o adversário tenta descobrir de onde virá seu
              próximo ataque.
            </p>
          </div>
        </div>
        <div className={styles['card']}>
          {/* <Image
            src="/images/sage.png"
            width={150}
            height={150}
            title="Sage"
            alt="Sage"
          /> */}

          <img src="/images/sage.png" title="Sage" alt="Sage" />

          <div className={styles['resume']}>
            <h4>Sage</h4>

            <p>
              Como uma verdadeira fortaleza chinesa, Sage traz segurança para si
              mesma e para a equipe aonde quer que vá. Capaz de reviver aliados
              e rechaçar investidas agressivas, ela oferece um centro de
              calmaria em meio ao caos da batalha.
            </p>
          </div>
        </div>
        <div className={styles['card']}>
          {/* <Image
            src="/images/sova.png"
            width={150}
            height={150}
            title="Sova"
            alt="Sova"
          /> */}

          <img src="/images/sova.png" title="Sova" alt="Sova" />

          <div className={styles['resume']}>
            <h4>Sova</h4>

            <p>
              Nascido sob o eterno inverno das tundras russas, Sova rastreia,
              encontra e elimina inimigos com eficiência e precisão implacáveis.
              Seu arco personalizado e suas habilidades inigualáveis de
              reconhecimento garantem que nenhuma presa escape.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
