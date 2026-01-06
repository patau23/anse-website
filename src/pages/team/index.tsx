import { PAGE_CONTAINER_CLASS } from '@/shared/layout/constants';
import { cn } from '@/shared/lib/utils';

const GLASS_CARD_CLASS =
  'bg-[rgba(46,78,207,0.12)] border border-[#2e4ecf] rounded-[16px] shadow-[0px_-4px_40px_-14.024px_rgba(46,78,207,0.52)]';

function TeamImagePlaceholder() {
  return (
    <div className="absolute inset-0 rounded-xl">
      <div className="absolute inset-0 rounded-xl bg-linear-to-br from-white/25 to-white/5" />
      <div className="absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_60%)]" />
      <div className="absolute inset-0 rounded-xl bg-linear-to-b from-[rgba(46,78,207,0)] from-[81.905%] to-[#2e4ecf]" />
    </div>
  );
}

function MemberCard(props: {
  name: string;
  experience: string;
  tag: string;
  description: string;
}) {
  const { name, experience, tag, description } = props;

  return (
    <article className={cn('relative flex flex-col items-center gap-5 p-6', GLASS_CARD_CLASS)}>
      <div className="relative flex h-[420px] w-full items-end justify-center overflow-hidden rounded-xl px-7 py-5">
        <TeamImagePlaceholder />
        <h2 className="relative text-center text-[28px] font-bold leading-[34px] tracking-[0.38px] text-white">
          {name}
        </h2>
      </div>

      <div className="flex w-full items-center gap-3">
        <div className="flex flex-1 items-center">
          <div className="flex gap-1 text-[17px] font-normal leading-[22px] tracking-[-0.43px]">
            <span className="text-[#c7c7cc]">Опыт:</span>
            <span className="text-white">{experience}</span>
          </div>
        </div>
        <div className="rounded-lg bg-[#2e4ecf] px-3 py-2">
          <span className="text-center text-[15px] font-semibold leading-5 tracking-[-0.23px] text-white">
            {tag}
          </span>
        </div>
      </div>

      <div className="h-px w-full bg-[#2e4ecf]" />
      <p className="w-full max-w-[486px] text-[17px] font-normal leading-[22px] tracking-[-0.43px] text-[#c7c7cc]">
        {description}
      </p>

      <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0px_4px_40px_-14.024px_rgba(46,78,207,0.52)]" />
    </article>
  );
}

export default function TeamPage() {
  const members = Array.from({ length: 5 }).map((_, index) => ({
    key: index,
    name: 'Алия Нуржанова',
    experience: '8 лет',
    tag: '# компьютерно-техническая экспертиза',
    description:
      'Краткое исследование цифровых данных, устройств и информационных систем для установления фактов и обстоятельств.',
  }));

  return (
    <main className="py-24 text-white">
      <div className={PAGE_CONTAINER_CLASS}>
        <h1 className="sr-only">Команда</h1>

        <section className="flex flex-wrap items-start justify-center gap-16 py-6">
          {members.map((member) => (
            <MemberCard
              key={member.key}
              name={member.name}
              experience={member.experience}
              tag={member.tag}
              description={member.description}
            />
          ))}
        </section>
      </div>
    </main>
  );
}
