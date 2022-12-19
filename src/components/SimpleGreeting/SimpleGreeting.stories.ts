import { html, TemplateResult } from 'lit';
import './SimpleGreeting';

export default {
  title: 'SimpleGreeting',
  component: 'simple-greeting',
};

const Template = () =>
  html` <simple-greeting text="テキスト!!"></simple-greeting>`;

export const Regular = Template.bind({});
