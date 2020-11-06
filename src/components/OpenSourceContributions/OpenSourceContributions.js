import React, {cloneElement, useState} from 'react';
import FadeIn from 'components/FadeIn';
import ResponsiveGrid from 'components/ResponsiveGrid';
import styles from './OpenSourceContributions.module.scss';
import OpenSourceContributionsItem from './OpenSourceContributionsItem';

export default function OpenSourceContributions({
  contributions,
  pageSize = 4,
  showMoreButton
}) {
  const [limit, setLimit] = useState(pageSize);
  const paginatedNodes = contributions.nodes.slice(0, limit);
  const hasMore = paginatedNodes.length < contributions.nodes.length;

  function onShowMore() {
    setLimit(limit + pageSize);
  }

  return (
    <>
      <ResponsiveGrid>
        {paginatedNodes.map((contribution, index) => (
          <FadeIn
            key={contribution.repository.id}
            delay={Math.max((index - (limit - pageSize)) * 0.15, 0)}
          >
            <OpenSourceContributionsItem contribution={contribution} />
          </FadeIn>
        ))}
      </ResponsiveGrid>
      {hasMore &&
        cloneElement(showMoreButton, {
          className: styles.showMoreButton,
          onClick: onShowMore
        })}
    </>
  );
}
