import { version } from 'react';
import { Link, useRouter } from '@cases/shared/router';
import styles from './styles.module.css';

const COMPARISON_SECTIONS = [
  { label: 'List and Input', path: '/list-and-input/comparison' },
  { label: 'List and Keys', path: '/list-and-keys/comparison' },
  { label: 'Inline Objects', path: '/inline-objects/comparison' }
];

const SECTIONS = [
  {
    links: [
      { label: 'No Memo', path: '/list-and-input/no-memo' },
      { label: 'Half Memo', path: '/list-and-input/half-memo' },
      { label: 'Fixed Half Memo', path: '/list-and-input/fixed-half-memo' },
      { label: 'Full Memo', path: '/list-and-input/full-memo' }
    ],
    title: 'List and Input'
  },
  {
    links: [
      { label: 'No Keys', path: '/list-and-keys/no-keys' },
      { label: 'Index Keys', path: '/list-and-keys/index-keys' },
      { label: 'Random Keys', path: '/list-and-keys/random-keys' },
      { label: 'Full Memo', path: '/list-and-keys/full-memo' }
    ],
    title: 'List and Keys'
  },
  {
    links: [
      { label: 'No Memo', path: '/inline-objects/no-memo' },
      { label: 'Full Memo', path: '/inline-objects/full-memo' }
    ],
    title: 'Inline Objects'
  }
];

export const Navbar = () => {
  const { currentPath } = useRouter();
  const reactVersion = version.split('.')[0];
  const is19 = reactVersion === '19';

  const getSwitchUrl = () => {
    const targetVersion = is19 ? '18' : '19';
    const targetPort = is19 ? '3018' : '3019';

    if (window.location.port === '3018' || window.location.port === '3019') {
      return `${window.location.protocol}//${window.location.hostname}:${targetPort}${window.location.pathname}${window.location.search}`;
    }

    const currentPrefix = `/v${reactVersion}/`;
    const targetPrefix = `/v${targetVersion}/`;
    return window.location.href.replace(currentPrefix, targetPrefix);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.header}>
        <Link
          to='/'
          className={styles.brand}
        >
          React Memo <span className={styles.brandAccent}>Lab</span>
        </Link>
      </div>

      <div className={`${styles.section} ${styles.important}`}>
        <h3 className={styles.sectionTitle}>Comparisons</h3>
        <ul className={styles.list}>
          {COMPARISON_SECTIONS.map(link => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`${styles.link} ${currentPath === link.path ? styles.active : ''}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.content}>
        {SECTIONS.map((section, idx) => (
          <div
            key={idx}
            className={styles.section}
          >
            <h3 className={styles.sectionTitle}>{section.title}</h3>
            <ul className={styles.list}>
              {section.links.map(link => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`${styles.link} ${currentPath === link.path ? styles.active : ''}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={styles.footer}>
        <div className={styles.versionInfo}>
          Running on <span className={styles.versionBadge}>React {version}</span>
        </div>
        <a
          href={getSwitchUrl()}
          className={styles.switchButton}
        >
          Switch to React {is19 ? '18' : '19'}
        </a>
      </div>
    </nav>
  );
};
