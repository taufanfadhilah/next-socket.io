import Layout from "../components/layout";
import Card from '../components/card'

export default function Home() {
  return (
    <Layout>
      <div className="row">
        <div className="col m12 s12">
          <h5>All Videos</h5>
          <hr />
        </div>
        {[1, 2, 3, 4].map((i) => (
          <div className="col m4">
            <Card />
          </div>
        ))}
      </div>
    </Layout>
  );
}
