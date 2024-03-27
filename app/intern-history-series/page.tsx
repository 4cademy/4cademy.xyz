import Image from 'next/image'

export default function Page() {
    return(
        <main className="flex min-h-screen flex-col items-center p-24">
            <div
                className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
                <h1 className={`mb-3 text-5xl font-semibold`}>
                    Intern History Series NFTs{" "}
                </h1>
            </div>

            <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
                <a
                    href="https://uplink.wtf/basedmanagement/mintboard/post/2329?referrer=0x8A71Ff60cdEA561bb55cF3Db269c58C338a07445"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        #1 The internship program goes live{" "}
                        <span
                            className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
                    </h2>
                    <Image
                        src="/Intern_History_1.png"
                        width={500}
                        height={500}
                        className=""
                        alt="Intern_History_1"
                    />
                </a>

                <a
                    href="https://uplink.wtf/basedmanagement/mintboard/post/2423?referrer=0x8A71Ff60cdEA561bb55cF3Db269c58C338a07445"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        #2 The first NFT on the Mintboard{" "}
                        <span
                            className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
                    </h2>
                    <Image
                        src="/Intern_History_2.png"
                        width={500}
                        height={500}
                        className=""
                        alt="Intern_History_2"
                    />
                </a>

                <a
                    href="https://uplink.wtf/basedmanagement/mintboard/post/2702?referrer=0x8A71Ff60cdEA561bb55cF3Db269c58C338a07445"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        #3 The first Official Intern Card is minted{" "}
                        <span
                            className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
                    </h2>
                    <Image
                        src="/Intern_History_3.png"
                        width={500}
                        height={500}
                        className=""
                        alt="Intern_History_3"
                    />
                </a>
            </div>
        </main>
    );
}