export default function NotesJournal() {
  return (
    <section id="notes" aria-labelledby="notes-heading" className="scroll-mt-20 border-y border-zinc-800/80 bg-[#0e0e11] py-14 sm:py-20">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-lime-400">Field notes · 01</p>
            <h2 id="notes-heading" className="mt-3 max-w-lg text-3xl font-bold tracking-tight text-white sm:text-4xl">
              The work, with the thinking left in.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-zinc-400 sm:text-base">
            Build notes, tutorials, and decisions from things I am actually making. Each note connects the idea to code, tradeoffs, or a project you can inspect.
          </p>
        </div>

        <article className="mt-8 border border-lime-400/35 bg-[#121215] p-5 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-800 pb-4">
            <span className="font-mono text-xs uppercase tracking-wider text-lime-400">Today’s note · 15 Nov 2026</span>
            <span className="font-mono text-xs text-zinc-500">VOICE AGENTS · RETRIEVAL</span>
          </div>

          <div className="grid gap-8 pt-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="font-mono text-xs text-zinc-600">01 / SEARCH THAT CAN FIND THE EXACT THING</p>
              <h3 className="mt-3 max-w-2xl text-2xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                How we used BM25 in voice agents
              </h3>
              <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-300">
                A voice agent needs to retrieve the right context after a person speaks. We used BM25 as the keyword-search part of a hybrid retrieval pipeline: it helps find passages that contain the important words from the transcribed request.
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-400">
                BM25 is a ranking algorithm for text search. It scores documents using query-term matches, giving useful weight to terms that are informative and accounting for document length. That makes it good at finding exact names, product terms, and identifiers that a semantic search can overlook.
              </p>

              <div className="mt-7 border-l-2 border-lime-400/60 pl-4">
                <h4 className="font-mono text-xs uppercase tracking-wider text-lime-400">The retrieval path</h4>
                <ol className="mt-3 space-y-2 text-sm leading-6 text-zinc-300">
                  <li><span className="mr-2 font-mono text-zinc-600">01</span>Speech is transcribed into a text query.</li>
                  <li><span className="mr-2 font-mono text-zinc-600">02</span>BM25 finds keyword matches while dense search finds semantically related passages.</li>
                  <li><span className="mr-2 font-mono text-zinc-600">03</span>The candidates are combined and a cross-encoder reranks them for relevance.</li>
                  <li><span className="mr-2 font-mono text-zinc-600">04</span>The strongest context is given to the agent to ground its response.</li>
                </ol>
              </div>
            </div>

            <aside className="flex flex-col border border-zinc-800 bg-[#0d0d10] p-5 sm:p-6">
              <h4 className="font-mono text-xs uppercase tracking-wider text-zinc-500">Why hybrid search?</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-300">
                BM25 is strong when the wording matters. Dense retrieval is useful when the user phrases an idea differently from the source. Combining them gives the agent both lexical precision and semantic recall; reranking then helps put the most relevant evidence first.
              </p>
              <div className="mt-5 space-y-2 border-t border-zinc-800 pt-4 font-mono text-xs">
                <p className="flex justify-between gap-3"><span className="text-zinc-500">BM25</span><span className="text-zinc-300">Exact term matches</span></p>
                <p className="flex justify-between gap-3"><span className="text-zinc-500">Dense vectors</span><span className="text-zinc-300">Meaning matches</span></p>
                <p className="flex justify-between gap-3"><span className="text-zinc-500">Cross-encoder</span><span className="text-zinc-300">Candidate reranking</span></p>
              </div>
              <p className="mt-5 border-t border-zinc-800 pt-4 text-xs leading-5 text-zinc-500">
                One practical limit: BM25 matches the transcript’s words. If speech recognition changes a key term, the exact match can be missed, which is one reason semantic retrieval is useful alongside it.
              </p>
              <a
                href="https://github.com/Karthik-vangapandu8/razorpay-agentic-voice-commerce"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex w-fit pt-6 font-mono text-xs text-lime-400 transition-colors hover:text-lime-300 focus-visible:outline-2 focus-visible:outline-lime-400 focus-visible:outline-offset-2"
              >
                See the voice agent project ↗
              </a>
            </aside>
          </div>

          <div className="mt-7 flex flex-wrap gap-2 border-t border-zinc-800 pt-4">
            {["BM25", "Hybrid retrieval", "Voice agents", "Reranking"].map((tag) => (
              <span key={tag} className="border border-zinc-800 px-2 py-1 font-mono text-[10px] text-zinc-500">{tag}</span>
            ))}
          </div>
        </article>
        <p className="mt-4 font-mono text-[11px] text-zinc-600">Notes are working documents: I update them as the projects change.</p>
      </div>
    </section>
  );
}
