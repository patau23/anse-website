import { PAGE_CONTAINER_CLASS } from '@/shared/layout/constants';
import { cn } from '@/shared/lib/utils';

const GLASS_CARD_CLASS =
  'bg-[rgba(46,78,207,0.12)] border border-[#2e4ecf] rounded-[16px] shadow-[0px_-4px_40px_-14.024px_rgba(46,78,207,0.52)]';

function EquipmentCard(props: { title: string; tag: string; description: string }) {
  const { title, tag, description } = props;

  return (
    <article className={cn('relative flex flex-col gap-5 p-6', GLASS_CARD_CLASS)}>
      <div className="flex w-full items-start justify-center gap-5">
        <h2 className="flex-1 text-[28px] font-normal leading-[34px] tracking-[0.38px] text-white">
          {title}
        </h2>
        <div className="shrink-0 rounded-lg bg-[#2e4ecf] px-3 py-2">
          <span className="text-center text-[15px] font-semibold leading-5 tracking-[-0.23px] text-white">
            {tag}
          </span>
        </div>
      </div>
      <div className="h-px w-full bg-[#2e4ecf]" />
      <p className="w-full text-[17px] font-normal leading-[22px] tracking-[-0.43px] text-[#c7c7cc]">
        {description}
      </p>
      <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0px_4px_40px_-14.024px_rgba(46,78,207,0.52)]" />
    </article>
  );
}

export default function EquipmentPage() {
  const items = [
    {
      title: 'IML Expert',
      tag: '# программное обеспечение',
      description:
        'Применяется для анализа цифровых носителей, восстановления удалённых данных и выявления признаков вмешательства. Позволяет работать с широким спектром файловых систем',
    },
    {
      title: 'FTK Imager',
      tag: '# программное обеспечение',
      description:
        'Применяется для анализа цифровых носителей, восстановления удалённых данных и выявления признаков вмешательства. Позволяет работать с широким спектром файловых систем',
    },
    {
      title: 'Leica FS C',
      tag: '# компаратор',
      description:
        'Применяется для анализа цифровых носителей, восстановления удалённых данных и выявления признаков вмешательства. Позволяет работать с широким спектром файловых систем',
    },
    {
      title: 'Zeiss Stemi 508',
      tag: '# микроскоп',
      description:
        'Применяется для анализа цифровых носителей, восстановления удалённых данных и выявления признаков вмешательства. Позволяет работать с широким спектром файловых систем',
    },
  ];

  return (
    <main className="py-24 text-white">
      <div className={PAGE_CONTAINER_CLASS}>
        <h1 className="sr-only">Оборудование</h1>

        <section className="grid gap-[42px] py-6 lg:grid-cols-2">
          {items.map((item) => (
            <EquipmentCard
              key={item.title}
              title={item.title}
              tag={item.tag}
              description={item.description}
            />
          ))}
        </section>
      </div>
    </main>
  );
}
