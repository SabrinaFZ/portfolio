import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SEO from '../components/Seo';
import Card from '../components/Card';
import Section from '../components/Section';

import styles from './styles.module.scss';

import { projects } from '../data';

const Projects = () => (
  <>
    <SEO title="Projects" />
    <Section
      className={styles.personalProjects}
      title="📁 Personal Projects"
      items={projects}
      childrenStyles={styles}
      active={true}
      render={
        (item, index, parentStyles) => (
          <a
            href={item.url}
            target="__blank"
            className={`${parentStyles.item} ${styles.item}`} key={item.id + index}
          >
            <Card className={styles.card}>
              <h4>
                <FontAwesomeIcon icon={item.icon} />
                {item.title}
              </h4>
              <h5>{item.content}</h5>
            </Card>
          </a>
        )
      }
    />
  </>
);

export default Projects;
