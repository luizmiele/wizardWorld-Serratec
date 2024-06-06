import React from 'react';
import styles from './styles.module.css';

const DailyProphet = () => {
  return (
    <div className={styles.main__wrapper}>
      <main>
        <h1>The Daily Prophet</h1>
        <aside>
          <div>
            <div className={styles.issue1}>Issue #1</div>
            <div className={styles.date}>Tuesday, 01 June, 2021</div>
            <div className={styles.cost}>5 Kunts</div>
          </div>
        </aside>
        <h2 className={`${styles.titlelarge} ${styles.mainTitle}`}>
          More than 500 million copies of the Harry Potter books sold
        </h2>
        <div className={`${styles.mainText} ${styles.multiColumn}`}>
          <p>
            Twenty years ago, readers around the world first discovered the
            magical story of Harry Potter, created by J.K. Rowling. We can now
            reveal that, since that moment, half a billion Harry Potter books
            have now been sold. On average, this means one in fifteen people in
            the world owns a Harry Potter book. The 500 million sales are across
            the seven books in the series and the three companion volumes, in
            print and eBook versions.
          </p>
          <p>
            First published by Bloomsbury in 1997, the books have now been
            translated into over 80 different languages across the world, with
            more to come. From Albanian to Azerbaijani to Hebrew to Hawaiian,
            the stories are becoming accessible to more people all the time.
          </p>
        </div>
        <a
          href="https://www.wizardingworld.com/news/500-million-harry-potter-books-have-now-been-sold-worldwide"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.terrarium}
        >
          <figure>
            <img
              src="https://ebookfriendly.com/wp-content/uploads/2015/12/New-covers-for-Harry-Potter-ebooks-animated.gif"
              alt="Harry Potter Book set by J.K Rowling"
            />
            <figcaption>Harry Potter Book set by J.K Rowling</figcaption>
          </figure>
        </a>
        <a
          href="https://thedailyprophet.net/matters-of-magic/wizard-magician-breaks-statute-of-secrecy-on-christmas-eve/"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.itemWithImage} ${styles.plan} ${styles.span2} ${styles.long2}`}
        >
          <img
            src="https://i.gifer.com/MGXa.gif"
            alt="WIZARD MAGICIAN BREAKS STATUTE OF SECRECY ON CHRISTMAS EVE"
          />
          <h4>WIZARD MAGICIAN BREAKS STATUTE OF SECRECY ON CHRISTMAS EVE</h4>
          <div className={styles.multiColumn}>
            <p>
              Christmas Eve is a big day for the western world – for both
              Wizard, Witch and Muggle alike.
            </p>
            <p>
              This Christmas Eve a performer of the magical arts, also known as
              a “magician” to muggles, by the name of Ryland Silverthorne has
              caught the attention of The Department of Magical Accidents and
              Catastrophes for revealing how….. (Click To read the whole
              article)
            </p>
          </div>
        </a>
        <a
          href="https://codepen.io/oliviale/full/MZZYyO"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.hogwarts}
        >
          <div className={styles.hogwarts__title}>50% Off Hogwarts Express tickets</div>
          <div className={styles.hogwarts__image}>
            <span>Limited time offer</span>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/showcase-hogwarts.svg"
              alt="Hogwarts Express"
            />
          </div>
        </a>
        <a
          href="https://thedailyprophet.net/recipes/how-to-make-harry-potters-chocolate-frogs/"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.itemWithImage} ${styles.pasta} ${styles.withBorder}`}
        >
          <h4>How To Make Chocolate Frogs</h4>
          <p>
            Everybody loves chocolate frogs. It's impossible to not love them,
            so The Daily Prophet offers its reader with its recipe. So hold you
            frogs tight as you read this
          </p>
        </a>
        <a
          href="https://en.wikipedia.org/wiki/Quidditch"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.itemWithImage} ${styles.magazine} ${styles.withBorder}`}
        >
          <h4>Quidditch world cup nearing!</h4>
          <p>
            Quidditch fans around the world are excited as the world cup is
            nearing. So we, decided to fill those who don't know about Qudditch
            in with information.
          </p>
        </a>
        <a
          href="https://codepen.io/collection/XJyNPm"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.itemWithImage} ${styles.style}`}
        >
          <h4>Heir Of Slytherin To Start At Hogwarts This Year</h4>
          <p>
            In a recent discovery a modern-day Heir of Slytherin has been
            identified.
          </p>
          <p>
            The once magical Seidel family, who has been in hiding from the
            wizarding world for the last three generations have identified their
            daughter, Colleen, as a pure blooded witch from the lineage of
            Salazar Slytherin.
          </p>
        </a>
        <a
          href="https://thedailyprophet.net/tom-riddle/tom-riddle-and-the-prophecy-of-two/"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.itemWithImage} ${styles.toggles}`}
        >
          <img
            src="https://64.media.tumblr.com/0aa025f3805c27bd9b7dbe462676986c/56e66e3d18eb9dbc-f6/s540x810/230067ee544cfc908e766411c96862c0db18dac8.gifv"
            alt="Lord Voldemorts REAL childhood revealed!"
          />
          <h4>Lord Voldemorts REAL childhood revealed!</h4>
          <div>
            <p>
              Rita Skeeter reveals a part of her new book every witch and wizard
              are talking about!
            </p>
            <p>
              A young boy lay awake in his bed with his deep hazel eyes piercing
              the dark, watching the clock that read 11:58 PM very intently. With
              his fingers interlocked and crossed over...
            </p>
          </div>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className={styles.menu}>
          <figure>
            <img
              src="https://64.media.tumblr.com/0583757602c382d85b5233a053729bca/tumblr_opmoxsH9A01uqa1iwo2_540.gifv"
              alt="Madam Malkin's Robes for all occasions is now having a 50% sale!"
            />
            <figcaption>
              Madam Malkin's Robes for all occasions is now having a 50% sale!
            </figcaption>
          </figure>
        </a>
        <a
          href="https://thedailyprophet.net/bad-news/magical-creatures-or-new-hexs-muggles-calling-it-covid19/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.social}
        >
          <img
            className={styles.social__image}
            src="https://i.pinimg.com/originals/c6/28/87/c62887db7cea40ab5753171c86e456ef.gif"
            alt="World News"
          />
          <div className={styles.social__subtitle}>World News</div>
          <div className={styles.social__content}>
            In a series of unprecedented events, one right after another, the
            Department of Mysteries and The Department of Magical Creatures have
            undergone a joint collaboration to understand what the muggle world
            has identified as COVID19.
          </div>
        </a>
        <div className={`${styles.itemWithImage} ${styles.cssgridCollection}`}>
          <a
            href="https://thedailyprophet.net/everything-muggles/muggle-attempts-to-rob-gringotts/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cssgridCollectionImage}
          >
            <img
              src="https://i.pinimg.com/originals/76/5e/2f/765e2fcc791f21f86dbd9617c25ab563.gif"
              alt="Muggle Attempts To Rob Gringotts"
            />
          </a>
        </div>
      </main>
    </div>
  );
};

export default DailyProphet;
