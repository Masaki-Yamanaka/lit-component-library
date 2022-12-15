import { html, TemplateResult } from 'lit';
import './SimpleGreeting';

export default {
  title: 'SimpleGreeting',
  component: 'simple-greeting',
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  title?: string;
  counter?: number;
  textColor?: string;
  slot?: TemplateResult;
}

const Template: Story<ArgTypes> = ({}: ArgTypes) =>
  html` <simple-greeting></simple-greeting>`;

export const Regular = Template.bind({});
