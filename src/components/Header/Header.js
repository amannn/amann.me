import cx from 'classnames';
import Text from 'components/Text';
import Wrapper from 'components/Wrapper';
import styles from './Header.module.scss';

export default function Header({
  description = undefined,
  slim = false,
  showPortrait = false,
  subtitle = undefined,
  title
}) {
  return (
    <div className={cx(styles.root, showPortrait && styles.root_showPortrait)}>
      <Wrapper innerClassName={styles.inner}>
        {title && (
          <div className={cx(styles.text, slim && styles.text_slim)}>
            <Text className={styles.title} component="h1" variant="h1">
              {title}
            </Text>
            <Text
              className={styles.subtitle}
              color="accent"
              component="h2"
              variant="h3"
            >
              {subtitle}
            </Text>
            <Text>{description}</Text>
          </div>
        )}
        {showPortrait && <div className={styles.portrait} />}
      </Wrapper>
    </div>
  );
}
