import type { Meta, StoryObj } from '@storybook/vue3'
import { fn } from 'storybook/test'
import { ElButton } from '@yza-fe/element-plus'
console.log(ElButton, 'ElButton')
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'ElementPlus/ElButton',
  component: ElButton,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    backgroundColor: { control: 'color' },
  },
  args: {
    primary: false,
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    onClick: fn(),
  },
} satisfies Meta<typeof ElButton>

export default meta
type Story = StoryObj<typeof meta>
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */

 const Template = (args) => ({
  components: { ElButton },
  setup() {
    return { args };
  },
  template: '<ElButton>xxx</ElButton>',
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

// export const Primary: Story = {
//   args: {
//     primary: true,
//     label: 'ElButton',
//     child: 'xxx'
//   },
// }

export const Secondary: Story = {
  args: {
    primary: false,
    label: 'ElButton',
  },
}

export const Large: Story = {
  args: {
    label: 'ElButton',
    size: 'large',
  },
}

export const Small: Story = {
  args: {
    label: 'ElButton',
    size: 'small',
  },
}