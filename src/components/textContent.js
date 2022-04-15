import { h } from 'vue';

const TextContent = (props) => {
  return h(
    props.type,
    {
      class: 'text-content',
    },
    props.content
  );
};
export default TextContent;
