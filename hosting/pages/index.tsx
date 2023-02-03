import Link from 'next/link'

export default function IndexPage({ name }) {
  return (
    <div>
      Hello {name}. <Link href="/about">About</Link>
    </div>
  );
}

export const getServerSideProps = async () => {
  return {
    props: {
      name: "Chalo",
    },
  };
};