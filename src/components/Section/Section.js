import React from 'react';
import Wrapper from 'components/Wrapper';
import Text from 'components/Text';
import SectionTitle from './SectionTitle';
import styles from './Section.module.scss';

export default function Section({children, description, id, title}) {
  return (
    <div className={styles.root} id={id}>
      <Wrapper>
        <SectionTitle>{title}</SectionTitle>
        {description && (
          <Text className={styles.description} variant="h3">
            {description}
          </Text>
        )}
      </Wrapper>
      <div className={styles.children}>{children}</div>
    </div>
  );
}
