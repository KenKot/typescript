1. `tsc --init`
2. `tsconfig.json`
   - Change:
     1. `"outDir": "./dist"`
     2. `"rootDir": "./src"`
3. `tsc --watch`
4. `node --watch dist/index.js`

```typescript
export interface Props {
  title: string;
  color?: string;
}

const Header = (props: Props) => {
  return (
    <header>
      <h1 style={{ color: props.color ? props.color : "blue" }}>
        {props.title}
      </h1>
    </header>
  );
};
```
