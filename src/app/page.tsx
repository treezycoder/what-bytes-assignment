import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="p-4">
      Ngahame&apos;s Assignment
      <Link href="/dashboard">
        <button className="p-2 ml-2 text-lg font-sans text-white hover:scale-105 bg-blue-600 hover:bg-blue-800 transition-all duration-100 rounded-lg">
          Go to dashboard
        </button>
      </Link>
    </main>
  );
}
