import Link from "next/link";
export default function TalentPool() {
  return (
    <section className="talent-pool">
      <p>NEED TO PUT TOGETHER A TEAM OF TALENTS FOR YOUR NEXT PROJECT?</p>
      <button>
        <Link href="/talent-fellowship">ACCESS OUR TALENT POOL</Link>
      </button>
    </section>
  );
}
