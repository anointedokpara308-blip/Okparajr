import { Quote } from 'lucide-react';
import Reveal from '../ui/Reveal';

const RECOMMENDATIONS = [
  {
    id: 'mazi-vincent',
    name: 'Mazi Vincent',
    role: 'Manager ListaccTech Academy',
    meta: 'Mentor • January 20, 2026',
    quote:
      '"Anointed approaches frontend development with rare clarity and product discipline. He turns rough ideas and multi-page flows into responsive React interfaces without unnecessary visual clutter, paying close attention to state handling, layout balance, and real-world usability. Whether building interactive tools, refining navigation, or shipping full web applications, he is reliable, iterative, and focused on getting practical software across the finish line."',
  },
  {
    id: 'nweke-christian',
    name: 'Nweke Christian Chinonso',
    role: 'Trainer ListaccTech Academy',
    meta: 'Mentor • June 15, 2026',
    quote:
      '"Anointed is a dedicated and enthusiastic learner who has demonstrated a genuine passion for Web Development. During his training, he showed a willingness to learn, adapt, and improve his technical skills. He has built a solid foundation in frontend development, and I am confident that with consistency, creativity, and continuous learning, he has the potential to become an outstanding developer. I wish him continued success in his journey."',
  },
];

export default function Recommendations() {
  return (
    <section className="px-4 py-16 sm:px-6 md:px-8 md:py-24">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <Reveal delay={0}>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted sm:text-sm">
              Recommendations
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-primary sm:text-3xl md:text-4xl">
              Words from my mentors and colleagues.
            </h2>
          </div>
        </Reveal>

        {/* Recommendations Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {RECOMMENDATIONS.map((item, index) => (
            <Reveal key={item.id} delay={80 + index * 70}>
              <article className="flex h-full flex-col justify-between rounded-2xl border border-line bg-surface p-5 shadow-lg shadow-black/20 backdrop-blur-md transition-colors hover:border-line-hover sm:p-6">
                <div>
                  <Quote className="h-5 w-5 text-accent" />

                  <p className="mt-4 text-sm leading-relaxed text-secondary sm:text-base">
                    “{item.quote}”
                  </p>
                </div>

                <div className="mt-6 border-t border-line pt-4">
                  <p className="text-sm font-semibold text-primary">
                    {item.name}
                  </p>
                  <p className="mt-0.5 text-xs text-secondary">
                    {item.role}
                  </p>
                  <p className="mt-1 font-mono text-xs text-muted">
                    {item.meta}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}