import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {
  findFirstCategoryLink,
  useDocById,
} from '@docusaurus/theme-common/internal';
import isInternalUrl from '@docusaurus/isInternalUrl';
import {translate} from '@docusaurus/Translate';
import styles from './styles.module.css';
function CardContainer({href, children}) {
  return (
     <Link href={href}>
       {children}
     </Link>
  );
}
function CardLayout({href, title, description}) {
  return (
    <CardContainer href={href}>
      {!description && (
              <div className={clsx('text--truncate', styles.cardTitle)} title={title}>
                      <li style={{ marginLeft: '45px' }}><span>{title}</span></li>
              </div>
      )}
      {description && (
        <div className={clsx('text--truncate', styles.cardTitle)} title={title}>
                <li style={{ marginLeft: '45px' }}><span>{title} </span> — {description}</li>
        </div>
      )}
    </CardContainer>
  );
}
function CardCategory({item}) {
  const href = findFirstCategoryLink(item);
  // Unexpected: categories that don't have a link have been filtered upfront
  if (!href) {
    return null;
  }
  if (item.items.length > 1) {
    return (
        <CardLayout
          href={href}
          title={item.label}
          description={
            item.description ??
            translate(
              {
                message: '{count} items',
                id: 'theme.docs.DocCard.categoryDescription',
                description:
                  'The default description for a category card in the generated index about how many items this category includes',
              },
              {count: item.items.length},
            )
          }
        />
      );
  } else {
    return (
            <CardLayout
              href={href}
              title={item.label}
              description={
                item.description ??
                translate(
                  {
                    message: '{count} item',
                    id: 'theme.docs.DocCard.categoryDescription',
                    description:
                      'The default description for a category card in the generated index about how many items this category includes',
                  },
                  {count: item.items.length},
                )
              }
            />
          );
  }
}
function CardLink({item}) {
  const doc = useDocById(item.docId ?? undefined);
  return (
    <CardLayout
      href={item.href}
      title={item.label}
    />
  );
}
export default function DocCard({item}) {
  switch (item.type) {
    case 'link':
      return <CardLink item={item} />;
    case 'category':
      return <CardCategory item={item} />;
    default:
      throw new Error(`unknown item type ${JSON.stringify(item)}`);
  }
}
