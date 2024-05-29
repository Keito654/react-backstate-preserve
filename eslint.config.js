import antfu from '@antfu/eslint-config';

export default antfu({
  typescript: {
    tsconfigPath: 'tsconfig.json',
  },
  react: true,
  stylistic: {
    semi: true,
  },
});
