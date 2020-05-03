import React from 'react';
import SEO from '../components/Seo';
import Card from '../components/Card';
import Section from '../components/Section';
import styles from './styles.module.scss';
import {
  workExperience, education, skills, furtherTraining, languages
} from '../data';


const IndexPage = () => (
  <>
    <SEO title="Home" />
    <>
      <Section
        className={styles.workExperience}
        title="💼 Work Experience"
        items={workExperience}
        childrenStyles={styles}
        render={
          (item, index, parentStyles) => (
            <div className={`${parentStyles.item} ${styles.item}`} key={item.id + index} >
              <p>{item.date}</p>
              <Card className={styles.card}>
                <h4>{item.company}</h4>
                <h5>{item.role}</h5>
                <h6><span role="img" aria-label="location">📍</span>{item.location}</h6>
                <ul>
                  {
                    item.tasks && item.tasks.map(task => (
                      <li key={task}>{task}</li>
                    ))
                  }
                </ul>
              </Card>
            </div>
          )
        }
      />

      <Section
        className={styles.education}
        title="🎓 Education"
        items={education}
        childrenStyles={styles}
        render={
          (item, index, parentStyles) => (
            <div className={`${parentStyles.item} ${styles.item}`} key={item.id + index} >
              <p>{item.date}</p>
              <Card className={styles.card}>
                <h4>{item.school}</h4>
                <h5>{item.studies}</h5>
                <h6><span role="img" aria-label="location">📍</span>{item.location}</h6>
              </Card>
            </div>
          )
        }
      />

      <Section
        className={styles.skills}
        title="💻 Skills"
        items={skills}
        childrenStyles={styles}
        render={
          (item, index, parentStyles) => (
            <div className={`${parentStyles.item} ${styles.item}`} key={item.id + index} >
              <p>{item.title}</p>
              <Card className={styles.card}>
                <ul>
                  {
                    item.technologies && item.technologies.map(tech => (
                      <li key={tech.title}>
                        <img src={tech.img} alt={tech.title} />
                        <span>{tech.title}</span>
                      </li>
                    ))
                  }
                </ul>
              </Card>
            </div>
          )
        }
      />

      <Section
        className={styles.furtherTraining}
        title="📚 Further Training"
        items={furtherTraining}
        childrenStyles={styles}
        render={
          (item, index, parentStyles) => (
            <div className={`${parentStyles.item} ${styles.item}`} key={item.id + index} >
              <Card className={styles.card}>
                <h4>{item.school}</h4>
                <h5>{item.course}</h5>
              </Card>
            </div>
          )
        }
      />

      <Section
        className={styles.languages}
        title="🌍 Languages"
        items={languages}
        childrenStyles={styles}
        render={
          (item, index, parentStyles) => (
            <div className={`${parentStyles.item} ${styles.item}`} key={item.id + index} >
              <Card className={styles.card}>
                <h4>
                  <img src={item.img} alt={item.language} />
                  {item.language}
                </h4>
                <h5>{item.level}</h5>
                <h6>{item.description}</h6>
              </Card>
            </div>
          )
        }
      />
    </>
  </>
);

export default IndexPage;
