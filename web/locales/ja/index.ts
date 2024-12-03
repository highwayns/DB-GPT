import { ChatJp } from './chat';
import { CommonJp } from './common';
import { FlowJp } from './flow';

const ja = {
  ...ChatJp,
  ...FlowJp,
  ...CommonJp,
};

export default ja;
