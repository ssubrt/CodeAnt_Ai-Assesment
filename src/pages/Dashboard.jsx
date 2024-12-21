import Layout from '../components/layout/Layout';
import RepositoryList from '../components/repositories/RepositoryList';

export default function Dashboard() {
  return (
    <Layout>
      <RepositoryList />
    </Layout>
  );
}