export default function PaymentBlockedPage() {
      return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
                  <div className="max-w-2xl text-center border border-red-500 p-10 rounded-2xl bg-zinc-900 shadow-2xl">

                        <h1 className="text-5xl font-bold text-red-500 mb-6">
                              Project Suspended
                        </h1>

                        <p className="text-xl text-gray-300 mb-4">
                              This project has been temporarily disabled.
                        </p>

                        <p className="text-gray-400 leading-relaxed mb-8">
                              The owner has not completed the pending payment for development services.
                              Until the outstanding amount is cleared, the website and related services
                              will remain unavailable.
                        </p>

                        <button className="bg-red-600 hover:bg-red-700 transition px-8 py-3 rounded-xl font-semibold">
                              Resolve Payment Issue
                        </button>
                  </div>
            </div>
      );
}