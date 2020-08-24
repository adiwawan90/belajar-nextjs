import Layout from '@common/components/layout'
import Link from 'next/link'

const HomePage = ({ products }) => {
  const { list } = products;
  return (
    <Layout>

      <div className="container">

        <Link href="/about" >
          <a>Menuju About Page</a>
        </Link>
        {list.map((item) => {
          return (
            <div key={item.id}>
              <ul>
                <li>{ item.name }</li>
              </ul>
            </div>
          )
        })}


      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/products');
  const products = await res.json();

  return {
    props: {
      products,
      helo: 'Helloooo'
    }
  }
}

export default HomePage;
