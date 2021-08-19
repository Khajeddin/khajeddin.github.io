import React from 'react';

import * as Styled from './styles';

interface Props {
  title: string;
  subtitle: string;
  content: React.ReactNode;
  startDate: string;
  endDate: string;
}

const Timeline: React.FC<Props> = ({ title, subtitle, content, startDate, endDate }) => (
  <Styled.Timeline>
    <Styled.Point />
    <div className="w-full sm:w-1/3">
      <Styled.Date>
        {startDate} - {endDate}
      </Styled.Date>
      <div className="font-semibold mt-3">{title}</div>
      <div className="text-xs">{subtitle}</div>
    </div>
    <div className="w-full sm:w-2/3 mt-4 sm:mt-0">{content}</div>
  </Styled.Timeline>
);

export default Timeline;
