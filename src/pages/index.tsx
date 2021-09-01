import type { NextPage } from 'next';

import gmailCategories from 'api/gmailCategories';
import mailchimpCategories from 'api/mailchimpCategories';
import Background from 'components/Background';
import ServiceCard from 'components/ServiceCard';
import SyncButton from 'components/SyncButton';
import Head from 'next/head';
import { Container } from 'styles/pages/Home';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Take home test</title>
      </Head>
      <Background>
        <Container>
          <ServiceCard
            contactCategories={gmailCategories}
            image="/assets/images/gmailIcon.svg"
            imageAlt="Gmail icon"
            text="These Gmail contacts will sync to MailChimp"
            title="Gmail"
          />
          <SyncButton />
          <ServiceCard
            contactCategories={mailchimpCategories}
            image="/assets/images/mailchimpIcon.svg"
            imageAlt="Mailchimp icon"
            text="These Mailchimp contacts will sync to Gmail"
            title="Mailchimp"
          />
        </Container>
      </Background>
    </>
  );
};

export default Home;
