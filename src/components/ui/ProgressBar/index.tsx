import React from 'react';

import * as Styled from './styles';

interface Props extends Styled.StyledProps {
  title: string;
}

const ProgressBar: React.FC<Props> = ({ title, percentage }) => (
  <div className="p-3">
    <div className="w-full flex justify-between">
      <h3 className="font-semibold">{title}</h3>
      <h3 className="font-semibold">{percentage}%</h3>
    </div>
    <div className="w-full h-2 bg-gray-300 rounded overflow-hidden mt-1">
      <Styled.Bar percentage={percentage} />
    </div>
  </div>
);

export default ProgressBar;
