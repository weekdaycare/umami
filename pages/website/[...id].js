import React from 'react';
import { useRouter } from 'next/router';
import Layout from 'components/layout/Layout';
import WebsiteDetails from 'components/WebsiteDetails';
import useRequireLogin from 'hooks/useRequireLogin';

export default function DetailsPage() {
  const { loading } = useRequireLogin();
  const router = useRouter();
  const { id } = router.query;

  if (!id || loading) {
    return null;
  }

  return (
    <Layout>
      <WebsiteDetails websiteId={+id[0]} />
    </Layout>
  );
}