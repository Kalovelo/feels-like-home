import React from 'react';
import '../styles/styles.scss';
import {Button} from  '../Components/components/button';
import { withKnobs,text } from '@storybook/addon-knobs';
export default {
  title: 'Button',
  component: Button,
  decorators:[withKnobs]
};


export const bottonStory = () => (
  <Button class="button--square" text={text("Label", "Hello Storybook")}/>
);
