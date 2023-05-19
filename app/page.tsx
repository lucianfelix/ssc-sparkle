import HeadlessPage from '#/components/HeadlessPage';
import '#/styles/globals.scss';
import { downloadData } from '#/components/utils';

import React from 'react';
import { cache } from 'react';
import TimelineAnimationWrapper from '#/components/TimelineWrapper';
import '../styles/anim.css'

export const revalidate = 3600; // revalidate every minute? sec?

export function generateMetadata() : any {
  return {
    title: 'Sparkle',
    description: 'Sparkle RSC demo',
    keywords: 'sparkle, rsc, demo, nextjs, react, aem',
    // link: [
    //   {
    //     rel: 'preload',
    //     fetchPriority: "high",
    //     as: 'image',
    //     href: '/_next/image?url=https%3A%2F%2Fpublish-p81252-e700817.adobeaemcloud.com%2F%2Fcontent%2Fdam%2Fsample-wknd-app%2Fen%2Fimage-files%2Fbiker.png&amp;w=640&amp;q=90',
    //   }
    // ],
  };
}

export default async function Page() {

  const props = await fetchDataCached();

  const data = props.desktopData;

  console.log("Rendering page at",
    new Date(),
  );

  return (
    <TimelineAnimationWrapper>
      <HeadlessPage
        data={data}
        isAuthorVersion={props.isAuthorVersion}
        host={props.customHost}
      />
    </TimelineAnimationWrapper>

  );
}

const fetchDataCached = cache(async () => {
  const data = await fetchData();
  return data;
});

async function fetchData() {
  console.log('fetchData()');

  const hostConfig = {
    authorHost: 'https://author-p81252-e700817.adobeaemcloud.com',
    publishHost: 'https://publish-p81252-e700817.adobeaemcloud.com/',
    endpoint: 'sample-wknd-app/homepage',
  };

  let props = {
    desktopData: await downloadData(hostConfig, 'noanimation'),
    // mobileData: await downloadData(hostConfig, 'mobile'),
    isAuthorVersion: false,
    customHost: 'https://publish-p81252-e700817.adobeaemcloud.com/',
    fetchError: null,
  };

  return props;
}
