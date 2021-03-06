import {useTranslations} from 'next-intl';
import Image from 'next/image';
import React from 'react';
import DeviceFrame from 'components/DeviceFrame';
import FadeIn from 'components/FadeIn';
import LightboxDeviceVideo from 'components/LightboxDeviceVideo';
import {ProjectAnchor} from 'components/Project';
import Project from 'components/Project/Project';
import ProjectLink from 'components/Project/ProjectLink';
import ProjectParagraph from 'components/Project/ProjectParagraph';
import ProjectTestimonial from 'components/Project/ProjectTestimonial';
import ProjectVisual from 'components/Project/ProjectVisual';

export default function ProjectsList({limit = undefined}) {
  const t = useTranslations('ProjectsList');

  function linkFor(href) {
    // eslint-disable-next-line react/display-name
    return (children) => (
      <ProjectAnchor key={href} href={href}>
        {children}
      </ProjectAnchor>
    );
  }

  const projects = [
    <Project
      key="setlist-edit"
      cta={
        <ProjectLink href={t('projects.setlistEdit.cta.href')}>
          {t('projects.setlistEdit.cta.label')}
        </ProjectLink>
      }
      id={t('projects.setlistEdit.id')}
      intro={t('projects.setlistEdit.intro')}
      testimonial={
        <ProjectTestimonial
          image={
            <Image
              alt={t('projects.setlistEdit.testimonial.personName')}
              height={240}
              src={require('../../assets/christof-flachsmann.jpg')}
              width={160}
            />
          }
          personLink={t('projects.setlistEdit.testimonial.personLink')}
          personName={t('projects.setlistEdit.testimonial.personName')}
          personTitle={t('projects.setlistEdit.testimonial.personTitle')}
          quote={t('projects.setlistEdit.testimonial.quote')}
        />
      }
      title={t('projects.setlistEdit.title')}
      visual={
        <ProjectVisual>
          <DeviceFrame type="desktop">
            <Image
              alt=""
              height={305}
              src={require('../../assets/setlist-edit-desktop.png')}
              width={550}
            />
          </DeviceFrame>
          <LightboxDeviceVideo
            poster={require('../../assets/setlist-edit-mobile-poster.png')}
            source={require('../../assets/setlist-edit-mobile.mp4')}
          />
        </ProjectVisual>
      }
    >
      <ProjectParagraph>
        {t('projects.setlistEdit.description1', {
          visits: linkFor(t('projects.setlistEdit.visitsHref')),
          client: linkFor(t('projects.setlistEdit.clientHref'))
        })}
      </ProjectParagraph>
      <ProjectParagraph>
        {t('projects.setlistEdit.description2')}
      </ProjectParagraph>
    </Project>,
    <Project
      key="kuechenfinder"
      cta={
        <ProjectLink href={t('projects.kuechenfinder.cta.href')}>
          {t('projects.kuechenfinder.cta.label')}
        </ProjectLink>
      }
      id={t('projects.kuechenfinder.id')}
      intro={t('projects.kuechenfinder.intro')}
      title={t('projects.kuechenfinder.title')}
      visual={
        <ProjectVisual>
          <DeviceFrame type="desktop">
            <Image
              alt=""
              height={336}
              src={require('../../assets/kfi-shops-desktop.png')}
              width={550}
            />
          </DeviceFrame>
          <DeviceFrame>
            <Image
              alt=""
              height={286}
              src={require('../../assets/kfi-configurator-1.png')}
              width={160}
            />
          </DeviceFrame>
        </ProjectVisual>
      }
    >
      <ProjectParagraph>
        {t('projects.kuechenfinder.description1', {
          client: linkFor(t('projects.kuechenfinder.clientHref'))
        })}
      </ProjectParagraph>
      <ProjectParagraph>
        {t('projects.kuechenfinder.description2')}
      </ProjectParagraph>
    </Project>,
    <Project
      key="alpine"
      id={t('projects.alpine.id')}
      intro={t('projects.alpine.intro')}
      title={t('projects.alpine.title')}
      visual={
        <ProjectVisual>
          <DeviceFrame type="desktop">
            <Image
              alt=""
              height={305}
              src={require('../../assets/alpine-component-library.png')}
              width={550}
            />
          </DeviceFrame>
        </ProjectVisual>
      }
    >
      <ProjectParagraph>
        {t('projects.alpine.description1', {
          client: linkFor(t('projects.alpine.clientHref'))
        })}
      </ProjectParagraph>
      <ProjectParagraph>{t('projects.alpine.description2')}</ProjectParagraph>
    </Project>,
    <Project
      key="zemtu"
      cta={
        <ProjectLink href={t('projects.zemtu.cta.href')}>
          {t('projects.zemtu.cta.label')}
        </ProjectLink>
      }
      id={t('projects.zemtu.id')}
      intro={t('projects.zemtu.intro')}
      title={t('projects.zemtu.title')}
      visual={
        <ProjectVisual>
          <DeviceFrame>
            <Image
              alt=""
              height={300}
              src={require('../../assets/zemtu-1.png')}
              width={169}
            />
          </DeviceFrame>
          <DeviceFrame>
            <Image
              alt=""
              height={300}
              src={require('../../assets/zemtu-2.png')}
              width={169}
            />
          </DeviceFrame>
          <DeviceFrame>
            <Image
              alt=""
              height={300}
              src={require('../../assets/zemtu-3.png')}
              width={169}
            />
          </DeviceFrame>
        </ProjectVisual>
      }
    >
      <ProjectParagraph>{t('projects.zemtu.description1')}</ProjectParagraph>
      <ProjectParagraph>{t('projects.zemtu.description2')}</ProjectParagraph>
    </Project>,
    <Project
      key="shoemondo"
      cta={
        <ProjectLink href={t('projects.shoemondo.cta.href')}>
          {t('projects.shoemondo.cta.label')}
        </ProjectLink>
      }
      id={t('projects.shoemondo.id')}
      intro={t('projects.shoemondo.intro')}
      title={t('projects.shoemondo.title')}
      visual={
        <ProjectVisual>
          <DeviceFrame>
            <Image
              alt=""
              height={300}
              src={require('../../assets/shoemondo-1.png')}
              width={169}
            />
          </DeviceFrame>
          <DeviceFrame>
            <Image
              alt=""
              height={300}
              src={require('../../assets/shoemondo-2.png')}
              width={169}
            />
          </DeviceFrame>
          <DeviceFrame>
            <Image
              alt=""
              height={300}
              src={require('../../assets/shoemondo-3.png')}
              width={169}
            />
          </DeviceFrame>
        </ProjectVisual>
      }
    >
      <ProjectParagraph>
        {t('projects.shoemondo.description1')}
      </ProjectParagraph>
      <ProjectParagraph>
        {t('projects.shoemondo.description2')}
      </ProjectParagraph>
    </Project>
  ];

  return projects.slice(0, limit).map((project, index) => (
    <FadeIn key={project.key} delay={0.6 + index * 0.2}>
      {project}
    </FadeIn>
  ));
}
