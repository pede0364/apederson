import {FC, memo} from 'react';

import {TimelineItem} from '../../../data/dataDef';

const TimelineItem: FC<{item: TimelineItem}> = memo(({item}) => {
  const {title, date, location, content} = item;
  return (
    <div className="flex flex-col pb-8 text-left last:pb-0">
      <div className="flex flex-col pb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="flex items-left justify-between gap-x-2 md:justify-start">
          <span className="flex-3 text-sm font-medium italic sm:flex-none">{location}</span>
          <span className="invisible sm:visible">•</span>
          <span className="flex-2 sm:text-right text-sm">{date}</span>
        </div>
      </div>
      {content}
    </div>
  );
});

TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;
