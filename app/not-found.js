import Link from "next/link";

const NotFound = () => {
  return (
    <main className="container grid place-content-center mt-14 md:mt-20">
<div className="text-center">
    <h2 className="text-2xl font-semibold font-roboto mb-4">Uh oh!</h2>
    <p className="text-base font-poppins mb-6">You seem to be lost. Let's find you a way home.</p>
    <Link href="/" className="text-gray-200 font-poppins text-sm">Return home</Link>
    </div>

    </main>
    )
}

export default NotFound;
